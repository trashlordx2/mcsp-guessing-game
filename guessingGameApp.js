let hallOfFame= {};

let userName = prompt('What can I call you?');

function play(){
    let numGuesses = 0;
    let returnGuesses = [];
    var answer = Math.floor(Math.random() * 10 ) + 1;
    while(true){
    var guess = prompt("Guess a number as close to the number I have in mind...");
    numGuesses++;
    if (guess > answer){
        returnGuesses.push(guess);
        alert('Lower.');
    } else if (guess < answer){
        returnGuesses.push(guess);
        alert('Higher.');
    } else if (guess == answer){
        returnGuesses.push(guess);
        alert('Correct!');
        alert(`Good job ${userName}! It took you ${numGuesses} guesses. You tried ${returnGuesses}.`);
        hallOfFame[userName] = numGuesses;

        alert(hallOfFame.toString);

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