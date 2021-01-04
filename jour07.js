var fs = require("fs");

//Exo 1

fs.readFile("jour07.txt", function (err, data) {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data.toString());
});

//Exo 2

var array = [1, 2, 3, 4, 5]
var double = array.map(function (num) {
    return num * 2;
});

console.log(double);

//Exo 3
