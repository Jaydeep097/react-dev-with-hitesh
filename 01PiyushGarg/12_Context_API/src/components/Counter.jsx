import { useContext } from "react";
import { CounterContext } from "../context/Counter";

const Counter = () => {
  const CounterContext = useContext(CounterContext);
  return (
    <div>
      <button onclick={() => CounterContext.setCount(CounterContext.count + 1)}>
        Increment
      </button>
      <button>Decrement</button>
    </div>
  );
};

export default Counter;
