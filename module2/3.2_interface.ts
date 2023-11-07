{
  // Interface

  // By using type alias
  type User1 = {
    name: string;
    age: number;
  };

  const user1: User1 = {
    name: "emdadullah",
    age: 26,
  };

  //   add new property by using "intersection"
  type UserRoll = { roll: number };

  // create new user
  type NewUser = User1 & UserRoll;
  const newUser1: NewUser = {
    name: "emdadullah",
    age: 26,
    roll: 68,
  };

  console.log({ newUser1 });

  //   ========================================================================================
  //   By using "Interface"
  interface User2 {
    name: string;
    age: number;
  }

  const user2: User2 = {
    name: "emdadullah",
    age: 26,
  };
  console.log({ user2 });

  //   extend new user property in interface

  interface NewUser2 extends User2 {
    roll: number;
  }

  const newUser2: NewUser2 ={
    name: 'emdadullah',
    age: 26,
    roll: 68
  }
  console.log({newUser2});
   
}
