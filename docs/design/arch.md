# System Architecture

This document has other languges: [中文版](./arch-zh.md).

App level design documents include [Architecture Design of Penless Flow](./apps/flow-arch.md). More will be added later.

## Overview

We are facing a new era of AI, and we need to build a new system to support the development of AI products. As we all know, good AI products are not only about the AI algorithms, but also about the user experience, the user interface, the user interaction, etc. Therefore, we need to build a system that can support the development of AI products, and also provide a good user experience.

To make an adaptive framework for all the products, we are unifying the layout of products as following:

1. Admin

    Admin layout is for the pages that are for administration, such as the dashboard page, the user management page, etc. It is usually a full-screen page with a sidebar and a topbar.

    Admin layout can be simply unified as nomrally all the administration features can be organized in a simplicific manner, as normal users usually only concern about how to find a feature and how to use it, but not much about how it looks like.

    Therefore, we can simply use a sidebar to organize all the features, and a topbar to show the current user and some other information.

    TODO: add a picture here

    The developer to add a new admin page or feature, he/she only needs to focus on the page itself, no need to worry about the sidebar and navbar etc, which will be automatically generated and updated.

2. Product

    Product layout is for the pages that are for the product itself, such as the chatbot page, the dashboard page, etc. It is usually a full-screen page with custom sidebar.

    The purpose of sidebar in different products varies, so we need to make it customizable.

3. Misc

    Misc layout is for the pages that are with misc layouts, such as login page, register page, etc. It is usually a full-screen page with no sidebar.

The conceptual structure are following:

* Common framework, such as common shared components, admin pages, styles, features etc
* Product, other than the common framework, each product could have its own layouts, pages, styles, features etc
* Product overall layout (E.g., we can consider admin a seperate product, which has its own layout, pages, styles, features etc)
* Product specific components, for some reason we should not consider them shared across all products, such as a conversation list component, which is only used in chatbot
* Product pages (E.g., we can consider dashboard a seperate page, which has its own layout, styles, features etc)

TODO: insert a picture here

## Basic Principles

Here are some basic principles that we need to follow. This is to make sure all the participants can work together smoothly.

### Reusability

We need to make the system reusable, so that it can be used in different products, such as chatbot, dashboard, etc. And it will be easy to be converted to a mobile app later.

### AI-oriented Multi-layer Customization

Thanks to the great contribution on the Big Models, we can now build a system that can support the development of AI products. We need to make the system AI-oriented, so that it can be used in different AI products, such as chatbot, image generator, etc.

We employed a bottom-up approach to make this system AI-oriented. We first build a basic system that can support the development of general web apps, and then we build a layer on top of it to make it AI-oriented. On top of that, you can extend to make it scenario-oriented, such as tools specific for manufacturing, design, development, writing etc.

### Responsive Design

We need to make the system responsive, so that it can be used on different devices, such as mobile phones, tablets, laptops, desktops, etc. And it will be easy to be converted to a mobile app later.

We are using [TailwindCSS](https://tailwindcss.com/) as the main CSS framework, and [DaisyUI](https://daisyui.com/) as the UI components library.

## Project Structure

The project structure is as following:

```
.
├── README.md
├── docs
│   ├── arch.md
│   └── index.md
├── package.json
├── pnpm-lock.yaml
├── public
│   ├── favicon.ico
│   └── vercel.svg
├── src
│   ├── app
│   │   ├── admin
│   │   │   ├── dashboard
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.module.css
│   │   │   └── index.tsx
│   │   ├── basic
│   │   │   ├── login
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.module.css
│   │   │   └── register
│   │   │       ├── index.tsx
│   │   │       └── styles.module.css
│   │   └── index.tsx
│   ├── components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Checkbox.tsx
│   │   ├── Dropdown.tsx
│   │   ├── Input.tsx
│   │   ├── Layout.tsx
│   │   ├── Modal.tsx
│   │   ├── Navbar.tsx
│   │   ├── Radio.tsx
│   │   ├── Select.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Switch.tsx
│   │   ├── Table.tsx
│   │   ├── Tabs.tsx
│   │   ├── Textarea.tsx
│   │   ├── Toast.tsx
│   │   ├── Tooltip.tsx
│   │   └── index.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── admin
│   │   │   ├── dashboard
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.module.css
│   │   │   └── index.tsx
│   │   ├── basic
│   │   │   ├── login
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.module.css
│   │   │   └── register
│   │   │       ├── index.tsx
│   │   │       └── styles.module.css
│   │   └── index.tsx
│   ├── react-app-env.d.ts
│   ├── setupTests.ts
│   └── styles
│       ├── global.css
│       └── index.css
├── tailwind.config.js
└── tsconfig.json
```

## Development

As you can see from the project structure, we are not inteded to make this project a framework, but more a boilerplate for you to create great products.

Other than the overall structure, all the styles and source code are customizable, so that you can easily change the styles and add your own features.

### Add a new page

To add a new page, you can simply create a new folder under `src/pages`, and add a `index.tsx` file in it. Then you can add your own styles in `styles.module.css` file.

### Add a new component

To add a new component, you can simply create a new file under `src/components`, and add your own styles in `styles.module.css` file.

### Add a new layout

To add a new layout, you can simply create a new folder under `src/app`, and add a `index.tsx` file in it. Then you can add your own styles in `styles.module.css` file.

### Add a new feature

To add a new feature, you can simply create a new folder under `src/app`, and add a `index.tsx` file in it. Then you can add your own styles in `styles.module.css` file.

### Add a new style

To add a new style, you can simply create a new file under `src/styles`, and add your own styles in it.

## Deployment

We are using [Vercel](https://vercel.com/) to deploy the project, and you can deploy it to your own Vercel account by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=tiwater/aitool-template)

## License

MIT

## Credits

- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Vercel](https://vercel.com/)

## Contributors
