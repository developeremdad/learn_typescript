{
  // Learn basic typeScript datatype.

  // jodi datar type bole dewa na thake tahole seta "implicit datatype".
  //   typescript smart compiler eitake easily bujhe ney ki type data hobe.
  // like
  const name = "emdadullah";
  const roll = 68;

  //   "Explicit datatype" if define data type in declaration
  // like
  const name1: string = "emdadullah1";
  const roll1: number = 68;

  // Boolean
  let isAdmin: boolean = true;
  isAdmin = false;

  //   String
  let myName: string = "emdadullah";
  myName = "Md Emdadullah";

  //   Number
  let myRoll: number = 60;
  myRoll = 68;

  // Any
  let unUseable: any = undefined;
  unUseable = "another text";

  // Null and Undefine
  let u: null = null;
  let n: undefined = undefined;

  // tuple  --> array --> order --> type of value
  // [number, number, string] eitai hocche tuple. array kon position ki value bosbe seta define kora thakbe.
  let student: [number, number, string] = [10, 20, "emdad"];
}
