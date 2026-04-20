console.log("=".repeat(55));
console.log("PROGRAM 09 - TYPE COERCION");
console.log("STUDENT: Desire Chimtsitsi");
console.log("ID: 23311351018");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("=".repeat(55));

// Program 9: Understanding automatic and manual type conversion
// Implicit Coercion (Automatic)
console.log("'5' + 3 = " + ("5" + 3)); // "53" (string concatenation)
console.log("'5' - 3 = " + ("5" - 3)); // 2 (numeric subtraction)
console.log("'5' * '2' = " + ("5" * "2")); // 10 (numeric multiplication)
console.log("true + true = " + (true + true)); // 2 (true is 1, false is 0)
// Explicit Conversion (Manual)
let strNumber = "123.45";
let intNumber = parseInt(strNumber);
let floatNumber = parseFloat(strNumber);
let numberConverted = Number(strNumber);
console.log("parseInt: " + intNumber); // 123
console.log("parseFloat: " + floatNumber); // 123.45
console.log("Number(): " + numberConverted); // 123.45
// Converting to String
let num = 456;
console.log("toString(): " + num.toString()); // "456"
console.log("String(): " + String(num)); // "456"
// Converting to Boolean
console.log("Boolean(1): " + Boolean(1)); // true
console.log("Boolean(0): " + Boolean(0)); // false
console.log("Boolean(''): " + Boolean("")); // false
console.log("Boolean('hello'): " + Boolean("hello")); // true

