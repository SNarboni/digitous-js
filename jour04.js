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

compare(4, 3)
compare(3, 4)
compare(2, 2)

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


console.log("-------------------")
// ⭐ Bonus
console.log("----EXO Bonus----")


console.log("-------------------")
// ⭐ Bonus II
console.log("----EXO Bonus II----")


console.log("-------------------")
