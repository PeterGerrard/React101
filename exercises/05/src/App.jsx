const App = () => {
  const [count, setCount] = React.useState(0);
  // count will have the current count for each render, render's will occur when state or properties change
  // setCount gives us a way to modify the count value and cause a re-render
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount((c) => 0);

  return (
    <div>
      <span>clicks = {count}</span>
      <div>
        <MyButton color="blue" onClick={decrement}>
          -
        </MyButton>
        <MyButton color="red" onClick={reset}>
          reset
        </MyButton>
        <MyButton color="blue" onClick={increment}>
          +
        </MyButton>
      </div>
    </div>
  );
};
