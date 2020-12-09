// 01 - Array
console.log("--------01--------");

var fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);
console.table(fruits);

// 02 - Access
console.log("--------02--------");

var ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

// 03 - Add and Remove
console.log("--------03--------");

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
console.log("--------04--------");

var numbers = [4, 10, 8, 12, 6];
console.log("A l'envers: " + numbers.reverse());
console.log("Croissant: " + numbers.sort((a, b) => a - b));

// 05 - Boucle
console.log("--------05--------");

var total = 0;
var limit = 10;
for (var i = 1; i <= 10; i++) {
    console.log("i = " + i);
    total += i;
    console.log("total = " + total);
}
console.log("result = " + total);

// 06 - Reverse
console.log("--------06--------");

function retourne(seb) {
    var retournemot = "";
    for (var i = seb.length - 1; i >= 0; i--) {
        retournemot += seb[i];
    }
    return retournemot;
}
console.log(retourne("Hello konexio !"));



// Bonus
console.log("--------B1--------");

for (var nbr = 1; nbr <= 100; nbr++) {
    var affiche = "";
    if (nbr % 3 === 0 && nbr % 5 === 0) {
        affiche = 'fizzbuzz';
    } else if (nbr % 3 === 0) {
        affiche = 'fizz';
    } else if (nbr % 5 === 0) {
        affiche = 'buzz';
    } else if (nbr % 7 === 0) {
        affiche = 'coucou';
    }
    console.log(nbr + " : " + affiche);
}

// Bonus II
console.log("--------B2--------");
var total = 0;
var limit = 10;
var i = 0;
while (i !== 10) {
    i++;
    console.log("i = " + i);
    total += i;
    console.log("total = " + total);
}
console.log("result = " + total);




// Bonus III
console.log("--------B3--------");



// Bonus IV
console.log("--------B4--------");
