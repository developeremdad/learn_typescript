{
  // Learn union and intersection

  // union operator for type alias
  type Frontend = "junior" | "beginner";
  type Backend = "senior" | "expert";

  type Developer = Frontend | Backend;

  // U  for object
  type User = {
    name: string;
    roll: number;
    contact: string;
    blood: "O+" | "O-" | "B+";
  };

  const user: User = {
    name: "emdadullah",
    roll: 68,
    contact: "01625360571",
    blood: "O+",
  };

  //   intersection
  type FullStack = FrontendDeveloper & BackendDeveloper;

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  const fullStack: FullStack = {
    skills: ["html", "css"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  console.log(fullStack);
  
}
