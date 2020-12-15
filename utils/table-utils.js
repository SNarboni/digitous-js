//02 - Table

function multiply(num1) {
    var nombre = parseInt(num1);
    for (var i = 1; i <= 10; i++) {
        result = nombre * i;
        console.log(` ${nombre} x ${i} = ${result} `)
    }
}

function addition(num1) {
    var nombre = parseInt(num1);
    for (var i = 1; i <= 10; i++) {
        result = nombre + i;
        console.log(` ${nombre} + ${i} = ${result} `)
    }
}

if (process.argv.length === 3) {
    multiply(process.argv[2])
    addition(process.argv[2])

} else {
    console.log("error")
}

module.exports = {
    multiply,
    addition,
}