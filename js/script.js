
const menu = `WELCOME TO ROCK 🪨 PAPPER 📜 SCISSORS ✂️ !
Rules of The Game:
1. Game lasts 5 rounds.
2. Each round got three items to pick: 🪨 Rock 📜 Paper ✂️ Scissors
3. Rock beats/breaks scissors! 🔨
4. Scissors beat/cut paper! 🪓
5. Paper beats/covers rock! 😶‍🌫️
6. If you win one round you will gain 1 point! 💯
That's it! Let's play! 🤹🏻`;


const inputNull = `Opps! You didn't wrote your choice. 😶
You should write one of the following words:
"Rock", "paper" or "scissors"
Now try again! Rock, Paper or Scissors?
(Or press Cancel to exit 🔄️)`;

const inputMismatch = `Opps! Guess something went wrong. 🥲
You should write one of the following words:
"Rock", "paper" or "scissors"
Now try again! Rock, Paper or Scissors?
(Or press Cancel to exit 🏃🏻‍♀️)`

const bye = `Guess you don't want to play? 🥹
See you next time! 🙋🏻‍♀️
(To restart the game please reload the page 🔄️)`

function control(userChoice) {
    const choices = ["rock", "paper", "scissors"]
    try {
        if (!choices.includes(userChoice.toLowerCase())) {
            if (userChoice === "") {
                userChoice = prompt(inputNull);
                if (choices.includes(userChoice.toLowerCase())) {
                    return userChoice;
                } else {
                    userChoice = "";
                    alert(bye);
                    console.log("Bye :) Come again!")
                }
            } else if (userChoice === null) {
                userChoice = "";
            } else {
                userChoice = prompt(inputMismatch);
                try {
                    if (choices.includes(userChoice.toLowerCase())) {
                        return userChoice;
                    } else {
                        userChoice = "";
                        alert(bye);
                        console.log("Bye :) Come again!")
                    }
                } catch (error) {
                    userChoice = "";
                    alert(bye);
                    console.log("Bye :) Come again!")
                }
            }
        }

    } catch (error) {
        alert(bye);
        console.log("Bye :) Come again!")
        userChoice = "";
    }
    
    return userChoice;
}

function computerPlay() {
    const choices = ["rock", "paper", "scissors"]
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice;
}

function playRound(userChoice, computerChoice) {
    if (userChoice !== "") {
        if (userChoice.toLowerCase() == computerChoice) {
            return "It's a tie";
        } else if ((userChoice.toLowerCase() === "rock" && computerChoice === "scissors") || (userChoice.toLowerCase() === "paper" && computerChoice === "rock") || (userChoice.toLowerCase() === "scissors" && computerChoice === "paper")) {
            return "You win the round! " + userChoice.toLowerCase() + " beats " + computerChoice;
        } else if ((userChoice.toLowerCase() === "scissors" && computerChoice === "rock") || (userChoice.toLowerCase() === "rock" && computerChoice === "paper") || (userChoice.toLowerCase() === "paper" && computerChoice === "scissors")) {
            return "You lose the round... " + computerChoice + " beats " + userChoice.toLowerCase();
        }
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    let roundResult;
    let userChoice;
    for (let i = 0; i < 5; i++) {
        const userInput = prompt("Enter your choice! \nRock, Paper or Scissors?");
        userChoice = control(userInput);
        if (userChoice === "") {
            break;
        }
        let computerChoice = computerPlay();
        console.log("==ROUND " + (i + 1) + "==");
        roundResult = playRound(userChoice, computerChoice);
        console.log("You: " + userChoice);
        console.log("Opponent: " + computerChoice);
        console.log(roundResult);
        if (roundResult.includes("win")) {
            userScore++;
        } else if (roundResult.includes("lose")) {
            computerScore++;
        }
    }

    if (userChoice !== "") {

        if (userScore === computerScore) {
            console.log("GAME OVER\nIt'a tie!");
            console.log("Your Score: " + userScore + " <---> " + "Opponent Score: " + computerScore)
        } else if (userScore > computerScore) {
            console.log("GAME OVER\nYOU WIN!");
            console.log("Your Score: " + userScore + " <---> " + "Opponent Score: " + computerScore)
        } else {
            console.log("GAME OVER\nYou lose...");
            console.log("Your Score: " + userScore + " <---> " + "Opponent Score: " + computerScore)
        }
    }

}

alert(menu);
game();

