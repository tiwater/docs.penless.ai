# Flow Architecture

Welcome to the world of Penless Flow, a visual programming tool that simplifies the process of creating a flow by using drag-and-drop nodes and connecting them with edges. In this article, we will give you an overview of the architecture design that was used to build this incredible project.

## Overview

The flow engine of the Penless Flow runs on the server-side and synchronizes with the client through RESTful API or WebSocket. The core tool is built using react-flow, a React library that makes designing node-based editors and diagrams a breeze. With its ability to handle different types of data (text, JSON objects, binary files, etc.), we can guarantee that Penless Flow is indeed a versatile tool.

## Data Structure

### What is flowing in the flow?

To achieve the generic-ness of the flow engine, the data structure utilized in Penless Flow is of utmost importance. We settled for a file as the basic data structure flowing in the flow since we are geared towards Artificial Intelligence Generative Content (AIGC) oriented scenarios. To represent binary files, short or long texts, or JSON objects, we chose to use JSON as our top-level data format. Here is an example of our basic data structure:

```json
{
  "type": "text",
  "name": "test.txt",
  "description": "This is a test file",
  "format": "utf-8",
  "data": "This is a test file"
}
```

Each port should hold the corresponding data schema. For instance, a text classifier node should only take and output text. The schema will follow a similar format to the example below:

```json
{
  "type": "text",
  "conditions": {
    "minLength": "30",
    "maxLength": "4096",
  }
}
```

or for images:

```json
{
  "type": "image",
  "format": "png|jpg|webp",
  "conditions": {
    "dataFormat": "base64",
  }
}
```
### Logic control

Penless Flow supports basic logic controls like if-else, switch-case, and for-loop. We use JSON schema to represent the logic control. The example below is our JSON schema for the if-else control.
```json
{
  "type": "if",
  "condition": "data.length > 100",
  "true": {
    "type": "node",
    "id": "node-1"
  },
  "false": {
    "type": "node",
    "id": "node-2"
  }
}
```

Our challenge now is to decide if we need to provide built-in logic controls or implement the logics in the task nodes. We settled for the former as it's more flexible and convenient. We aim to provide essential prompts to make the results more interpretable and trigger different output ports. Looping in the logic flow can be complicated as it can become challenging to design and implement. That's why we will use the DAG method, but, in case users need a loop method, we will provide a middleware to store the result and undergo flow evaluation repeatedly with the result of the previous run as input.

![waveline-logic-control](https://waveline.ai/_next/static/media/workflow-example.58a6808d.svg)


### Node

Each node in Penless Flow has unique attributes, including their ID, name, and type. The type can be one of the following: Start, End, Action, Condition, or Subflow. For this article’s purpose, we will focus solely on the Action node. It utilizes templates to render the node, input/output ports (optional), and property fields (a list of key-value pairs). To improve the user experience, the node status, its progress, and preview of results are also displayed.

## Edge

Lastly, Penless Flow defines edges as the connection of two nodes. It has its unique ID, source node ID, source handle ID, target node ID, connection type (line, bezier, step), and whether it is animated (default: false). This definition is relatively similar to that of react-flow, which is beneficial for those already familiar with the flowchart-creating tool.

And that's it! The architecture design of Penless Flow is stable and ready for use. With its support for different data types and basic logic control, the Penless Flow is a versatile tool that will make your life easier in the long run.