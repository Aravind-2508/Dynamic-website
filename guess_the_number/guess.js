let game_Result = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log("randomNumber");
function checkGuess(){
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber === randomNumber){
        game_Result.textContent = "Congratulations you win";
        game_Result.style.backgroundColor="green";
    }
    else if (guessedNumber > randomNumber){
        game_Result.textContent = "Greater ";
        game_Result.style.backgroundColor="blue";
    }
    else{
        game_Result.textContent = "Lesser ";
        game_Result.style.backgroundColor="blue";
    }
}