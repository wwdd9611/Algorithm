const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line]
}).on('close', function () {

    input.forEach((i) => {
        if(i%2 === 0){
            console.log (`${i} is even`)
        }else{
            console.log (`${i} is odd`)
        }
    })

});