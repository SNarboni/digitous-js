var prompt = require('prompt');

var dice = (Math.floor(Math.random() * 100 + 1))

function play() {
    prompt.start();

    prompt.get(['number'], function (err, result) {
        var playerResult = parseInt(result.number);
        if (dice > playerResult) {
            console.log("----------C'est plus !----------")
            play()
        }
        else if (dice < playerResult) {
            console.log("----------C'est moins !----------")
            play()
        }
        else if (dice === playerResult) {
            console.log("----------GG EZ----------")
        }
        else {
            console.log("----------Recommencez----------")
            play()
        }

    });
}


play()