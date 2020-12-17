function sortLetters(string) {
    var mot = string;
    var falseTable = [];
    console.log("Votre mot : " + mot)
    for (var i = 0; i < mot.length; i++) {
        falseTable.push(mot[i])
    }
    console.log("Et dans l'ordre : " + falseTable.sort().join(""))
}
sortLetters("konexio")

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

//04-
function swap(string) {
    var mot = string;
    var count = "";
    var letter = "";
    for (var i = 0; i < mot.length; i++) {
        letter = mot.charAt(i);
        if (letter === letter.toUpperCase()) {
            count += letter.toLowerCase();
        } else if (letter == letter.toLowerCase()) {
            count += letter.toUpperCase();
        }
    }
    return count
}

console.log(swap("Hello World"))
console.log("----------------------------")


//bonus

function makeItSpongeBob(string) {
    var mot = string.toLowerCase();
    var count = "";
    var result = "";
    for (var i = 0; i < mot.length; i++) {
        if (i % 2 === 1) {
            count = mot[i].toUpperCase();
            result = result + count;
        } else {
            count = mot[i].toLowerCase();
            result = result + count;
        }
    }
    console.log(result)
}
makeItSpongeBob("Javascript is easy")
console.log("----------------------------")


// Bonus II
function compare(a, b) {
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
    return 0;
}

function sortLetters2(string) {
    var mot = string;
    var falseTable = [];
    console.log("Votre mot : " + mot)
    for (var i = 0; i < mot.length; i++) {
        falseTable.push(mot[i])
    }
    console.log("Et dans l'ordre : " + falseTable.sort(compare).join(""))
}
sortLetters2("Konexio")
console.log("----------------------------")

//bonus III 

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
countEach("xoxoxp")
countEach("dafafafp")