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

btn.addEventListener("click", ()=>{
    if(!inputOne.value){
        errorMsg.innerHTML ="You do not enter any number.Please Input a number "
    }
    if(inputOne.value>9 ||inputOne.value<0){
        errorMsg.innerHTML ="Invalid Number.Please Input Number 0 to 9"
    }
    else{
        errorMsg.innerHTML ="";
        console.log(inputOne.value);
        fullWrapper.classList.add("flip");
    }
})

btnTwo.addEventListener("click", ()=>{
    
    if(!inputTwo.value){
        errorMsgTwo.innerHTML ="You do not enter any number.Please Input a number "
    }
    if(inputTwo.value>9 ||inputTwo.value<0){
        errorMsgTwo.innerHTML ="Invalid Number.Please Input Number 0 to 9"
    }
    else{
        playerOne.style.display = "none"; 
        playerTwo.style.display = "none";
        winner.style.transform = "rotateY(180deg)"
        winner.style.display = "block";
        if(inputOne.value == inputTwo.value){
            
            result.innerHTML="PLAYER - 2"
        }
        else{ 
            result.innerHTML="PLAYER - 1"
        }

    }
})

