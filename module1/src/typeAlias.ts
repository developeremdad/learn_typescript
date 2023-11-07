{
  // Learn type alias.
  // jodi kono type multiple jaygay use hoy tahole setake type alias kore common baniye rakha jay.

  //   create type alias and make type name capitalize
  //   type alias for object
  type Student = {
    name: string;
    roll: number;
    phone?: string;
  };

  const std: Student = {
    name: "emdad",
    roll: 68,
    phone: "01625360571",
  };
  const std1: Student = {
    name: "emdad1",
    roll: 69,
    phone: "01625360571",
  };
  const std2: Student = {
    name: "emdad2",
    roll: 70,
  };

  // type alias for string
  type UserName = string;
  const userName: UserName = "emdadullah";

  // type alias for boolean
  type IsAdmin = boolean;
  const isAdmin: IsAdmin = true;

  // type alias for function
  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
