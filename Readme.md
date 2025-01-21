# react-jsx-control

`react-jsx-control` is a utility library designed to simplify conditional rendering and looping in React applications. It provides a set of reusable components to make JSX cleaner and more readable.

---

## **Installation**

```bash
npm install react-jsx-control
yarn add react-jsx-control
pnpm add react-jsx-control
```

## Usage

**1. Ternary**

The Ternary component renders one of two ReactNodes (truthy or falsy) based on a condition.

```tsx
import { Ternary } from 'react-jsx-control';

<Ternary
  when={true}
  truthy={<span>Truthy</span>}
  falsy={<span>Falsy</span>}
/>
```

**2. SwitchCase**

The SwitchCase component renders a specific child based on a match value.
```tsx
import { SwitchCase } from 'react-jsx-control';

<SwitchCase
  match="a"
  caseBy={{
    a: <div>Case A</div>,
    b: <div>Case B</div>,
  }}
  fallback={<div>Default case</div>}
/>
```

**3. Switch**

The Switch component renders the first child whose when prop evaluates to true.
```tsx
import { Switch, Match } from 'react-jsx-control';

<Switch>
  <Match when={false}>
    <div>Not rendered</div>
  </Match>
  <Match when={true}>
    <div>Rendered</div>
  </Match>
</Switch>
```

**4. Show**

The Show component renders its children when the condition is true. Otherwise, it renders the fallback content.

```tsx
import { Show } from 'react-jsx-control';

<Show when={true} fallback={<div>Fallback</div>}>
  <div>Content to show</div>
</Show>;
```

**5. For**

The For component loops through an array and renders ReactNodes for each item.

```tsx
import { For } from 'react-jsx-control';

const items = [
  { name: 'Item 1', value: 10 },
  { name: 'Item 2', value: 20 },
];

<For
  each={items}
  fallback={<div>No items available</div>}
>
  {({ name, value }, index) => (
    <div>
      <h1>{index + 1}. {name}</h1>
      <h2>{value}</h2>
    </div>
  )}
</For>;
```

### **Key Features**
- **Ternary**: Renders one of two ReactNodes based on a condition.
- **SwitchCase**: Renders based on a specific value.
- **Switch**: Renders the first matching child based on the `when` condition.
- **Show**: Renders content or fallback based on a condition.
- **For**: Loops through an array and renders elements.


### **Benefits**
- Improved readability of JSX code.
- Simplifies complex conditional rendering.
- Enhances React’s default conditional and iterative rendering patterns.

### Contributing

Contributions and bug reports are always welcome!
Feel free to visit the GitHub repository to get involved.

### License
**MIT License.**

This is a fully markdown-ready file for your README. You can copy-paste this into your `README.md` without any modifications. 🚀