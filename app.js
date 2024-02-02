let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const compScoreId = document.querySelector("#comp-score");
const userScoreId = document.querySelector("#user-score");


const drawGame = ()=>{
    // console.log("Game was draw");
    msg.innerHTML = "Game was draw, Play again!";
    msg.style.backgroundColor = "#081b31";
}

const compWin = (userChoice, compChoice) =>{
    compScore++;
    compScoreId.innerText = compScore;
    // console.log("You lose!")
    msg.innerText = `You lose!, ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "#ca0f0f";
};

const userWin = (userChoice, compChoice) =>{
    userScore++;
    userScoreId.innerText = userScore;
    // console.log("You Win!")
    msg.innerText = `You Win!, Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "rgb(110, 182, 5, 1)";
};

const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random()*3);
    return options[index];
}

const playGame = (userChoice)=>{
    // console.log("user choice =", userChoice);
    // Generate computer choice 
    const compChoice = genCompChoice();
    // console.log("comp choice = ", compChoice);


    if((userChoice === 'rock' && compChoice === 'paper') || (userChoice === 'scissors' && compChoice === 'rock') || (userChoice === 'paper' && compChoice === 'scissors')){
        compWin(userChoice, compChoice);
    }
    else if(userChoice === compChoice){
        //draw
        drawGame();
    }
    else{
        userWin(userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});



