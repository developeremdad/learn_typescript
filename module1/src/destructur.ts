{
  // destructuring
  const user = {
    id: 12,
    name: {
      firstName: "md",
      middleName: "emdad",
      lastName: "ullah",
    },
    phone: "01625360571",
  };

  const {
    phone,
    name: { middleName: midName },
  } = user;

  //   array destructuring
  const myFriends: string[] = ["emdad", "kashem", "karim", "rahim"];
  const [,,myBestu, ...rest] = myFriends;
}
