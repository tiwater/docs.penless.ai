# API 设计原则

## 概述

### 背景

作为一个开放的业务平台，我们需要为我们的用户提供 API 来构建他们自己的应用程序。 系统的总体架构可以描述如下：

- 框架
- 应用程序
- API

API可以分为两类：框架API和AI API。

鉴于 AI API 预期会持续快速增长，我们需要以易于实施和维护的方式设计它们。

### 基本原则

- API 和应用程序应该分开。 例如，一个 text2text API 不属于 /chat，/chat 只是 API 的第一个消费者，而不是所有者。 当我们设计和实现 API 时，我们需要保持 API 足够通用，而不是绑定到特定的应用程序。
- API 应设计为黑盒。 他们不应该知道正在使用他们的应用程序。 例如，text2text API 不应该知道它正在被聊天应用程序使用这一事实。 API 应设计为可由任何应用程序使用的通用 text2text API。
- AI API 应该是无状态的，这意味着它们不会主动访问上下文。 如果它们需要上下文，例如配置或前面步骤的输出，则应在调用时传入。

### 访问控制

我们需要控制对 API 的访问。 这意味着我们需要知道谁在使用 API 以及 API 的配额是多少。

每个应用程序都依赖一组 API，每个 API 都有自己的访问控制。 因此，我们可以把每个应用看成一组API，一次性开启API。 用户不理解这种依赖关系。 他们只是想启用一个应用程序，应用程序依赖的所有 API 都应该自动启用。

我们需要确定使用以下两种方式中的哪一种：

- 两个角色：用户和 API。 从 App A 访问 API1 意味着用户被自动授予从 App B 访问此 API 的权限。

  场景：我需要访问 API1。 您不需要知道我如何使用此 API。

- 三个角色：用户、应用程序和 API。 从 App A 访问 API 并不意味着用户被自动授予从 App B 访问此 API 的权限。

  场景：我需要访问 API1。 我需要告诉你，我将使用应用程序 A 中的 API1。我了解我需要单独申请应用程序 B 中的 API1 访问权限。

区分 API 的调用者有一些主要好处： 数据分析和计费。 但这与访问控制无关。

## API 设计

我们可以将API分为两类：框架API和AI API。

### 框架 API

我们可以看到，框架API的使用场景有两种：平台管理和用户自主管理。 平台操作通常会影响到所有用户，因此需要更高的权限（我们通常称之为admin），而用户自我管理应该保持在自己的权限范围内，就像沙箱一样。

### 人工智能 API

AI API 并不总是在原子级别提供。 在大多数情况下，它们以管道的形式提供，管道是多个原子 AI API 的组合。 例如，text2text API 是由 text2intent 和 intent2text API 组成的管道。

但是，我们不希望用户知道管道。 相反，我们的目标是为管道提供一个统一的 API，即 text2text。

另一个考虑因素是我们可能有多个提供者用于某个功能，例如文本摘要。 例如，我们可以从 ChatGPT 和 Cloude 等提供商以及 LlaMA 等开源模型中获得此功能。 对于开源模型，也有不同的提供者，例如 [Replicate.com](http://replicate.com/) 和 [stablediffusionapi.com](http://stablediffusionapi.com/)，它们提供稳定的扩散 标准 API。 在将所有这些选项整合到我们的平台中时，我们必须根据 API 的名称和参数来决定调用哪些 API。 我们不应该简单地列出所有类似的 API 并让用户选择。 这确实是一项具有挑战性的任务。

这个原则适用于所有的 AI API 设计。

## API 实现

我们可以把API分为框架 API（又可以分为基础 API 和管理 API ）和 AI API。 为了方便起见，在本文档内我们不考虑 API 的前缀，例如 `/api/xxx`。 它将被列为 `/xxx`。

### 基本 API

这些 API 默认为所有用户启用，例如检索用户配置文件。 这些 API 可以安全地从客户端（例如浏览器）调用。

- `/user/profile` - 用户个人资料，例如姓名、电子邮件、头像等。
- `/user/settings` - 用户级设置，包括应用程序设置
- `/user/plans` - 订阅计划

我们现在使用 PocketBase 作为后端，但我们不想将 PocketBase API 暴露给客户端。 我们需要为客户端提供一个统一的API，即`/user/profile`。

### 管理 API

这些 API 默认为管理员用户启用。 从安全性考虑v，我们不应从客户端直接调用这些 API，例如创建新用户。

管理 API 的类型大体如下所示：

- `/admin/users` - 用户管理。 管理员不允许修改用户数据，但可以禁用用户帐户，甚至完全删除它。
- `/admin/pricing` - 这只是一个例子。

### AI API

与相对稳定的管理需求相反，AI 行业在不断发展。 正因为如此，我们很难预测未来需要的 AI 功能，例如视频创作，以及开发人员将如何使用它们。 因此，设计易于实现和维护的 API 体系非常重要。

几乎所有基于 AIGC 场景的的 API 都用于内容创建和操作。 这些 API 基本工作都是接收某些输入并将结果输出为另一种形态的文件。 需要考虑的重要因素是源数据类型、管道类型和目标数据类型。 一般范式是：`compute(source, target)`，例如：

- `imagine(text, prompt, output)` - 从一个纯粹的想法到结果，例如从文本到图像
- `inspire(question, context as prompt, answer)` - 这里我们可以考虑提示的上下文部分，常规的机器人聊天可以属于这种情况
- `extract(image, prompt, text)` - 此处提示词为空（在 Midjourney 中为 `/describe`）
- `transform(input, prompt, output)` - 根据提示词的需求，将输入数据转换为另一种数据格式

因此，我们可以统一 API 规则如下：

- API Endpoint：功能描述，例如用于 text2image 处理的 `/imagine`
- JSON 对象包含必需的参数：
     - 来源数据，例如 `source: { type: "image", data: { type: "image/png", src: "https://abc.com/a.png" }}`
     - 提示词，例如`prompts: { prompt: “positive prompt”, negative: “negative prompt” }}`
- 目标作为响应体，例如`target: { type "image", data: { type: "image/png", src: "https://abc.com/b.png" }}`

为了保持稳定的 API，我们应该让它们足够强大，即使它对用户来说可能不是最方便的形态。 然后，我们可以通过SDK提供便利，在稳定性和适应性之间取得平衡。

### 任务跟踪

之前的设计缺少一个关键的考虑因素：性能，因为 AI API 通常很耗时。 我们需要提供一种方法来跟踪处理的状态并尽早接收部分结果。 所以需要考虑两点：

1. 异步处理
1. 状态跟踪和部分结果检索

我们有两个可以深入研究的现成案例：OpenAI 和 Replicate。他们都提供了统一的任务跟踪相关能力。

* OpenAI：在核心 API `/v1/completions` 中 [使用参数 `stream`](https://platform.openai.com/docs/api-reference/completions/create) 以启用部分响应检索和 `[DONE ]` 在流中指示此对话的完整性；
* Replicate: 在核心 API `/v1/predictions` 中，使用多种方式向调用者更新进度，webhook 作为被动方案，而 `/v1/predictions/ <id>` 以获取状态和部分结果（例如，4 个预期生成的图像中的 2 个）作为主动方案。

基于以上的参考对象，我们可以合并为以下方案：

- `POST /api/ai/<feature>` - 用于发起一个 API 调用，例如 `/api/ai/imagine`
- 如果它是一个长时间运行的任务，调用也应及时返回，调用方需要判断是否返回的是最终结果还是部分结果加一个 `id`，并自行决定是否需要等待最终结果。
- 如果该 API 支持流式返回，那么它应该包含一个名为 `stream` 的布尔型参数以启用该能力，然后调用者可以启用 HTTP 流式传输并等待完成信号 `[DONE]` （或其他的停止信号）。
- 如果是长时间运行的非流式任务（例如图像生成），该 API 应支持以 `id` 作为 url 参数的 `GET` 方法（例如 `GET /api/ai/<feature>/{id}`）来检索 状态和部分结果，而不带参数的 `GET` 如 `GET /api/ai/<feature>` 则返回所有正在进行中的任务状态。

出于用户体验的考虑，前端应该显示进度条或其他东西来管理用户期望。 这不是 API 的必备功能，但也应尽可能在状态响应体中包含进度相关的信息。

### 特定于应用程序的数据？

是否可以让所有 API 都与应用程序无关？ 我们可以把这个场景作为一个研究对象。

- 应用特定设置？ 例如，用户选择图像输出的维度
- 应用默认设置？ 例如列表框的默认值，比如默认输出尺寸

这些声音都不是什么大不了的，完全可以归入上面提到的三个API的范围。 当我们开发一个新的应用程序时，我们应该认为自己是一个来自外部的开发者。 问我们自己两个问题：

- 这些现有的API 是否不符合我的要求，或者只是我不知道如何使用它们？ 例如，大多数API都是为数据操作而设计的，数据可以分为用户级别或平台级别。 使用 `/user/settings/app/<appid>/<key>`，你几乎可以覆盖所有你需要的东西。
- 如果我们确实需要创建特定于应用程序的 API，那是否与该平台相关？ 如果没有，请随意部署您喜欢的任何平台。 Railway和Vercel都是不错的选择。

## 结论

本文档涵盖了我们 API 的背景、基本原理和一般实现。 我们的目标是创建一个优雅的 API 系统，它保持干净并且不会增长太快。

我们会面临SDK实现的挑战，尤其是代码生成的场景。 这是人工智能可以提供极大帮助的领域。