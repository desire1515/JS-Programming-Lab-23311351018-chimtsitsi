console.log("=".repeat(55));
console.log("PROGRAM 32 - THIS KEYWORD");
console.log("STUDENT: Desire Chimtsitsi");
console.log("ID: 23311351018");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("=".repeat(55));

// Program 32: Understanding 'this' in object methods
const user = {
 name: "Desire",
 age: 23,
 
 // Regular method - 'this' refers to the object
 greet() {
 console.log(`Hello, I'm ${this.name}`);
 },
 
 // Arrow function - 'this' is lexical (from outer scope)
 greetArrow: () => {
 console.log(`Hello, I'm ${this.name}`); // undefined!
 },
 
 // Method that returns a function
 getGreeter() {
 return function() {
 console.log(`Hello, I'm ${this.name}`); // 'this' will be lost
 };
 },
 
 // Method with preserved 'this' using arrow function
 getArrowGreeter() {
 return () => {
 console.log(`Hello, I'm ${this.name}`); // Works correctly!
 };
 }
};
console.log("'this' in regular method:");
user.greet(); // Hello, I'm Alice

console.log("\\n'this' in arrow method:");
user.greetArrow(); // Hello, I'm undefined

console.log("\\nRegular greeter (this lost):");
const regularGreeter = user.getGreeter();
regularGreeter(); // Hello, I'm undefined

console.log("\\nArrow greeter (this preserved):");
const arrowGreeter = user.getArrowGreeter();
arrowGreeter(); // Hello, I'm Alice

// Global 'this' test
console.log("\\nGlobal 'this' (non-strict): " + (this === global ? "global" : typeof this));

