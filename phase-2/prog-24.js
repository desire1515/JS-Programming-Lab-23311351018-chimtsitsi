console.log("=".repeat(55));
console.log("PROGRAM 24 - DEFAULT PARAMETERS");
console.log("STUDENT: Desire Chimtsitsi");
console.log("ID: 23311351018");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("=".repeat(55));

// Program 24: Function parameters and default values
// Default parameters (ES6+)
function greet(name = "desire", greeting = "Hello") {
 console.log(`${greeting}, ${name}!`);
}
greet("felicia"); // Hello, felicia!
greet("desire", "Hi"); // Hi, desire!
greet(undefined, "Welcome"); // Welcome, Guest!
// Rest parameters (...)
function sum(...numbers) {
 let total = 0;
 for (let num of numbers) {
 total += num;
 }
 return total;
}
console.log("Sum of 1,2,3: " + sum(1, 2, 3));
console.log("Sum of 1,2,3,4,5: " + sum(1, 2, 3, 4, 5));
// Arguments object (older way)
function oldStyleSum() {
 let total = 0;
 for (let i = 0; i < arguments.length; i++) {
 total += arguments[i];
 }
 return total;
}
console.log("Old style sum: " + oldStyleSum(1, 2, 3, 4));

