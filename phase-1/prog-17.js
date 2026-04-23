console.log("=".repeat(55));
console.log("PROGRAM 17 - DO WHILE LOOP");
console.log("STUDENT: Desire Chimtsitsi");
console.log("ID: 23311351018");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("=".repeat(55));

// Program 17: Do-while loop (executes at least once)
// Example 1: Menu system simulation
let choice = 1; // Simulated choices: 1-4
let menuCount = 0;
do {
 console.log("\\n=== MENU ===");
 console.log("1. Say Hello");
 console.log("2. Show Date");
 console.log("3. Show Time");
 console.log("4. Exit");
 
 switch(choice) {
 case 1:
 console.log("Hello there!");
 break;
 case 2:
 console.log("Date: " + new Date().toLocaleDateString());
 break;
 case 3:
 console.log("Time: " + new Date().toLocaleTimeString());
 break;
 case 4:
 console.log("Goodbye!");
 break;
 default:
 console.log("Invalid choice. Try again.");
 }
 menuCount++;
 
 // Simulate choice change
 if (menuCount < 6) choice = menuCount % 4 + 1;
} while (choice !== 4 && menuCount < 6);

// Example 2: Input validation simulation
let password = "short";
let passwordAttempts = 0;
do {
 passwordAttempts++;
 if (password.length < 6) {
 console.log("Password too short! Must be at least 6 characters. (attempt " + passwordAttempts + ")");
 }
 if (passwordAttempts === 3) password = "longenough123"; // Simulate valid input
} while (password.length < 6 && passwordAttempts < 3);
console.log("Password accepted!");

