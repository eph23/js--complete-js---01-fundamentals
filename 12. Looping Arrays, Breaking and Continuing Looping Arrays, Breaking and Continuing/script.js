"use strict";

// Array
const eph = [
    "Ephraim",
    "Sangma",
    2037 - 1988,
    "Web-Dev",
    ["Michael", "Steven", "Jay"],
];

console.log(eph);

const types = [];

// Looping array
for (let i = 0; i < eph.length; i++) {
    console.log(eph[i], typeof eph[i]);
}

console.log(types);

// Exercise
const years = [1991, 2007, 1969, 2020];
console.log(years);

const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// Continue
console.log("---CONTINUE---");
for (let i = 0; i < eph.length; i++) {
    if (typeof eph[i] !== "string") {
        continue;
    } else {
        console.log(eph[i], typeof eph[i]);
    }
}
console.log("---CONTINUE---");

// Break
console.log("---Break---");
for (let i = 0; i < eph.length; i++) {
    if (typeof eph[i] !== "string") {
        break;
    } else {
        console.log(eph[i], typeof eph[i]);
    }
}

console.log("-------");
for (let i = 0; i < eph.length; i++) {
    if (typeof eph[i] === "number") {
        break;
    } else {
        console.log(eph[i], typeof eph[i]);
    }
}
console.log("-------");
for (let i = 0; i < eph.length; i++) {
    if (typeof eph[i] === "object") {
        break;
    } else {
        console.log(eph[i], typeof eph[i]);
    }
}
console.log("---Break---");
