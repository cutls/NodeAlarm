const child_process = require('child_process');
child = child_process.fork("./play");
child.send({ message:"../media/03Frost.mp3"  });