var fs = require("fs");

// exo 1
fs.readFile("./jour08.txt", function (error, data) {
    console.log(data.toString());
})

// exo 2

var array = [1, 2, 3, 4, 5,];
var double = array.map(function (element) {
    return 2 * element;
})

console.log(array);
console.log(double);

// exo 3

var longName = [

    {
        firstName: "Jane",
        lastName: "Doe",
    },

    {
        firstName: "John",
        lastName: "Smith",
    }
];

var shortName = longName.map(function (element) {
    return {
        name: `${element.firstName} ${element.lastName}`
    };
});

console.log(shortName)

// exo 4

var array = [1, "toto", 34, "javascript", 8];
var numbers = array.filster(function (element) {
    return
})

console.log()