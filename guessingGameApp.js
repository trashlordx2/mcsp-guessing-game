let hallOfFame= {
};


function play(){
    let userName = prompt('What can I call you?');
    let numGuesses = 0;
    let returnGuesses = [];
    var answer = Math.floor(Math.random() * 10 ) + 1;
    while(true){
    var guess = prompt("Guess a number as close to the number I have in mind...");
    numGuesses++;
    if(answer === null){ alert("Goodbye!"); break;}
    if (guess > answer){returnGuesses.push(guess); alert('Lower.');}
    else if (guess < answer){returnGuesses.push(guess);alert('Higher.');}
    else if (guess == answer){
        //first attempt
        if(hallOfFame[userName] === undefined){
            alert(`Correct! It took you ${numGuesses} tries.`)
        } else {
            //running it back
            let prevAttempts = hallOfFame[userName];
            let difference = prevAttempts - numGuesses;
            if(difference > 0){
                alert(`That's correct! ${userName}! You beat your old score by ${Math.abs(difference)}.`);
            } else if (difference < 0){
                alert(`Your last score was ${Math.abs(difference)} lower.`)
            } else {
                alert(`You made the same score as your last attempt!`)
            }
        }
        hallOfFame[userName] = numGuesses;
        returnGuesses.push(guess);
        alert(`Good job ${userName}! You tried ${returnGuesses}.`);
        let playAgain = confirm("Would you like to play again?");
        if(playAgain == true){
            play();
        } else {
            return false;
        }
        break;
    }
  }
}


play();