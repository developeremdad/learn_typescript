{
  // ternary operator || optional chaining || nullish coalescing operator

  // ternary
  const name = "emdad";
  const newName = name ? name : "emdadullah";
  console.log(newName);

  //   optional chaining

  // nullish
  // it's worked only null and undefine value.
  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "guest";
  console.log(result1);
}
