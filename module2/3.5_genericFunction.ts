{
  // Function with generics

  const createArray = (params: string): string[] => {
    return [params];
  };
  const createArrayResult = createArray("emdad");
  console.log({ createArrayResult });

  // Create array with generic
  const createArrayWithGeneric = <T>(params: T): T[] => {
    return [params];
  };
  const createArrayWithGenericResult = createArrayWithGeneric<number>(200);
  console.log({ createArrayWithGenericResult });

  type User = {
    id: number;
    name: string;
  };
  // create generic array of object
  const createObject = createArrayWithGeneric<User>({
    id: 22,
    name: "emdadullah",
  });

  console.log({ createObject });

  // Create function
  const createArrayWithTuple = <T, X>(param1: T, params2: X): [T, X] => {
    return [param1, params2];
  };

  // Call function
  const createArrayWithTupleResult = createArrayWithTuple<string, number>(
    "emdad",
    68
  );
  console.log({ createArrayWithTupleResult });

  // create function
  const addCourseToStudent = <T>(student: T): T => {
    const course = "Next level web development";
    return {
      ...student,
      course,
    };
  };

  const addCourseToStudentResult = addCourseToStudent({
    id: 1,
    name: "emdad",
    email: "emdad@gmail.com",
  });
  console.log({ addCourseToStudentResult });
}
