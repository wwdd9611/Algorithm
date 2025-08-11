const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', function (line) {
    if (line.length < 1 || line.length > 1000000) return;
    input = line.trim();
    rl.close();
}).on('close', function () {
    console.log(input);
});
