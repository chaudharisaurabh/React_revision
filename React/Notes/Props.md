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
<Welcome name="Alice" />;
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
<Button label="Click Me" onClick={() => alert("Clicked!")} />
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
function Welcome({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}
```

Or for older versions of React:

```jsx
Welcome.defaultProps = {
  name: "Guest",
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
import React from "react";

// A simple component that accepts children
const Container = ({ children }) => {
  return <div className="container">{children}</div>;
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
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Welcome;
```

# React Methods as Props

Passing methods as props in React is a common pattern that enables child components to trigger actions in their parent components. This approach helps maintain a unidirectional data flow, where the state is managed centrally and only passed down as needed.

## Why Use Methods as Props?

- **State Management**: Centralize state logic in parent components.
- **Event Handling**: Allow child components to trigger parent updates.
- **Decoupling Logic**: Keep child components simple and focused.

## Basic Example (Counter App)

**Parent (App.js)**

```jsx
import React, { useState } from "react";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  return (
    <div>
      <h1>Parent Count: {count}</h1>
      <Counter onIncrement={incrementCount} />
    </div>
  );
}

export default App;
```

**Child (Counter.js)**

```jsx
import React from "react";

function Counter({ onIncrement }) {
  return <button onClick={onIncrement}>Increment</button>;
}

export default Counter;
```

## Advanced Example (Task Manager)

**Parent (TaskList.js)**

```jsx
import React, { useState } from "react";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Learn React", completed: false },
    { id: 2, name: "Build a project", completed: false },
  ]);

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => toggleTaskCompletion(task.id)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
```

**Child (TaskItem.js)**

```jsx
import React from "react";

function TaskItem({ task, onToggle }) {
  return (
    <li
      style={{
        textDecoration: task.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
      onClick={onToggle}
    >
      {task.name}
    </li>
  );
}

export default TaskItem;
```

## Key Takeaways

- **Centralized State**: State is managed in the parent, with methods controlling updates.
- **Unidirectional Flow**: Data flows down, actions flow up.
- **Reusability**: Easily reuse logic across multiple components.
