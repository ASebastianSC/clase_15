const { spawn } = require('child_process')
const result = spawn('git', ['branch']);

result.stdout.on('data', (stdout) => {
	console.log(`${stdout}`)
})

//`${}`es un template para traducir a string 