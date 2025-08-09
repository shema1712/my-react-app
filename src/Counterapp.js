import { useState } from "react";
function CounterApp() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>count:{count}</p>
      <button onClick={setCount(count + 1)}>Increment </button>
      <button onClick={handleDecrement}>Decrement </button>
      <button onClick={handleReset}>Reset </button>
    </div>
  );
}
export default CounterApp;
//we can write the different types of code .
//The first one i handle increament directly in button
//The second one i handle the decreamentcode using function
