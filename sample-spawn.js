const { spawn } = require('child_process')
const result = spawn('git branch');

result.stdout.on('git branch', (result) => {
    console.log (`stdout: ${result}`);
});
