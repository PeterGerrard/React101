# 04 - Conditional Rendering and loops

## Task - Disable a button based on state

In `MyButton.jsx` we now have the option of diabling the button. We need to decide when to set it. In this case we want to prevent the minus button from being clicked if the value is zero.

We can do this by updating the usage to set the attribute base on an expression: `<MyButton ... disabled={<expression>}>`

We can now run the app again and see that you can't click the minus when the count is zero.

## Task - change the styling when disabled

It's not the most obvious that the button is disabled so lets configure the style based on the disabled flag:

```jsx
return <button style={{ backgroundColor: disabled ? "gray" : color }}>
```

and then lets change the cursor if we are disabled:

```css
cursor: "not-allowed";
```

## Task - Show a message when the count is zero

In `App.jsx` we would now like to display a different message if the count is zero.

```jsx
{
  count == 0 ? <span>No clicks</span> : <span>clicks = {count}</span>;
}
```

## Task - Display something multiple times

In `App.jsx` we can now calculate a set of values to be put in a location for rendering:

```jsx
const content = [];
for (let index = 0; index < count; index++) {
  content.push(<li key={index}>{index}</li>);
}
```

and then we can display this using `<ul>{content}</ul>`
