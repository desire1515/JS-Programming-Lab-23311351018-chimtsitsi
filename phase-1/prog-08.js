console.log("=".repeat(55));
console.log("PROGRAM 08 - LOGICAL OPERATORS");
console.log("STUDENT: Desire Chimtsitsi");
console.log("ID: 23311351018");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("=".repeat(55));

let isLoggedIn = true;
let isAdmin = false;
let hasPermission = true;

console.log("Admin access: " + (isLoggedIn && isAdmin));
console.log("Can view page: " + (isLoggedIn || hasPermission));
console.log("Is NOT admin: " + (!isAdmin));

let userName = "";
let displayName = userName || "Guest User";
console.log("Display name: " + displayName);

let count = 0;
let result = count ?? 10;
console.log("Nullish result: " + result);
