// 01 - Array
var fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);
console.table(fruits);

// 02 - Access
var ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

// 03 - Add and Remove
var objects = ["pen", "book", "lamp"];

objects.unshift("chair");
console.log('Ajout de "chair": ' + objects);

objects.pop("lamp");
console.log('supp de "lamp": ' + objects);

objects.shift("laptop");
console.log('Ajout de "laptop": ' + objects);

objects.shift("chair");
console.log('supp de "chair": ' + objects);

// 04 - Order
var numbers = [4, 10, 8, 12, 6];
console.log("A l'envers: " + numbers.reverse());
console.log("Croissant: " + numbers.sort((a, b) => a - b));

// 05 - Boucle
var limit = 10;
for (var total = 0; total !== limit; total++) {
    console.log("inside: " + total)
}
console.log("outside: " + total)

// 06 - Reverse


// Bonus


// Bonus II


// Bonus III


// Bonus IV