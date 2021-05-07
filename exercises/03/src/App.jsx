const App = () => {
  const [count, setCount] = React.useState(0);
  // count will have the current count for each render, render's will occur when state or properties change
  // setCount gives us a way to modify the count value and cause a re-render
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount((c) => 0);


  return <div>
    <span>clicks = {count}</span>
    <div>
      <button onClick={increment}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>+</button>
    </div>
  </div>
};