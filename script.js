let errorMsg = document.querySelector("#errorMsg");
let errorMsgTwo = document.querySelector("#errorMsgTwo");
let inputOne = document.querySelector("#inputOne");
let inputTwo = document.querySelector("#inputTwo");
let btn = document.querySelector("#btn");
let btnTwo = document.querySelector("#btnTwo");
let fullWrapper = document.querySelector("#fullWrapper");
let winner = document.querySelector("#winner");
let result = document.querySelector("#result");
let playerTwo = document.querySelector("#playerTwo");
let playerOne = document.querySelector("#playerOne");
let snowFall = document.querySelector("#snowFall");
let notMatch = document.querySelector("#notMatch");
let count =0;
btn.addEventListener("click", () => {
  if (!inputOne.value || inputOne.value > 9 || inputOne.value < 0) {
    errorMsg.innerHTML = "Invalid Number.Please Input Number 0 to 9";
  } else {
    errorMsg.innerHTML = "";
    fullWrapper.classList.add("flip");
  }
});

btnTwo.addEventListener("click", () => {
  if (!inputTwo.value || inputTwo.value > 9 || inputTwo.value < 0) {
    errorMsgTwo.innerHTML = "Invalid Number.Please Input Number 0 to 9";
  } else {
    count++
    console.log(count);
    if(count<5 && inputOne.value != inputTwo.value){
      notMatch.innerHTML = `Incorrect! Try Again. You have ${5-count} remaining `
    }
    else if(count==5 && inputOne.value != inputTwo.value){
    playerOne.style.display = "none";
    playerTwo.style.display = "none";
    winner.style.transform = "rotateY(180deg)";
    winner.style.display = "block";
    result.innerHTML = "PLAYER - 1";
    }
    
    else if(inputOne.value == inputTwo.value) {
    playerOne.style.display = "none";
    playerTwo.style.display = "none";
    winner.style.transform = "rotateY(180deg)";
    winner.style.display = "block";
    result.innerHTML = "PLAYER - 2";
    }
  }
});

