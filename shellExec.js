const { spawn } = require('child_process');

const getWindowsPostfix = () => {
  return process.platform === 'win32' ? '.cmd' : '';
};

const shellExec = cmd => {
  const promise = new Promise((resolve, reject) => {
    const cmdArr = cmd.split(' ');

    if (cmdArr[0] === 'npm' || cmdArr[0] === 'npx') {
      cmdArr[0] += getWindowsPostfix();
    }

    const baseCmd = cmdArr.shift();

    const child = spawn(baseCmd, [...cmdArr]);

    child.stdout.on('data', data => {
      console.log(data.toString());
    });

    child.stderr.on('data', data => {
      console.error(data.toString());
    });

    child.on('error', error => {
      console.error(`error: ${error.message.toString()}`);
    });

    child.on('close', code => {
      console.log(`child process exited with code ${code.toString()}`);
      console.log();
      resolve();
    });
  });

  return promise;
};

module.exports = shellExec;
