
# State

[back](../../README.md)

## 📘 State vs Props in React

In React, **state** and **props** are two core concepts used to manage and pass data in components, but they serve different purposes.

---

### 🔹 Props (Short for "Properties")

- **Used to pass data from parent to child** components.
- **Read-only**: A component cannot modify its own props.
- Makes components **reusable** and **dynamic** by allowing external configuration.

#### Example:
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Greeting name="Alice" />
```

➡️ `Greeting` receives the `name` prop from its parent.

---

### 🔹 State

- **Managed within the component** (though can be lifted up).
- **Mutable**: A component can update its own state using `useState` (in functional components) or `this.setState` (in class components).
- Used for **dynamic data** that can change over time (e.g., user input, toggles, API responses).

#### Example:
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}
```

➡️ `Counter` manages its own internal state (`count`) and updates it on button clicks.

---

### 🔑 Key Differences

| Feature       | Props                         | State                      |
|---------------|-------------------------------|----------------------------|
| **Origin**    | Passed from parent component  | Defined within component   |
| **Mutability**| Immutable (read-only)         | Mutable via `useState`     |
| **Purpose**   | Configure component           | Manage internal data       |
| **Updateable by** | Parent only               | The component itself       |

---

## 