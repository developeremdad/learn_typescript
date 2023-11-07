{
  //  Reference type --> Object type

  let student: {
    institute: "NU"; // Type --> literal types. it behave as a type. always fixed this type:
    readonly email: string; // Readonly this property. we can't change property value.
    name: string;
    roll: number;
    dept: string;
    phone: string;
    anotherPhone?: string; // Optional type. you can use this property or not.
  } = {
    institute: "NU", // Couldn't use NU BD.
    email: "developeremdad@gmail.com",
    name: "md emdadullah",
    roll: 68,
    dept: "cse",
    phone: "01625360571",
  };

  console.log(student.name);
  //   student.email = "devemdad@gmail.com"  // Can't change this property.
}
