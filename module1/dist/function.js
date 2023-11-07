"use strict";
{
    // Learn function
    // Normal function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 3);
    // Arrow function
    const square = (num) => num * num;
    square(3);
    // Method
    const user = {
        name: "emdad",
        balance: 0,
        addBalance(balance) {
            return this.balance + balance;
        },
    };
    // Array
    const arr = [1, 2, 3, 4, 5];
    const newArray = arr.map((elem) => elem * elem); // make square every element.
}
