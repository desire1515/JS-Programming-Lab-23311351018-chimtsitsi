console.log("=".repeat(55));
console.log("PROGRAM 26 - CALLBACK FUNCTIONS");
console.log("STUDENT: Desire Chimtsitsi");
console.log("ID: 23311351018");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("=".repeat(55));

// Program 26: Functions as arguments (callbacks)
// Function that accepts a callback
function processArray(arr, callback) {
 let result = [];
 for (let i = 0; i < arr.length; i++) {
 result.push(callback(arr[i], i));
 }
 return result;
}
// Different callbacks
function double(x) {
 return x * 2;
}
function square(x) {
 return x * x;
}
function formatCurrency(x) {
 return `$${x.toFixed(2)}`;
}
let numbers = [1, 2, 3, 4, 5];
console.log("Original array: " + JSON.stringify(numbers));
console.log("Doubled: " + JSON.stringify(processArray(numbers, double)));
console.log("Squared: " + JSON.stringify(processArray(numbers, square)));
let prices = [10.5, 25.75, 99.99];
console.log("Prices: " + processArray(prices, formatCurrency).join(", "));
// Inline callback (anonymous function)
let tripled = processArray(numbers, function(x) {
 return x * 3;
});
console.log("Tripled: " + JSON.stringify(tripled));
// Arrow function callback
let halved = processArray(numbers, x => x / 2);
console.log("Halved: " + JSON.stringify(halved));

