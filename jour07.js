// function sortLetters(string) {
//     var mot = string;
//     var alph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
//     for (var i = 0; i <= ; i++) {
//         var lettre = ;

//     }
// }

// sortLetters("coucou")

//01 - Alphabet
// function sortLetters(string) {
//     var mot = string;
//     var falseTable = [];
//     console.log("Votre mot : " + mot)
//     for (var i = 0; i < mot.length; i++) {
//         falseTable.push(mot[i])
//     }
//     console.log("Et dans l'ordre : " + falseTable.sort())
// }
// sortLetters("coucou")

//02 - XOXO
console.log("----------------------------")

function countEach(string) {
    var mot2 = string;
    var i = 0;
    var countx = 0;
    var counto = 0;
    while (i <= mot2.length) {
        if (mot2[i] === "x") {
            countx++;
        } else if (mot2[i] === "o") {
            counto++;
        }
        i++;
    }
    if ((countx + counto) !== mot2.length) {
        console.log("il faut mettre autant de x que o")
    } else if (countx == counto) {
        console.log(`il y a ${countx} x et ${counto} o donc vrai`)
    } else {
        console.log(`il y a ${countx} x et ${counto} o donc faux`)
    }
}
countEach("xxxoooox")
countEach("xox")
countEach("apappapa")

// 03 - Palindrome
console.log("----------------------------")
function checkPal(string) {
    var mot = string;
    var returnword = "";
    var count = 0;
    for (var i = mot.length - 1; i >= 0; i--) {
        returnword += mot[i];
    }
    for (var j = 0; j <= returnword.length; j++) {
        if (mot[j] === returnword[j]) {
            count++;
        }
    }
    console.log("mon mot : " + mot)
    console.log("le mot retourné : " + returnword)
    if (count >= mot.length) {
        return "--le mot est retournable--";
    } else {
        return "--déso tu peux pas--";
    }
}

console.log(checkPal("racecar"));
console.log(checkPal("laptop"));
console.log("----------------------------")
