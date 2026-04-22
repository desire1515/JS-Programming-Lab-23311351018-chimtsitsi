console.log("=".repeat(55));
console.log("PROGRAM 13 - SWITCH STATEMENT");
console.log("STUDENT: Desire Chimtsitsi");
console.log("ID: 23311351018");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("=".repeat(55));

// Program 13: Multiple conditions with switch
let dayNumber = 3; // Test: 1-7

console.log(`\\nDay ${dayNumber}:`);
let dayName;
switch(dayNumber) {
 case 1:
 dayName = "Monday";
 break;
 case 2:
 dayName = "Tuesday";
 break;
 case 3:
 dayName = "Wednesday";
 break;
 case 4:
 dayName = "Thursday";
 break;
 case 5:
 dayName = "Friday";
 break;
 case 6:
 dayName = "Saturday";
 break;
 case 7:
 dayName = "Sunday";
 break;
 default:
 dayName = "Invalid day number!";
}
console.log(`Day ${dayNumber} is ${dayName}`);

console.log("\\n--- Grade switch example ---");
let grade = "B"; // Test: "A", "B", "C", "D", "F"
let message;
switch(grade) {
 case "A":
 message = "Outstanding!";
 break;
 case "B":
 case "C":
 message = "Good job!";
 break;
 case "D":
 message = "You passed.";
 break;
 case "F":
 message = "Better luck next time.";
 break;
 default:
 message = "Invalid grade.";
}
console.log(`${grade}: ${message}`);

