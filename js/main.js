// Display content in HTML document
document.write(20 * 23 + "<br>"); // Displays 460 and a line break
document.write(20 * 21); // Displays 420

// Alert box
alert(2 ** 5); // Displays 32 in an alert box

// Confirm box
confirm("Saytdan chiqasizmi?"); // Displays a confirmation dialog with a message

// Prompt box
prompt("Ismingizni yozing"); // Displays a prompt dialog asking for user input

// Console methods
console.log("JavaScript the best programming language"); // Logs message to console
console.warn("Saytda nimadur xato"); // Logs warning message
console.error("404 hech narsa topilmadi"); // Logs error message
console.info("Hello world"); // Logs informational message
console.table({ name: "Evan You", age: 34, job: "programmer", isUzbek: false }); // Logs object as a table

// Manipulating HTML content
document.getElementById("text").innerHTML = "<em>Lorem ipsum dolor</em>"; // Sets HTML content with emphasis
document.getElementById("text").textContent = "<em>Lorem ipsum dolor</em>"; // Sets text content (no HTML rendering)

// Variable declarations

// `var` - Allows redeclaration and reassignment
var a = 12;
console.log(a); // 12
a = 13;
console.log(a); // 13
var a = 25;
console.log(a); // 25

// `let` - Allows reassignment but not redeclaration in the same scope
let b = 35;
b = 50;
console.log(b); // 50

// Uncommenting the following line will cause an error because `let` does not allow redeclaration in the same scope
// let b = 21;

// `const` - Does not allow reassignment or redeclaration
const c = 12;
console.log(c); // 12

// Uncommenting the following lines will cause errors because `const` does not allow reassignment or redeclaration
// c = 23;
// const c = 33;

// Hoisting example
console.log(n); // ReferenceError: Cannot access 'n' before initialization

{
  let n = 111;
  console.log(n); // 111
}

// Data Types in JavaScript

// Primitive data types
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// String
let myJob = "Programmer";
let myName = "Mukhriddin";
let fullInfo = `My name is ${myName}, I'm ${myJob}, and ${23} years old`; // Template literal
console.log(fullInfo); // Logs: My name is Mukhriddin, I'm Programmer, and 23 years old

// Number
console.log(true - false); // Logs: 1 (Boolean values are coerced to numbers)
console.log(12 / "10"); // Logs: 1.2 (String is coerced to number)
console.log(12 * "10"); // Logs: 120 (String is coerced to number)
console.log(12 + "12"); // Logs: 1212 (Number is coerced to string)
console.log(typeof NaN); // Logs: 'number' (NaN is of type number)

// Boolean
console.log(12 < 10); // Logs: false

// Undefined
let number;
console.log(number); // Logs: undefined
number = 5;
console.log(number); // Logs: 5

// Comparison
console.log(12 == "12"); // Logs: true (loose equality check)

// Symbol
let person1 = Symbol("Sardor");
let person2 = Symbol("Sardor");
console.log(person1); // Logs unique Symbol
console.log(person1 == person2); // Logs: false (Symbols are unique)

// BigInt
let num = BigInt(213333324242424244424);
console.log(typeof num); // Logs: 'bigint'
console.log(num); // Logs: 213333324242424244424
console.log(12345678n); // Logs: 12345678n (BigInt literal)
console.log(typeof null); // Logs: 'object' (historical bug in JavaScript)

// Data types summary
/*
-- PRIMITIVE --
1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

-- NON-PRIMITIVE (OBJECTS) --
8. Object
   - Array
   - Function
   - Other user-defined objects
*/
