console.log(__filename);

const { spawn } = require("child_process");
const ls1 = spawn("pwd");

ls1.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
});

ls1.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
});

ls1.on('error', (error) => {
    console.log(`error: ${error.message}`);
});

ls1.on("close", code => {
    console.log(`child process exited with code ${code}`);
});