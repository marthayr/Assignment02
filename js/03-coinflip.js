let coinFlip = Math.round(Math.random());
console.log(coinFlip);
let choice = prompt('Heads or Tails?');

if(coinFlip < 1){ //if less than 1 the result is heads
    if (choice == 'heads' || choice == 'Heads') {
        alert("The flip was heads and you chose heads...you win!");
    } else if(choice == 'tails') {
        alert("The flip was heads but you chose tails...you lose!");
    }    
}
if(coinFlip > 0){ // if greater than 0 the result is tails
    if(choice == 'tails' || choice == 'Tails'){
        alert("The flip was tails and you chose tails...you win!")
    }
    else if(choice = 'heads'){
        alert("The flip was tails but you chose heads...you lose!")
    }
}