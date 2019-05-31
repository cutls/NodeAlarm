const readline = require('readline');
require('date-utils');
const reader = readline.createInterface({ input: process.stdin });
const execSync = require('child_process').execSync;
const base = "../media"
const fs = require('fs');
let playing = false

reader.on('line', (line) => {
    if (line.length == 4) {
        if (line == "9999") {
            //reset
            let result =  execSync('killall mpg321');
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
                console.log(formatted)
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
                        let result =  execSync('mpg321 '+fileList[i]);
                        playing = true
                        clearInterval(timer);
                    });
                }
            }, 1000);
        }
    }
});