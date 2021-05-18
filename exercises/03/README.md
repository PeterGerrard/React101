# 03 - Styling and Props

## Adding Style to buttons

It's all a bit grey at the moment, lets add a splash of colour.

### Task - Styleise the buttons

In [App.jsx](./src/App.jsx) we want to add some inline styles to make it a bit more interesting

```jsx
<button onClick={increment} style={{backgroundColor: "blue", padding: "2rem"}}>-</button>
<button onClick={increment} style={{backgroundColor: "blue", padding: "2rem"}}>reset</button>
<button onClick={decrement} style={{backgroundColor: "blue", padding: "2rem"}}>+</button>
```

We now have a slightly prettier set of buttons.

In your terminal run: `npm start` in the `exercises/03` folder.
Open [http://localhost:1234](http://localhost:1234) in your browser

### Task - Extract a shared Button component

We're now repeating the stling on button so it would be useful to encapsulate that in a component to reduce repitition.

To do that we need to do the same thing as when we created the `<App>` in earlier exercises. We can then access the children using the special react property `children`, and we can pass other things in via other properties:

```jsx
<MyButton onClick={increment}>-</MyButton>
```

```jsx
// Use js destructuring rather than using props.onClick
const MyButton = ({ onClick, children }) => {
  {
    /** return a standard button **/
  }
};
```

### Task - Adding a variant

Now I'd like to make the reset button a different colour. Update the `MyButton` component to handle passing in:

```jsx
<MyButton color="red" onClick={increment}>
  reset
</MyButton>
```
