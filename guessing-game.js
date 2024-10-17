console.log('Here we go!!');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askGuess() {
    rl.question('Enter a guess:', (answer) => {
        const guess = Number(answer);
        const correct = checkGuess(guess);
        if (correct) {
            console.log('You Win!!');
            rl.close();
        } else {
            askGuess();
        }
        
    }); 
}


let secretNumber = 7;

function checkGuess(guess) {
    if (guess > secretNumber) {
        console.log('Too HIGH !');
        return false;
    } else if (guess < secretNumber) {
        console.log('Too LOW!');
        return false;
    } else {
        console.log('**CORRECT**');
        return true;
    }
}
askGuess();



