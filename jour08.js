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

// console.log(double);

//Exo 3
var longNames = [

    {
        firstName: "Jane",
        lastName: "Doe",
    },

    {
        firstName: "John",
        lastName: "Smith",
    }
]

console.log(longNames.firstName)

// function increment(list) {
//     var newList = [];
//     for (var i = 0; i < list.length; i++) {
//         newList.push(list[i] + list[i + 1]);
//     }
//     return newList;
// }
