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

// Looping backwards
for (let i = eph.length - 1; i >= 0; i--) {
    console.log(eph[i]);
}

// Loops in loops
for (let i = 1; i <= 5; i++) {
    console.log(`Exercise ${i}`);
    for (let j = 1; j <= 5; j++) {
        console.log(`Exercise ${i}, rep ${j}`);
    }
}
