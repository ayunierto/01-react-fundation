export const BasicFunctions = () => {
  const addTwoNumber = (a: number, b: number): number => {
    return a + b;
  };
  return (
    <div>
      <h3>Basic Functions</h3>
      <span>Result of adding: {addTwoNumber(1, 4)}</span>
    </div>
  );
};

export default BasicFunctions;
