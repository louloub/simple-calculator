let playerNumber = 0;
let randomNumber = 0;
let name = "";

askName();
askPlayerNumber();
createRandomNumber();
consoleStartInformation();  
// loopsForWins();
loopsForWins2();

function loopsForWins() {
    while (playerNumber != randomNumber) {
        if (playerNumber > randomNumber) {
            console.log("It's less");     
            askPlayerNumber()    
        } else if (playerNumber < randomNumber) {
            console.log("It's more");      
            askPlayerNumber()     
        } else {
            console.log("we have a problem !");           
        }
    } 
    console.log(name+ " wins !!!");           
}

function loopsForWins2() {
    if (playerNumber != randomNumber) {
        if (playerNumber > randomNumber) {
            console.log("It's less");     
            askPlayerNumber()  
            loopsForWins2()  
        } else if (playerNumber < randomNumber) {
            console.log("It's more");      
            askPlayerNumber()  
            loopsForWins2()   
        } else {
            console.log("we have a problem !");           
        }
    } else {
        console.log(name+ " wins !!!");            
    }
}

function askPlayerNumber(){
    playerNumber = prompt('Enter your number between 1 and 100 :');
}

function createRandomNumber(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

function askName(){
    name = prompt('Enter your name :');
}

function consoleStartInformation() {
    console.log("random = " + randomNumber);
    console.log("playerNumber = " + playerNumber);
}           