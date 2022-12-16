const playerText = document.querySelector("#jucatorText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#rezultatText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "PIATRĂ";
        break;
      case 2:
        computer = "HÂRTIE";
        break;
      case 3:
        computer = "FOARFECĂ";
        break;
    }
}
function checkWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "PIATRĂ"){
      return (player == "HÂRTIE") ? "You Win!" : "You Lose!"
    }
    else if(computer == "HÂRTIE"){
      return (player == "FOARFECĂ") ? "You Win!" : "You Lose!"
    }
    else if(computer == "FOARFECĂ"){
      return (player == "PIATRĂ") ? "You Win!" : "You Lose!"
    }
}
console.log(checkWinner);
