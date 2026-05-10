console.log("=".repeat(55));
console.log("PROGRAM 31 - OBJECT LITERALS");
console.log("STUDENT: Desire Chimtsitsi");
console.log("ID: 23311351018");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("=".repeat(55));

// Program 31: Creating objects with object literals
// Basic object literal
const book = {
 title: "The Great Gatsby",
 author: "F. Scott Fitzgerald",
 year: 1925,
 genre: "Novel",
 
 // Method
 getDescription: function() {
 return `${this.title} by ${this.author} (${this.year})`;
 },
 
 // Shorthand method syntax (ES6+)
 updateYear(newYear) {
 this.year = newYear;
 console.log(`Year updated to ${newYear}`);
 }
};
console.log("Book object: " + JSON.stringify(book, null, 2));
console.log("Description: " + book.getDescription());
// Accessing properties
console.log("\\nAccessing Properties:");
console.log("Dot notation: " + book.title);
console.log("Bracket notation: " + book["author"]);
// Adding new properties
book.publisher = "Scribner";
book["ISBN"] = "978-0743273565";
console.log("\\nAfter adding properties: " + JSON.stringify({publisher: book.publisher, ISBN: book.ISBN}));
// Deleting properties
delete book.genre;
console.log("\\nAfter deleting genre: has genre? " + (book.genre === undefined));
// Checking property existence
console.log("\\nProperty Checks:");
console.log("'author' in book? " + ("author" in book)); // true
console.log("'genre' in book? " + ("genre" in book)); // false
console.log("Own property 'toString'? " + book.hasOwnProperty("toString")); 
// false

