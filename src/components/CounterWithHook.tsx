import { useCounter } from "../hooks/useCounter";

export const CounterWithHook = () => {
  const { count, increaseBy } = useCounter(10);
  return (
    <div>
      <h3>
        Counter: <small>{count}</small>
      </h3>
      <div>
        <button onClick={() => increaseBy(+1)}>+1</button>
        <button onClick={() => increaseBy(-1)}>-1</button>
      </div>
    </div>
  );
};

export default CounterWithHook;
