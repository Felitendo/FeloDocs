const { exec } = require('child_process');

// Command to run 'npm run build'
const buildCommand = 'npm run build';

// Execute 'npm run build' command first
const buildProcess = exec(buildCommand);

// Log the stdout data as it comes in for 'npm run build'
buildProcess.stdout.on('data', (data) => {
    console.log(`stdout (build): ${data}`);
});

// Log the stderr data as it comes in for 'npm run build'
buildProcess.stderr.on('data', (data) => {
    console.error(`stderr (build): ${data}`);
});

// Handle the 'npm run build' process exiting
buildProcess.on('close', (buildCode) => {
    console.log(`'npm run build' process exited with code ${buildCode}`);
    
    if (buildCode === 0) {
        // If 'npm run build' succeeded, then execute 'npm run serve'
        const serveCommand = 'npm run serve -- --port 25562 --host 0.0.0.0';
        const serveProcess = exec(serveCommand);

        // Log the stdout data as it comes in for 'npm run serve'
        serveProcess.stdout.on('data', (data) => {
            console.log(`stdout (serve): ${data}`);
        });

        // Log the stderr data as it comes in for 'npm run serve'
        serveProcess.stderr.on('data', (data) => {
            console.error(`stderr (serve): ${data}`);
        });

        // Handle the 'npm run serve' process exiting
        serveProcess.on('close', (serveCode) => {
            console.log(`'npm run serve' process exited with code ${serveCode}`);
        });

        // Handle any errors that occur while running 'npm run serve'
        serveProcess.on('error', (error) => {
            console.error(`Error running 'npm run serve': ${error.message}`);
        });
    } else {
        console.error("'npm run build' process exited with an error");
    }
});

// Handle any errors that occur while running 'npm run build'
buildProcess.on('error', (error) => {
    console.error(`Error running 'npm run build': ${error.message}`);
});
