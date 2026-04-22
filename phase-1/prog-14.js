console.log("=".repeat(55));
console.log("PROGRAM 14 - FOR LOOP");
console.log("STUDENT: Desire Chimtsitsi");
console.log("ID: 23311351018");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("=".repeat(55));

// Program 14: Introduction to for loops
console.log("Counting from 1 to 10:");
for (let i = 1; i <= 10; i++) {
 console.log(i);
}
console.log("\\nCounting backwards from 10 to 1:");
for (let i = 10; i >= 1; i--) {
 console.log(i);
}
console.log("\\nEven numbers from 2 to 20:");
for (let i = 2; i <= 20; i += 2) {
 console.log(i);
}
// Multiplication table
let number = 6; // Test number
console.log(`\\nMultiplication table for ${number}:`);
for (let i = 1; i <= 10; i++) {
 console.log(`${number} x ${i} = ${number * i}`);
}

