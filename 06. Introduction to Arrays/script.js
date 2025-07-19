"use strict";

// Array Literal
const friends = ["Michael", "Steven", "John"];
console.log(friends);

// Array Constructor
const years = new Array(1988, 1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

// Array property
console.log(friends.length);
console.log(friends[friends.length - 1]);

// Mutating array
friends[2] = "Jay";
console.log(friends);

// Example
const firstName = "Ephraim";

const eph = [firstName, "Sangma", 2037 - 1988, "Web-dev", friends];

console.log(eph);
console.log(eph[0]);
console.log(eph[eph.length - 1]);

// Exercise
const birthYears = [1990, 1967, 2002, 2010, 2018];

const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const ages = [
    calcAge(birthYears[0]),
    calcAge(birthYears[2]),
    calcAge(birthYears[birthYears.length - 1]),
];
console.log(calcAge(birthYears[0]));
console.log(ages);
