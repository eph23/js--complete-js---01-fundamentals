"use strict";

// while loop
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights rep ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
