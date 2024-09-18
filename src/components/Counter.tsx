import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const increaseBy = (value: number) => {
    setCount(count + value);
  };
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

export default Counter;
