// 01 - Number
var integer = 102;
var float = 13.9;
var result = integer + float;
console.log(`Le résultat est = ${result}`);

// 02 - Convert
var basic = 34;
var stringified = basic.toString();
console.log(stringified);
console.log(stringified.length);

// 03 - Round
var num = 5;
var rounded = Math.round(num);
console.log(rounded);

// 04 - Arithmétique
var test = 12;
var bis = 5;
console.log("Pour l'addition = " + (test + bis));
console.log("Pour la soustraction = " + (test - bis));
console.log("Pour la multiplication = " + (test * bis));
console.log("Pour la division = " + (test / bis));
console.log("Pour la puissance = " + (test ** bis));
console.log("Pour le reste = " + (test % bis));

// 05 - Comparaison
var test = 143;
var bis = 219;
console.log("- test est strictement supérieur à bis : " + (test > bis));
console.log("- test est strictement inférieur à bis : " + (test < bis));
console.log("- test est supérieur ou égal à bis : " + (test >= bis));
console.log("- test est inférieur ou égal à bis : " + (test <= bis));
console.log("- test est égal à bis : " + (test == bis));
console.log("- test est strictement égal à bis : " + (test === bis));
console.log("- test est différent de bis : " + (test != bis));
console.log("- test est strictement différent de bis : " + (test !== bis));

// 06 - Condition
var limit = 50;
var score = 60;
if (score >= limit) {
    console.log("gg c'est win EZ");
} else {
    console.log("gros noob");
}

// 07 - Condition II
var password = "azerty";
if (password.length >= 5) {
    console.log("tu est protégé");
} else {
    console.log("trouve un mot de passe plus compliqué");
}

// 08 - Condition III
if (score >= limit && password.length >= 5) {
    console.log("t'es un champion");
} else if (score >= limit || password.length >= 5) {
    console.log("bien mais pas ouff");
} else {
    console.log("ya un pb quelque part");
}

// Bonus I
var random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
if (random === 6) {
    console.log("GG c'est win")
} else {
    console.log("RIP")
}
// Bonus II
var month = "Novembre";

switch (month) {
    case "Janvier": case "Février": case "Mars":
        console.log("Hiver");
        break;
    case "Avril": case "Mai": case "Juin":
        console.log("Printemps");
        break;
    case "Juillet": case "Aôut": case "Septembre":
        console.log("Été");
        break;
    case "Octobre": case "Novembre": case "Décembre":
        console.log("Automne");
        break;
    default:
        console.log("Ce mois n'éxiste pas");
}

// Bonus III
var nbr = 12.5;
if ((nbr - Math.floor(nbr)) >= .5) {
    console.log(Math.ceil(nbr))
} else {
    console.log(Math.floor(nbr))
}

// Bonus IV

