// 01 - Object
console.log("----EXO 01----")

var cat = {
    nom: "Garfield",
    age: 3,
    isCute: true,
}
console.log(cat)
if (cat.isCute === true) {
    console.log("So Cute")
}

console.log("-------------------")

// 02 - Combine
console.log("----EXO 02----")

var cat2 = {
    nom: "Croustipatte",
    age: 1,
    isCute: true,
}

var cats = {
    cat,
    cat2,
}

console.log(cat.age)
console.log(cat2.isCute)

console.log("-------------------")

// 03 - Even
console.log("----EXO 03----")

function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}
checkIfEven(2);
checkIfEven(3);
checkIfEven(4);
checkIfEven(5);

console.log("-------------------")

// 04 - Compare
console.log("----EXO 04----")

function compare(num1, num2) {
    if (num1 > num2) {
        console.log("num1 is bigger")
    } else if (num2 > num1) {
        console.log("num2 is bigger")
    } else {
        console.log("both are the same")
    }
}

console.log(compare(Math.floor(Math.random() * 100 + 1), Math.floor(Math.random() * 100 + 1)))

console.log("-------------------")

// 05 - Add Up
console.log("----EXO 05----")

function addUp(num) {
    var result = num;
    while (num !== 1) {
        num--;
        result = num + result;
    }
    console.log("Le résultat est : " + result);
}

addUp(12)
addUp(22)
addUp(78)

console.log("-------------------")

// 06 - Time
console.log("----EXO 06----")

function format(num) {
    var seconde = 0;
    var minute = 0;
    var heur = 0;
    while (num >= 60) {
        minute++;
        num = num - 60;
        if (minute >= 60) {
            heur++;
            minute = minute - 60;
        }
        seconde = num;
    }
    console.log(`${heur}:${minute}:${seconde}`)
}
format(3700)
format(120)
format(120 * 8)
console.log("-------------------")

// ⭐ Bonus
console.log("----EXO Bonus----")

function generatePassword(num) {
    var alph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
    var i = 0;
    var result = "";
    var error = "error";
    while (num !== i) {
        i++;
        var dée = Math.floor(Math.random() * alph.length);
        result += alph[dée];
    } if (num < 6 || num > 15) {
        return error
    } else {
        return result
    }
}

for (var j = 0; j <= 18; j += 2) {
    console.log(`Mot de passe de ${j} caractères : ${generatePassword(j)}`)
}

console.log("-------------------")

// ⭐ Bonus II
console.log("----EXO Bonus II----")

function launchDice(numberOfDice) {
    var dée = null;
    var result = 0;
    for (var i = 0; i <= numberOfDice; i++) {
        dée = Math.floor(Math.random() * (6 + 1));
        result = result + dée;
    }
    return result
}

var j1 = launchDice(5);
var j2 = launchDice(5);
if (j1 > j2) {
    console.log(`joueur 1 (${j1}) est supérieur à joueur 2 (${j2})`)
} else if (j2 > j1) {
    console.log(`joueur 2 (${j2}) est supérieur à joueur 1 (${j1})`)
} else {
    console.log(`Egalité parfaite! j1 = ${j1}, j2 = ${j2}`)
}

console.log("-------------------")


