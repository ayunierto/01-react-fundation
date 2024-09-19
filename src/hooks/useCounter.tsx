import { useState } from "react";

export const useCounter = (value: number = 0) => {
  const [count, setCount] = useState<number>(value);
  const increaseBy = (value: number) => {
    setCount(count + value);
  };
  return {
    // Properties
    count,
    // Methods
    increaseBy,
  };
};
