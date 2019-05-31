const exec = require('child_process');
child = child_process.fork("./play");
child.send({ message: base + "/" + fileList[i] });