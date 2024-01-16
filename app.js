let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

const userScorePara= document.querySelector("#user-score")
const compScorePara= document.querySelector("#comp-score")




const genCompChoice=() => {
    const options= ["rock", "paper", "scissor"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];

}

const drawGame= () =>{
   
    msg.innerText = "Game Draw! Play Again"
    msg.style.backgroundColor="powderblue"
    msg.style.color="black"
}
const showWinner = (userWin, userChioce, compChoice)=>{
    if(userWin){
        userScore++;

        userScorePara.innerText= userScore
        msg.innerText = `You Win! Your ${userChioce} beats ${compChoice}`;
        msg.style.backgroundColor="green"
        msg.style.color="white"
    }else{
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChioce}`;
        msg.style.backgroundColor="red"
        msg.style.color="white"
    }
}
const playGame=(userChioce) =>{
    // console.log("User's Choice = ", userChioce);
//Computer choice
const compChoice= genCompChoice();
// console.log("Computer Choice = ", compChoice);

if(userChioce===compChoice){
    //Draw
    drawGame();
} else{
    let userWin = true;
    if(userChioce==="rock"){
        userWin = compChoice==="paper" ?false: true;
    } else if(userChioce==="paper"){
        userWin = compChoice==="scissor"? false:true;
    }else{
        userChioce = compChoice==="rock"?false:true
    }
    showWinner(userWin, userChioce, compChoice);
}

};


choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChioce= choice.getAttribute("id");
        playGame(userChioce);

    })
})