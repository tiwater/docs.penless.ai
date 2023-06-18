# API Design Principles

## Overview

### Background

As a business platform, we need to provide APIs for our users to build their own apps. The overall architecture of the system can be described as follows:

- framework
- app
- APIs

The APIs can be divided into two categories: framework APIs and AI APIs.

Given the expected rapid growth of AI APIs, we need to design them in a way that is easy to implement and maintain.

### Basic Principles

- APIs and apps should be kept separate. For example, a text2text API does not belong to /chat, which is only the first consumer of the API, but not the owner. When we design and implement the APIs, we need to keep the APIs generic enough and not bound to certain app.
- APIs should be designed as black boxes. They should not be aware of the app that is using them. For example, the text2text API should not be aware of the fact that it is being used by a chat app. The API should be designed as a generic text2text API that can be used by any app.
- AI APIs should be stateless, meaning they do not actively access the context. If they require context, such as configurations or output from previous steps, it should be passed in when called.

### Access Control

We need to control access to the APIs. This means that we need to know who is using the APIs and what the quota of the APIs is.

Each app relies on a set of APIs, and each API has its own access control. Therefore, we can regard each app as a group of APIs to enable APIs in one time. Users do not understand such dependencies. They just want to enable an app, and all the APIs that the app relies on should be enabled automatically.

We need to determine which of the following two ways to use:

- Two roles: User and API. Access to API1 from App A means that the user is granted access to this API from App B automatically.

The scenario is like this: I need access to API1. You do not need to know how I use this API.

- Three roles: User, App, and API. Access to API from App A does not mean that the user is granted access to this API from App B automatically.

The scenario is like this: I need access to API1. And I need to tell you I will be using API1 from App A. I understand that I need to apply for access to API1 from App B separately.

Distinguishing the caller of APIs has some key benefits: Data analytics and billing. But this is not related to access control.

## API Design

We can divide the APIs into two categories: framework APIs and AI APIs.

### Framework APIs

As we can see, there are two scenarios for using the framework API: platform administration and user self-management. Platform operations will usually affect all the users and thus require higher privileges (which we usually call admin), and user self-management should be kept within their own privilege scope, like a sandbox.

### AI APIs

AI APIs are not always provided at an atomic level. In most cases, they are provided as a pipeline, which is a combination of multiple atomic AI APIs. For example, the text2text API is a pipeline composed of text2intent and intent2text APIs.

However, we do not want users to be aware of the pipeline. Instead, we aim to provide a unified API for the pipeline, which is text2text.

Another consideration is that we may have multiple providers for a certain feature, such as text summarization. For example, we can obtain this feature from providers like ChatGPT and Cloude, as well as from open-source models like LlaMA. For open-source models, there are also different providers, such as [Replicate.com](http://replicate.com/) and [stablediffusionapi.com](http://stablediffusionapi.com/), which offer stable diffusion standard APIs. In incorporating all of these options into our platform, we must decide which APIs to call based on their name and parameters. We should not simply list all similar APIs and ask users to choose. This is indeed a challenging task.

This principle applies to all AI API design.

## API Implementation

We can divide the APIs into framework APIs (can further divided into basic APIs and admin APIs), and AI APIs. For convenience, we do not consider the prefix of the API, such as `/api/xxx`. It will be listed as `/xxx`. 

### Basic APIs

These APIs are enabled for all users by default, such as retrieving user profiles. These APIs are safe to be called from the client side (browser, for example).

- `/user/profile` - User profile, such as name, email, avatar, etc.
- `/user/settings` - User-level settings, including app settings
- `/user/plans` - Subscription plans

We now use PocketBase as the backend, but we do not want to expose the PocketBase API to the client side. We need to provide a unified API for the client side, which is `/user/profile`.

### Admin APIs

These APIs are enabled for admin users by default. And they should not be called from the client side, such as creating a new user.

The Admin APIs are listed below:

- `/admin/users` - User management. Admins are not allowed to change the user data, but can disable a user account, or even delete it completely.
- `/admin/pricing` - This is only an example.

### AI APIs

The AI industry is constantly evolving, in contrast to management requirements. Because of this, it is difficult to predict the AI functions that will be required in the future, such as video creation, and how developers will use them. Therefore, it is important to design AI APIs that are easy to implement and maintain.

Based on the AIGC scenario, all the AI-related APIs are for content creation and manipulation. These APIs process certain inputs and output the results as files. The important factors to consider are the source data type, type of pipeline, and target data type. The general paradigm is: compute(source, target), for example:

- `imagen(text, prompt, image)` - from a pure idea to result
- `inspire(question, context as prompt, answer)` - here we can consider context part of prompt
- `extract(image, prompt, text)` - Understand the input, mostly an image, but can also be a pdf or video content
- ~~~`transform(image, prompt, image)` - Convert the input to another format, such as image to video based on the requirement from the prompt~~~

Thus, we can unify the APIs as follows:

- Endpoint: The feature, such as `/imagine` for text2image processing
- A JSON object includes the required parameter:
    - source, such as `source: { type: "image", data: { type: "image/png", src: "https://abc.com/a.png" }}`
    - prompts, such as `prompts: { prompt: “positive prompt”, negative: “negative prompt” }}`
- Target as response body, such as `target: { type "image", data: { type: "image/png", src: "https://abc.com/b.png" }}`

To maintain stable APIs, we should make them strong enough, even if it may not be the most convenient for users. Then, we can provide convenience through the SDK, achieving a balance between stability and adaptability.

### Task Tracking

The previous design lacked a critical consideration: performance. This is because AI APIs are usually time-consuming. To address this issue, we need to provide a way to track the processing status and receive partial results as early as possible. Therefore, we should consider two things:

1. Asynchronous processing
2. Status tracking and partial result retrieval

We have two cases to investigate: OpenAI and Replicate. Both provide a task tracking mechanism.

- OpenAI: In the core API `/v1/completions`, the parameter `stream` is used to enable partial response retrieval. The `[DONE]` signal in the stream indicates the completeness of the conversation.
- Replicate: In the core API `/v1/predictions`, progress is updated to the caller in multiple ways. A webhook is used as a callback in a passive way, and an `id` is used as a status tracking reference. Calling `/v1/predictions/<id>` actively updates the progress and partial result (e.g., 2 of 4 expected generated images).

We can consolidate the above approaches into the following APIs:

- `/api/ai/<feature>` - The feature, such as `/api/ai/imagine` for text-to-image processing
- If it's a long-running task, the response body should include an `id` for tracking the status.
- If it's a streamable task, it should contain a boolean parameter named `stream`. The caller can enable HTTP streaming and wait for the completion signal `[DONE]`.
- If it's a long-running non-streamable task (such as image generation), it should support the `GET` method with `id` as a URL parameter (such as `GET /v1/predictions/{id}`) to retrieve the status and partial result.

For user experience considerations, the front end should display a progress bar or something to manage user expectations. This is not a required feature of the API, but should include progress-related information in the status response body whenever possible.

### App-specific data?

Is it possible to keep all APIs non-app related? We can take this scenario as a research object.

- App specific settings? E.g., a user choose the dimension of image output
- App default settings? Such as the default value of a listbox, say, default output dimensions

These sounds are not a big deal and can fit into the scope of the three APIs mentioned above. When we develop a new app, we should consider ourselves a developer from outside. Ask ourselves two questions:

- Do these existing APIs not meet my requirements, or is it simply that I do not know how to use them? For instance, most APIs are designed for data operations, and data can be classified into either user or platform level. With a `/user/settings/app/<appid>/<key>`, you can cover almost everything you need.
- If it's true that we need to create app-specific APIs, does that relate to this platform? If not, feel free to deploy whichever platform you prefer. Railway and Vercel are both good choices.

## Conclusion

This document covers the background, basic principles, and general implementations of our APIs. Our goal is to create an elegant API system that remains clean and doesn't grow too quickly.

We will face challenges with SDK implementation, particularly in the scenario of code generation. This is an area where AI can be extremely helpful.