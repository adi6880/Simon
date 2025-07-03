let gameseq=[];
let color=["red","blue","yellow","green"];
let userseq=[];
let level=0;
let start=false;
const lev=document.querySelector(".level");

// Computer game command
const startBtn=document.querySelector("button");

startBtn.addEventListener("click", function(){
    if(!start){
        start=true;
        levelup();
        // console.log(start);
    }
})
function gamflash(color){
    
    color.classList.add("flash");
    setTimeout(function (){
        color.classList.remove("flash");
    },300)
}
function levelup(){
    level++;
    lev.innerHTML=`Level ${level}`;
    const randidx=Math.floor(Math.random()*4);
    const randCol=color[randidx]
    const rndBtm=document.querySelector(`#${randCol}`);
    gameseq.push(randCol);
    console.log(randCol);
    userseq=[];
    gamflash(rndBtm);
}
// check user input array and computer array
function check(index){
    if(userseq[index]==gameseq[index]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,500);
        }
    }else{
        lev.innerHTML=`Game Over, Press the Restart buttom`;
        startBtn.innerHTML="Restart";
        restart();
    }
}

// User game command


let allbtn=document.querySelectorAll(".box");
 for(let btn of allbtn){
    btn.addEventListener("click",preeBtn);
 }

 function preeBtn(){
    let btn=this;
    let btnCol=btn.getAttribute("id");
    // console.log(btnCol);
    userseq.push(btnCol);
    // console.log(userseq); //
    check(userseq.length-1);
    userFlash(btn);
 }
 // Flash the box
  function userFlash(color){
    color.classList.add("flash");
    setTimeout(function (){
        color.classList.remove("flash");
    },200)
}
// Restart the game
function restart(){
    // startBtn.addEventListener("click",()=> {
    gameseq=[];
    userseq=[];
    start=false;
    level=0;
    startBtn.innerHTML=`Start`;
    // })
}
