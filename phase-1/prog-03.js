// ================================================
console.log("=".repeat(55));
console.log("PROGRAM 03 - VARIABLES AND SCOPE");
console.log("STUDENT: Desire Chimtsitsi");
console.log("ID: 23311351018");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 10));
console.log("=".repeat(55));

// var - function scoped
var oldWay = "I am declared with var";
console.log("var variable:", oldWay);

// let - block scoped
let modernWay = "I am declared with let";
console.log("let variable:", modernWay);

// const - cannot be reassigned
const constantValue = "I cannot change";
console.log("const variable:", constantValue);

//  Extra Feature 1: Block scope
if (true) {
    let insideBlock = "Only visible inside block";
    console.log("Block scope (let):", insideBlock);
}

// Extra Feature 2: var redeclaration
var number = 5;
var number = 15;
console.log("var redeclared:", number);

//  Extra Feature 3: Type checking (AFTER declaration)
console.log("Type of var:", typeof oldWay);
console.log("Type of let:", typeof modernWay);
console.log("Type of const:", typeof constantValue);
