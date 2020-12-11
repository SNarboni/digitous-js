var i = 0;
var result = 0;

while (i <= 10) {
    i++;
    var dée = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    console.log("dée" + dée)
    result = result + dée;
    console.log("result" + result)
}

// 01
console.log("---------01---------")
var resultat = 0;
for (var i = 25; i <= 75; i++) {
    resultat += i;
}
console.log("total = " + resultat)
console.log("--------------------");



console.log("---------02---------")
var resultat = 1;
for (var i = 10; i <= 15; i++) {
    resultat *= i;
}
console.log("   total = " + resultat);
console.log("--------------------");


console.log("---------03---------")
var resultat = 0;
for (var i = 0; i <= 100; i += 2) {
    resultat += i;
}
console.log(`${resultat} + ${i} =`, resultat + i)
console.log("--------------------");


console.log("---------04---------")
for (var i = 0; i <= 1000; i += 7) {
    console.table(i)
    console.log("----------");
}