var request = require("request");

request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {
    var boite = [];
    for (var i = 0; i <= 249; i++) {
        var result = JSON.parse(body);
        boite.push(result[i].name);
    }
    console.log(`${boite} `)
});
