const exec = require('child_process').exec;
exec('mpg321 test.mp3', (err, stdout, stderr) => {
  if (err) { console.log(err); }
  console.log(stdout);
});