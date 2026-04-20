console.log("=".repeat(55));
console.log("PROGRAM 10 - USER INPUT");
console.log("STUDENT: Desire Chimtsitsi");
console.log("ID: 23311351018");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("=".repeat(55));

// Program 10: User input simulation for Node.js
let userName = "Desire Chimtsitsi";
let userAgeStr = "23";
let ageNumber = parseInt(userAgeStr);
let currentYear = new Date().getFullYear();
let birthYear = currentYear - ageNumber;
console.log("Hello " + userName + "! You were born around " + birthYear + ".");
console.log("User: " + userName + ", Age: " + ageNumber + ", Birth Year: " + birthYear);

// Note: For real input in Node.js use:
// const readline = require('readline');
// const rl = readline.createInterface({input: process.stdin, output: process.stdout});
// rl.question('Name: ', name => { rl.question('Age: ', age => { console.log('Hello ' + name); rl.close(); }); });

console.log("Input simulation complete.");
