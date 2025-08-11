const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split('')
        for(let i = 0; i < input.length; i++){
        if(input[i] == input[i].toUpperCase()){
            input[i] = input[i].toLowerCase()
        }else{
            input[i] = input[i].toUpperCase()
        }
    }
}).on('close',function(){

    console.log(input.join(''))
});