const readline = require('readline');
require('date-utils');
const reader = readline.createInterface({ input: process.stdin });
const player = require('play-sound')();
const base = "./"
const fs = require('fs');
let playing = false

reader.on('line', (line) => {
    if (line.length == 4) {
        if (line == "9999") {
            //reset
            audio.kill()
            playing = false
            if (timer) {
                clearInterval(timer);
            }
        } else if (line == "7777") {
            //check
        } else {
            console.log("set: " + line)
            timer = setInterval(function () {
                var dt = new Date();
                var formatted = dt.toFormat("HH24MISS");
                if (formatted == line + "00" && !playing) {
                    //play
                    fs.readdir(base, function (err, files) {
                        if (err) throw err;
                        var fileList = files.filter(function (file) {
                            return /.*\.mp3$/.test(file); //絞り込み
                        })
                        for (var i = fileList.length - 1; i > 0; i--) {
                            var r = Math.floor(Math.random() * (i + 1));
                            var tmp = fileList[i];
                            fileList[i] = fileList[r];
                            fileList[r] = tmp;
                        }
                        let audio = player.play(fileList[0], err => {
                            if (err) throw err
                        });
                        playing = true
                        clearInterval(timer);
                    });
                }
            }, 1000);
        }
    }
});