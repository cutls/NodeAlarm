const exec = require('child_process').exec;
exec('killall mpg321', (err, stdout, stderr) => {
  if (err) { console.log(err); }
  console.log(stdout);
});