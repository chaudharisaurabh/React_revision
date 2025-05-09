# Event handling

[back](../../README.md)


### 🔹 Event Handling in React

Event handling in React is similar to handling events in plain JavaScript, but with some syntactical differences. React uses camelCase for event names and passes a function as the event handler.

- Events are written as attributes in JSX.
- React provides a synthetic event system that wraps native events for cross-browser compatibility.
- Event handlers are typically defined as functions or arrow functions.

#### Example:

```jsx
function ButtonClick() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

➡️ In this example, the `onClick` attribute is used to handle the button click event.

#### Binding in Class Components:

In class components, event handlers often need to be explicitly bound to the component instance.

```jsx
class ClickHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello" };
    this.handleClick = this.handleClick.bind(this); //using bind
  }

  handleClick() {
    this.setState({ message: "Button clicked!" });
  }

  render() {
    return (
      <>
        <p>{this.state.message}</p>
        <button onClick={this.handleClick}>Click Me</button>
      </>
    );
  }
}
```

➡️ Binding ensures the correct `this` context is used in the event handler.

---



