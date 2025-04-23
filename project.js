let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScoreNum = document.querySelector("#user-score");
let compScoreNum = document.querySelector("#comp-score");

const drawGame = ()=>{
    console.log("The Game is draw");
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "Yellow";
};


const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const showWinner =(userWin, userChoice, compChoice) => {
    if(userWin){
    userScore++;
    userScoreNum.innerText = userScore;
        msg.innerText= `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }
    else{
        compScore++;
        compScoreNum.innerText = compScore;
        msg.innerText= `You lose ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
};

const playGame = (userChoice)=>{
    const compChoice = genCompChoice();
    console.log("User Choice", userChoice);
    console.log("Comp Choice", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice,);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});