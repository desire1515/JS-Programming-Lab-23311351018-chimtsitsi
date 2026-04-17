console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Desire Chimtsitsi");
console.log("ID: 23311351018");
console.log("PROGRAM: 04 - DATA TYPES AND TYPEOF OPERATOR");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("23311351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 4: Exploring JavaScript data types
let numberType = 42;
let stringType = "Hello World";
let booleanType = true;
let undefinedType;
let nullType = null;
let objectType = { name: "John" };
let arrayType = [1, 2, 3];
let functionType = function() { return "Hello"; };
console.log("number:", typeof numberType); // "number"
console.log("string:", typeof stringType); // "string"
console.log("boolean:", typeof booleanType); // "boolean"
console.log("undefined:", typeof undefinedType); // "undefined"
console.log("null:", typeof nullType); // "object" (JavaScript quirk!)
console.log("object:", typeof objectType); // "object"
console.log("array:", typeof arrayType); // "object" (arrays are objects)
console.log("function:", typeof functionType); // "function
// EXTRA FEATURE 1: Proper array check
console.log("Is array:", Array.isArray([1, 2, 3]));

// EXTRA FEATURE 2: Object inspection
let student = { name: "Desire", id: 23311351018 };
console.log("Object keys:", Object.keys(student));
console.log("Object values:", Object.values(student));

// EXTRA FEATURE 3: Null vs undefined comparison
console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);

// EXTRA FEATURE 4: Real-world type check
console.log("Type of student object:", typeof student);
