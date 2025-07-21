"use strict";

// Object
const eph = {
    firstName: "Ephraim",
    lastName: "Sangma",
    birthYear: 1988,
    job: "Web-Dev",
    friends: ["Michael", "Steven", "Jay"],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummery: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${
            this.job
        }, and has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
    },
};

console.log(eph.calcAge());
console.log(eph.age);

// Challenge
/* `Ephraim isa 49-years old Web-Dev, and has a drivers license` */
console.log(eph.getSummery());
