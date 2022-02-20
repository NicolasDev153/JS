const firstName = prompt("What is your name? ");
let friends = prompt("How many friends do you have? ");
let bestFriend = prompt("What is your best friend's name?");

let result = {
};

result.name = firstName;
result.Friends = friends;
result.bestFriend = bestFriend;

console.log(`${result.name} has ${result.Friends} friends, and his best friends is called ${result.bestFriend}`);