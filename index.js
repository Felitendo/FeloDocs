const { exec } = require('child_process');

const command = 'npm run serve -- --build --port 25562 --host 0.0.0.0';

const child = exec(command);

// Log the stdout data as it comes in
child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

// Log the stderr data as it comes in
child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

// Handle the child process exiting
child.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
});

// Handle any errors that occur
child.on('error', (error) => {
    console.error(`Error: ${error.message}`);
});