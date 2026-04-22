console.log("=".repeat(55));
console.log("PROGRAM 12 - NESTED IF ELSE");
console.log("STUDENT: Desire Chimtsitsi");
console.log("ID: 23311351018");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("=".repeat(55));

// Program 12: Nested conditional statements
let age = 25; // Test value
let hasLicense = "yes"; // Test values: "yes", "no"

console.log(`\\nTesting driving eligibility for age ${age} and license: ${hasLicense}`);
if (age >= 18) {
 console.log("You are old enough to drive.");
 
 if (hasLicense === "yes") {
 console.log("You can legally drive a car.");
 } else if (hasLicense === "no") {
 console.log("You need to get a license first.");
 } else {
 console.log("Invalid input for license.");
 }
} else if (age >= 16) {
 console.log("You can get a learner's permit.");
 
 if (hasLicense === "yes") {
 console.log("You may drive with supervision.");
 } else {
 console.log("Apply for a learner's permit.");
 }
} else {
 console.log("You are too young to drive.");
}

