"use strict";
{
    // Spread and rest operator.
    const names = ["emdad", "saimoon", "kashem"];
    const otherNames = ["developer", "korim", " rahim"];
    //   names.push(otherNames); // wrong
    names.push(...otherNames);
    //   spread with object
    const std1 = {
        name: "emdad",
        roll: 68,
        reg: 1750200,
    };
    const std2 = {
        name: "emdad1",
        roll: 69,
        reg: 1750201,
    };
    const std3 = {
        name: "emdad2",
        roll: 70,
        reg: 1750200,
    };
    const students = Object.assign(Object.assign(Object.assign({}, std1), std2), std3);
    console.log(students);
    //   Rest operator
    const myFriends = (...friends) => {
        friends.forEach((friend) => console.log(friend));
    };
    myFriends("emdad", "kashem", "rahim", "ubul");
}
