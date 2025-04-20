# Overview

[back](../../README.md)

```
npx create-react-app my-app
cd my-app
npm start
```


## Folder structure

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```


## Components

Components describe a part of the UI.\
They are reusable and can be nested inside other component.\
Excepts props as input param and return jsx.

1. Stateless functional component
2. Stateful class component


#### Stateless functional component

These are javascript functions

example

```js

function welcome(props){
  return <h1>Hello, {props.name} </h1>;
}

```

#### Stateful class component

These are the ES6 classes extending component class in react library

```js

class Welcome extends React.Component{

  render(){
    return <h1>Hello, {props.name} </h1>;
  }
}

```

#### Functional vs Class components

Functional

1. Functional components are simple functions receiving props and return jsx.
2. We should try using functional components as much as possible.
3. Component can be created in both the approached then go with functional component approach.
4. Functional components have absence of this keyword.
5. Can write solution without a State
6. Mainly responsible for UI


Class 

1. More feature rich
2. Can maintain there own private data called as state.
3. Complex UI logic
4. Provide lifecycle hooks



## JSX

JSX (JavaScript XML) is a syntax extension for JavaScript used with React to describe what the UI should look like. It looks similar to HTML but is actually syntactic sugar for React.createElement() calls.

```jsx
const element = <h1>Hello, world!</h1>;

```

#### Why Use JSX?

1. Declarative UI: It allows you to write UI code that looks like HTML inside your JavaScript, making it easier to visualize the component structure.

2. Power of JavaScript: You can embed JS expressions directly inside JSX using {}.

3. Component-based: You can create and use custom React components as if they were HTML elements.













