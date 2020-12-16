//01 - Format

function formatDate(string) {
    var date = new Date(string)
    console.log(`La date est : ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)
}
formatDate("2020-12-15")

//02 - Age

function calculateAge(string) {
    var date = new Date(string);
    var diff = Date.now() - date;
    var age = new Date(diff);
    console.log((age.getFullYear() - 1970), "year");
}
calculateAge("1998-05-09")

//03 - Validator

