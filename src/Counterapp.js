import { useState } from "react";
function CounterApp() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter App </h1>
      <p>count:{count}</p>
      <button onClick={handleIncrement}>Increment </button>
      <button onClick={handleDecrement}>Decrement </button>
      <button onClick={handleReset}>Reset </button>
    </div>
  );
}
export default CounterApp;
