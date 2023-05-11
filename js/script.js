
const menu = `WELCOME TO ROCK 🪨 PAPPER 📜 SCISSORS ✂️ !
Rules of The Game:
1. Game lasts 5 rounds.
2. Each round got three items to pick: 🪨 Rock 📜 Paper ✂️ Scissors
3. Rock beats/breaks scissors! 🔨
4. Scissors beat/cut paper! 🪓
5. Paper beats/covers rock! 😶‍🌫️
6. If you win one round you will gain 1 point! 💯
That's it! Let's play! 🤹🏻`;

const getInputMessage = "Enter your choice! \nRock, Paper or Scissors?";

const inputEmpty = `Opps! YOU DIDN'T WRITE YOUR CHOICE. 😶
You should write one of the following words in the box below before pressing OK button:
"Rock", "paper" or "scissors"
Now try again! Rock, Paper or Scissors?
(If you want to exit please write "c"! 🏃🏻‍♀️)`;

const inputMismatch = `Opps! Guess something went wrong. 🥲
Your input should include one of the following words only:
"Rock", "paper" or "scissors"
Now try again! Rock, Paper or Scissors?
(If you want to exit please write "c"! 🏃🏻‍♀️)`

const userCanceled = `Did you pressed Cancel by mistake? 👀
Let's continue!
(If you want to exit please write "c"! 🏃🏻‍♀️)`;

const bye = `Guess you don't want to play? 🥹
See you next time! 🙋🏻‍♀️
(To restart the game please reload the page 🔄️)`;

let userScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice;
}

function userPlay(userChoice) {
    userChoice = prompt(getInputMessage);
    do {
        try {
            userChoice = ignoreCasingAndSpaces(userChoice);
        } catch (error) {

        }
        userChoice = inputControl(userChoice);
        // controlling if user wants to exit:
        if (userChoice === "c" || userChoice === "C") {
            break;
        }
    } while (!choices.includes(userChoice))
    return userChoice;
}

function ignoreCasingAndSpaces(userChoice) {
    userChoice = userChoice.toLowerCase().trim();
    return userChoice;
}

function inputControl(userChoice) {
    if (userChoice === null) {
        userChoice = nullControl(userChoice)
    } else if (userChoice === "") {
        userChoice = emptyControl(userChoice);
    } else if (!choices.includes(userChoice) &&
        userChoice !== "c" && userChoice !== "C") {
        userChoice = mismatchControl(userChoice);
    }
    return userChoice;
}

function nullControl(userChoice) {
    while (userChoice === null) {
        userChoice = prompt(userCanceled);
    }
    return userChoice;
}

function emptyControl(userChoice) {
    while (userChoice === "") {
        userChoice = prompt(inputEmpty)
    }
    return userChoice;
}

function mismatchControl(userChoice) {
    while (!choices.includes(userChoice.toLowerCase().trim()) &&
        userChoice !== "c" && userChoice !== "C"
        && userChoice !== null && userChoice !== "") {
        userChoice = prompt(inputMismatch);
    }
    return userChoice;
}



function playRound(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        console.log("It's a tie");
    } else if ((userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")) {
        console.log("You win the round! " + userChoice + " beats " + computerChoice);
        userScore++;
    } else if ((userChoice === "scissors" && computerChoice === "rock") ||
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors")) {
        console.log("You lose the round... " + computerChoice + " beats " + userChoice);
        computerScore++;
    }
}

function gameResult(userScore, computerScore) {
    let finalResult = "Your Score: " + userScore +
        " <---> " +
        "Opponent Score: " + computerScore;
    if (userScore === computerScore) {
        console.log("GAME OVER\nIts' a tie!");
        console.log(finalResult)
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

function game() {
    let userChoice = "";
    let computerChoice = "";
    alert(menu);
    for (let i = 0; i < 5; i++) {
        userChoice = userPlay(userChoice);
        // controlling if user wants to exit:
        if (userChoice === "c" || userChoice === "C") {
            alert(bye);
            console.log("Bye :) Come again!")
            break;
        }
        if (choices.includes(userChoice)) {
            computerChoice = computerPlay();
            console.log("==ROUND " + (i + 1) + "==");
            console.log("You: " + userChoice)
            console.log("Opponent: " + computerChoice);
            playRound(userChoice, computerChoice);
        }
    }
    if (choices.includes(userChoice)) {
        gameResult(userScore, computerScore);
    }

}

game();