//01 - Calculator

function calculate(num1, op, num2) {
    var result = 0;
    var num1 = parseInt(num1);
    var num2 = parseInt(num2);
    if (op == "+") {
        return num1 + num2;
    }
    if (op == "-") {
        result = num1 - num2;
    }
    if (op == "x") {
        return num1 * num2;
    }
    if (op == "/") {
        result = num1 / num2;
    }
    if (op == "%") {
        result = num1 % num2;
    }
    return result
}
console.log(calculate(process.argv[2], process.argv[3], process.argv[4]))
console.log(process.argv)