var { multiply, addition } = require("./utils/table-utils")

if (process.argv.length !== 4) {
    console.log("error")
} else {
    multiply(process.argv[2])
    addition(process.argv[3])
}