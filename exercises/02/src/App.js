const App = () => {
  const [count, setCount] = React.useState(0);
  // count will have the current count for each render, render's will occur when state or properties change
  // setCount gives us a way to modify the count value and cause a re-render
  const increment = () => setCount((c) => c + 1);

  return React.createElement(
    "button",
    { onClick: increment },
    "Interactive, clicks = " + count
  );
};
