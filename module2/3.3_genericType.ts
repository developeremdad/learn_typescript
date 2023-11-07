{
  // Generic type
  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [3, 5, 7, 8];
  const rollNumbers: GenericArray<number> = [3, 5, 7, 8];

  // const students: string[] = ["emdad", "kashem", "hashem"];
  const students: GenericArray<string> = ["emdad", "kashem", "hashem"];

  //   const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  interface User {
    name: string;
    age: number;
  }

  // generic for array of object
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "emdadullah",
      age: 26,
    },
    {
      name: "developer",
      age: 27,
    },
  ];
}
