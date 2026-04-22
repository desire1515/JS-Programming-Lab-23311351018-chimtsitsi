console.log("=".repeat(55));
console.log("PROGRAM 11 - IF ELSE STATEMENTS");
console.log("STUDENT: Desire Chimtsitsi");
console.log("ID: 23311351018");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("=".repeat(55));

// Program 11: Conditional execution with if-else
let score = 85; // Test value - change to test different scenarios

console.log(`\\nTesting grade calculation for score: ${score}`);
if (score >= 90) {
 console.log("Grade: A - Excellent!");
} else if (score >= 80) {
 console.log("Grade: B - Very Good!");
} else if (score >= 70) {
 console.log("Grade: C - Good!");
} else if (score >= 60) {
 console.log("Grade: D - Passing!");
} else {
 console.log("Grade: F - Needs Improvement.");
}
console.log(`Your score: ${score}`);

