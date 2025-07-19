"use strict";

// Basic Array Operations
const friends = ["Michael", "Steven", "John"];
console.log(friends);
console.log(friends.length);

// push method
friends.push("Jay");
console.log(friends);
console.log(friends.length);

// unshift method
friends.unshift("John");
console.log(friends);
console.log(friends.length);

// pop method
const popped = friends.pop();

console.log(friends);
console.log(friends.length);
console.log(popped);

// shift method
const shifted = friends.shift();
console.log(friends);
console.log(friends.length);
console.log(shifted);

// indexOf method
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

// includes method
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

if (friends.includes("Steven")) {
    console.log("You have a friend named Steven");
}
