const minNum =1;
const maxNUm = 100;
const answer = Math.floor(Math.random() * (maxNUm - minNum +1)) + minNum;

let attempts = 0;
let guess;
let running = true;


while(running){
     guess = window.prompt(`Guess a number between ${minNum} - ${maxNUm}`);
     guess = Number(guess);


     if(isNaN(guess)){
        window.alert("please enter a valid number");
     }
     else if(guess< minNum || guess> maxNUm){
        window.alert("please enter a valid number");
     }

     else{
        attempts++;
        if( guess< answer){
            window.alert(" Too low! Try again!") ;                    
        }
        else if( guess> answer){
            window.alert("Too high! Try again!");

        }
        else{
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false
        }

     }
    



}