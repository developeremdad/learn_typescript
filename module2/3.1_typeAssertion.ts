{
  // Type assertion
  let anything: any;
  anything = "Emdadullah";
  anything as string; // Now anything work as a string type

  const kgToGm = (value: string | number): string | number => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted result is ${convertedValue}`;
    } else {
      return value * 1000;
    }
  };

  // kgToGm return string or number but i know kgToGm return number thats type assertion.
  const result = kgToGm(5) as number;
  console.log(result); // output: 5000

  // kgToGm return string or number but i know kgToGm return string thats type assertion.
  const result1 = kgToGm("10") as string;
  console.log(result1); // output: The converted result is 10000

  // example for try catch
  type CustomError = {
    message: string;
  };

  try {
    // something
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
