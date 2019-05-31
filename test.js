const player = require('play-sound')();
let audio = player.play("test.mp3", err => {
    if (err) throw err
});