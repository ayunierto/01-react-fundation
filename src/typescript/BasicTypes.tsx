export const BasicTypes = () => {
  const name: string = "Jhon";
  const age: number = 33;
  const isActive: boolean = false;
  const powers: string[] = ["React", "Angular", "Vue"];
  return (
    <>
      <h3>Basic Types</h3>
      {name} {age} {isActive ? "true" : "false"}
      <br />
      {powers.join(", ")}
    </>
  );
};

export default BasicTypes;
