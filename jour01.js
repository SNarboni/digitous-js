// 01 - Hello World
console.log("Hello World !");

// 02 - String
var test = "My name is xxx";
console.log(test);

// 03 - Concatenation
var name = "Seb";
console.log(`Nice to meet you ${name} !`);

// 04 - String Length
var testLength = "I'm very long !".length;
console.log(testLength);

// 05 - Replace
var food = "croissant is meh";
console.log(food.replace("meh", "so good"));

// 06 - Up and Down (J'ai pas trop compris l'énoncé)
var basic = "This is Cool";
// var basicUp = "THIS IS COOL"
// var basicDown = "this is cool"
console.log(basic);
console.log(basic.toLocaleUpperCase());
console.log(basic.toLowerCase());

// 07 - Split
var word = "banana";
var letters = word.split("");
console.log(letters);

// 08 - Template
var age = "21";
var template = `I'm ${age} years old`;
console.log(template);

// Bonus
var test = 'Bonjour';
console.log(test.replace(/o/gi, 'a'));