"use strict";

// Object
const eph = {
    firstName: "Ephraim",
    lastName: "Sangma",
    age: 2037 - 1988,
    job: "Web-Dev",
    friends: ["Michael", "Steven", "Jay"],
};

console.log(eph);

// Accessing object values
console.log(eph.lastName);
console.log(eph["lastName"]);

const nameKey = "Name";
console.log(eph["first" + nameKey]);
console.log(eph["last" + nameKey]);

/* const interestedIn = prompt(
    "What do you want to know about Eph? Choose between firstName, lastName, age, job and friends"
);

if (eph[interestedIn]) {
    console.log(eph[interestedIn]);
} else {
    prompt(
        "WRONG REQUEST!!! Choose between firstName, lastName, age, job and friends"
    );
}
 */

// Adding new property
eph.location = "Bangladesh";
eph["twitter"] = "@Bangladesh";

console.log(eph);

// Challenge
/* `Eph has 3 friends and his best friend is called Steven` */
console.log(
    `${eph.firstName} has ${eph.friends.length} friends and his best friend is called ${eph.friends[1]}`
);
