console.log("=".repeat(55));
console.log("PROGRAM 16 - WHILE LOOP");
console.log("STUDENT: Desire Chimtsitsi");
console.log("ID: 23311351018");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("=".repeat(55));

// Program 16: While loop for unknown iterations
// Example 1: Countdown
console.log("Countdown:");
let countdown = 5;
while (countdown > 0) {
 console.log(countdown);
 countdown--;
}
console.log("Blast off!");

// Example 2: Sum calculator simulation (no real input in Node)
console.log("\\nSum Calculator (simulated):");
let simulatedSum = 0;
let simulatedInput = [10, 20, 30, 0]; // Simulated inputs
let index = 0;
while (simulatedInput[index] !== 0) {
 simulatedSum += simulatedInput[index];
 console.log(`Adding ${simulatedInput[index]}, sum = ${simulatedSum}`);
 index++;
}
console.log(`Final sum: ${simulatedSum}`);

// Example 3: Number guessing game
let secretNumber = Math.floor(Math.random() * 10) + 1;
let guess = 0;
let attempts = 0;
console.log("\\nGuessing game (simulated): Secret number between 1-10");
while (guess !== secretNumber) {
 guess = Math.floor(Math.random() * 10) + 1; // Simulated random guess
 attempts++;
 
 if (guess < secretNumber) {
 console.log(`Guess ${guess}: Too low! (attempt ${attempts})`);
 } else if (guess > secretNumber) {
 console.log(`Guess ${guess}: Too high! (attempt ${attempts})`);
 }
}
console.log(`Correct! The number was ${secretNumber}.`);
console.log(`It took ${attempts} attempts.`);

