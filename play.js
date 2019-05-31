console.log("child start");
const child_process = require('child_process');

process.on("message", function (msg) {
    child_process.execSync('mpg321 '+msg)
});

process.on("exit", function () {
    child_process.execSync('killall mpg321')
    console.log("child exit");
});