{
  // Learn function

  // Normal function
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  add(2, 3);

  // Arrow function
  const square = (num: number): number => num * num;

  square(3);

  // Method
  const user = {
    name: "emdad",
    balance: 0,
    addBalance(balance: number): number {
      return this.balance + balance;
    },
  };

  // Array
  const arr: number[] = [1, 2, 3, 4, 5];
  const newArray: number[] = arr.map((elem: number) => elem * elem); // make square every element.
}
