//01 - Format

function formatDate(string) {
    var date = new Date(string)
    console.log(`La date est : ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
}
formatDate("2020-12-15")

//02 - Age

function calculateAge(string) {
    var date = new Date(string);
    var diff = date - Date.now();
    var age = new Date(diff);
    console.log((Math.abs(age.getUTCFullYear() - 1970)) - 1, "year");
}
calculateAge("1998-05-09")

//03 - Validator

