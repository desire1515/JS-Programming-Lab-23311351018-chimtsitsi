console.log("=".repeat(55));
console.log("PROGRAM 35 - ES6 CLASSES");
console.log("STUDENT: Desire Chimtsitsi");
console.log("ID: 23311351018");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("=".repeat(55));

// Program 35: Modern class syntax (ES6+)
class Person {
 // Class field (modern syntax)
 species = "Homo Sapiens";
 
 // Constructor
 constructor(firstName, lastName, age) {
 this.firstName = firstName;
 this.lastName = lastName;
 this.age = age;
 this._email = ""; // Convention for "private" property
 }
 
 // Instance method
 getFullName() {
 return `${this.firstName} ${this.lastName}`;
 }
 
 // Instance method
 introduce() {
 return `Hi, I'm ${this.getFullName()} and I'm ${this.age} years old.`;
 }
 
 // Instance method
 celebrateBirthday() {
 this.age++;
 console.log(`Happy Birthday ${this.firstName}! You are now 
${this.age} years old.`);
 }
 
 // Getter
 get email() {
 return this._email;
 }
 
 // Setter with validation
 set email(value) {
 if (value.includes("@") && value.includes(".")) {
 this._email = value;
 } else {
 console.log("Invalid email address!");
 }
 }
 
 // Static method (called on class, not instance)
 static createAnonymous() {
 return new Person("Anonymous", "User", 0);
 }
 
 // Static property
 static speciesCount = 0;
}
// Creating instances
const person1 = new Person("Desire", "Chimtsitsi", 23);
const person2 = new Person("Felicia", "Smith", 19);
console.log("--- Person Instances ---");
console.log(person1.introduce());
console.log(person2.introduce());
console.log("\\n--- Birthday Celebration ---");
person1.celebrateBirthday();
person1.celebrateBirthday();
console.log("\\n--- Email Testing ---");
person1.email = "desire.chimtsitsi14@gmail.com";
console.log("Valid email set: " + person1.email);
person1.email = "invalid-email";
console.log("Email after invalid attempt: " + person1.email);
console.log("\\n--- Static Methods ---");
const anonymous = Person.createAnonymous();
console.log(anonymous.introduce());
console.log("\\n--- Class Fields ---");
console.log("person1.species: " + person1.species);
console.log("person2.species: " + person2.species);

