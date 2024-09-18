interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  isAlive?: boolean;
}

interface Address {
  country: string;
}

export const ObjectLiteral = () => {
  const person: Person = {
    firstName: "Jhon",
    lastName: "Doe",
    age: 33,
    address: {
      country: "New York",
    },
    isAlive: true,
  };
  return (
    <div>
      <h3>Object Literal</h3>
      <pre>{JSON.stringify(person, null, 4)}</pre>
    </div>
  );
};

export default ObjectLiteral;
