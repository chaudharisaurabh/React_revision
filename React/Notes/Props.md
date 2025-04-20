
# 🧠 Understanding Props in React
[back](../../README.md)

In React, **props** (short for _"properties"_) are a way of passing data from a **parent component** to a **child component**. They make components **reusable** and **dynamic** by allowing different inputs.

---

## 🔧 How Props Work

Think of props like **function arguments**, but for React components.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage:
<Welcome name="Alice" />
```

In this example:
- `Welcome` is a functional component.
- It receives a prop called `name`.
- When we render `<Welcome name="Alice" />`, it displays: **Hello, Alice!**

---

## 💡 Key Points About Props

- **Read-only**: Props cannot be changed inside the child component.
- **Passed from parent**: Only the parent can control what props the child receives.
- **Flexible**: Props can be any type—strings, numbers, objects, functions, JSX, etc.

```jsx
function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
```

You can pass a function as a prop:

```jsx
<Button label="Click Me" onClick={() => alert('Clicked!')} />
```

---

## 🧩 Props in Practice

### Destructuring Props

```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

### Default Props

Using ES6 default parameters:

```jsx
function Welcome({ name = 'Guest' }) {
  return <h1>Hello, {name}!</h1>;
}
```

Or for older versions of React:

```jsx
Welcome.defaultProps = {
  name: 'Guest',
};
```

---

## 🛠 Common Use Cases

- Customizing UI: Buttons with different labels or styles.
- Data flow: Passing lists, IDs, or states down to child components.
- Callback functions: Triggering actions in the parent component.

---


# Children Prop in React

In React, `children` is a special prop that allows components to pass content (such as text, elements, or other components) to other components. This is a powerful feature because it enables components to be more flexible and reusable.

## What is `children`?

- `children` is a prop that holds any content placed between the opening and closing tags of a component.
- It's automatically passed to the component without needing to define it explicitly, making it a great way to pass content into components from their parent components.

## Example of `children`:

```jsx
import React from 'react';

// A simple component that accepts children
const Container = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

// A parent component using the Container
const App = () => {
  return (
    <Container>
      <h1>Hello, World!</h1>
      <p>This is a paragraph inside the container.</p>
    </Container>
  );
};

export default App;

```

### Using class components

```jsx
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Welcome;

```
