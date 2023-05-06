
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

const userCanceled = `Did you pressed Cancel by mistake? 👀
Let's continue!
(If you want to exit press Cancel again!)`;

const bye = `Guess you don't want to play? 🥹
See you next time! 🙋🏻‍♀️
(To restart the game please reload the page 🔄️)`


function control(userChoice) {
    const choices = ["rock", "paper", "scissors"]
    try {
        if (!choices.includes(userChoice.toLowerCase().trim())) {
            if (userChoice === "") {
                userChoice = prompt(inputNull);
                if (choices.includes(userChoice.toLowerCase().trim())) {
                    return userChoice;
                } else {
                    userChoice = "";
                    alert(bye);
                    console.log("Bye :) Come again!")
                }
            } else if (userChoice === null) {
                userChoice = prompt(userCanceled)
                if (userChoice === null) {
                    userChoice = "";
                    alert(bye);
                    console.log("Bye :) Come again!")
                }
            } else {
                userChoice = prompt(inputMismatch);
                try {
                    if (choices.includes(userChoice.toLowerCase().trim())) {
                        return userChoice;
                    } else {
                        userChoice = "";
                        alert(bye);
                        console.log("Bye :) Come again!")
                    }
                } catch (error) {
                    userChoice = prompt(userCanceled)
                    if (userChoice === null) {
                        userChoice = "";
                        alert(bye);
                        console.log("Bye :) Come again!")
                    }
                }
            }
        }

    } catch (error) {
        userChoice = prompt(userCanceled)
        if (userChoice === null) {
            userChoice = "";
            alert(bye);
            console.log("Bye :) Come again!")
        }
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
        if (userChoice.toLowerCase().trim() == computerChoice) {
            return "It's a tie";
        } else if ((userChoice.toLowerCase().trim() === "rock" && computerChoice === "scissors") || (userChoice.toLowerCase().trim() === "paper" && computerChoice === "rock") || (userChoice.toLowerCase().trim() === "scissors" && computerChoice === "paper")) {
            return "You win the round! " + userChoice.toLowerCase().trim() + " beats " + computerChoice;
        } else if ((userChoice.toLowerCase().trim() === "scissors" && computerChoice === "rock") || (userChoice.toLowerCase().trim() === "rock" && computerChoice === "paper") || (userChoice.toLowerCase().trim() === "paper" && computerChoice === "scissors")) {
            return "You lose the round... " + computerChoice + " beats " + userChoice.toLowerCase().trim();
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
        let finalResult = "Your Score: " + userScore + " <---> " + "Opponent Score: " + computerScore;

        if (userScore === computerScore) {
            console.log("GAME OVER\nIts' a tie!");
            console.log(finalResult)
                ("GAME OVER\nIts' a tie!" + finalResult)
        } else if (userScore > computerScore) {
            console.log("GAME OVER\nYOU WIN!");
            console.log(finalResult)
            alert("GAME OVER\nYOU WIN!" + finalResult)
        } else {
            console.log("GAME OVER\nYou lose...");
            console.log(finalResult)
            alert("GAME OVER\nYou lose..." + finalResult)
        }
    }

}

alert(menu);
game();

