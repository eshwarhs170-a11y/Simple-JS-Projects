console.log("lets go");
let secretnumber=Math.floor(Math.random()*20)+1;
let score=20;
let highscore=0;
console.log(secretnumber)


const a=document.querySelector("#num")
a.addEventListener(".value",function(){
    console.log(a.value)
})


let b=document.querySelector("#check-btn")
b.addEventListener("click",function(){
    if(!a.value){
        document.querySelector("#guess").textContent="No number!"
    }
else if(Number(a.value)===secretnumber){
        document.querySelector("#guess").textContent="you won!!"
        document.querySelector("#secret-box").textContent=secretnumber;
        document.querySelector("#check-btn").disabled=true;
        if(score>highscore){
            highscore=score;
           document.querySelector("#highscore").textContent= highscore;
        }
        
    }
    else if(Number(a.value)>secretnumber){
    //  score--;
        document.querySelector("#guess").textContent="too high!"
        if(score>1){
            score--;
            document.querySelector("#score").textContent=score
        }
        else{
            document.querySelector("#score").textContent="You lost the game!."
        }
        
        
    }
    else if(Number(a.value)<secretnumber){
        score--;
        document.querySelector("#guess").textContent="too low!"
        document.querySelector("#score").textContent=score
}
    
})
let c=document.querySelector("#reset-btn")
c.addEventListener("click",function(){
secretnumber=Math.floor(Math.random()*20+1);
score=20;
document.querySelector("#score").textContent=score;
a.value="";
document.querySelector("#guess").textContent="start guessing!!!..."
 document.querySelector("#secret-box").textContent="?";
  document.querySelector("#check-btn").disabled=false;
})
