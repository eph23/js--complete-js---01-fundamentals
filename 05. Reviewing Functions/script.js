"use strict";

const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        // return retirement;
        return `${firstName} retires in ${retirement} years`;
    } else {
        // return -1
        return `${firstName} has already retired`;
    }
};

console.log(yearsUntilRetirement(1988, "Ephraim"));
console.log(yearsUntilRetirement(1980, "Ephraim"));
console.log(yearsUntilRetirement(1970, "Stephen"));
console.log(yearsUntilRetirement(1950, "Michael"));
