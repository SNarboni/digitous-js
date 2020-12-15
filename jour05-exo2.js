//02 - Table

function multiply(num1) {
    var nombre = parseInt(num1);
    for (var i = 1; i <= 10; i++) {
        result = nombre * i;
        console.log(` ${nombre} x ${i} = ${result} `)
    }
}

if (process.argv.length === 3) {
    multiply(process.argv[2]);
} else {
    console.log("error");
}