# 📘 JSX in React – Complete Guide

[back](../../README.md)

## 🔷 What is JSX?

**JSX (JavaScript XML)** is a syntax extension for JavaScript used in **React** to describe the UI. It allows you to write HTML-like code directly within JavaScript, which is then transformed into React function calls by a compiler like **Babel**.

For example:
```jsx
const element = <h1>Hello, world!</h1>;
```

Is compiled to:
```js
const element = React.createElement('h1', null, 'Hello, world!');
```

---

## 🧠 Why Use JSX?

JSX makes it easier to:
- **Visualize the UI** with a structure similar to HTML.
- **Embed JavaScript logic** using `{}` syntax.
- **Create reusable components** that are easier to manage.
- **Get better tooling** support with syntax highlighting and autocomplete.

Even though it's not required, JSX is widely adopted in React because of its expressiveness and simplicity.

---

## 🔑 JSX Key Concepts

### 1. One Parent Element

JSX must return **a single parent element**. If you have multiple elements, wrap them in a `<div>` or a fragment (`<>...</>`).

✅ Correct:
```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

✅ Also correct:
```jsx
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);
```

---

### 2. Embedding JavaScript with `{}`

You can insert variables, expressions, or function calls using curly braces.

```jsx
const name = "React";
return <h1>Hello, {name}!</h1>;
```

---

### 3. JSX Attributes

JSX attributes are similar to HTML, but with slight differences:
- Use `className` instead of `class`
- Use **camelCase** for DOM properties and event handlers

```jsx
<button className="btn" onClick={handleClick}>
  Click Me
</button>
```

---

### 4. Self-Closing Tags

Unlike HTML, **all tags must be properly closed**.

```jsx
<img src="logo.png" alt="Logo" />
<input type="text" />
<br />
```

---

### 5. Conditional Rendering

Use JavaScript operators like the ternary (`? :`) or logical `&&` for rendering content conditionally.

```jsx
{isLoggedIn ? <p>Welcome back!</p> : <p>Please sign in.</p>}

{showMessage && <p>This is a conditional message.</p>}
```

---

### 6. Inline Styling

JSX uses JavaScript objects for inline styles, with **camelCase** keys.

```jsx
const style = {
  color: 'blue',
  fontSize: '20px'
};

return <p style={style}>Styled text</p>;
```

---

## ⚙️ How JSX Works Behind the Scenes

JSX is **not HTML**, but syntactic sugar for `React.createElement()` calls. Tools like **Babel** transpile JSX into JavaScript that React can interpret.

Example:
```jsx
const element = <h1>Hello</h1>;
```
Becomes:
```js
const element = React.createElement("h1", null, "Hello");
```

---

## 🚫 Common Mistakes

| Mistake                | Correct Way                        |
|------------------------|------------------------------------|
| Using `class`          | Use `className`                    |
| Multiple root elements | Wrap with a parent or fragment     |
| Unclosed tags          | Use self-closing tags              |
| `if` inside JSX        | Use ternary or move logic outside  |

---

## ✅ Best Practices

- Keep JSX readable with indentation and formatting.
- Extract complex JSX into smaller components.
- Use fragments (`<> </>`) to avoid unnecessary wrappers.
- Prefer readable logic with clear ternary or conditional checks.
- Avoid inline styles for large projects; use CSS Modules or styled-components.

---

## 🏁 Summary

- JSX is a powerful way to define UI in React using a familiar HTML-like syntax.
- It supports full JavaScript expressions within `{}`.
- JSX is compiled into JavaScript by Babel before running in the browser.
- Learning JSX well helps build clean, dynamic, and component-driven UIs.

> "JSX bridges the gap between logic and presentation in React — clean, expressive, and powerful." 💡

---

Happy Coding! 🚀