console.log('hello');
// document.querySelector('button')
// document.getElementById(zero)
let count=0;
let a=document.querySelector("#zero")
// a.addEventListener("click",function(){
// a.innerHTML=count++;
// })
console.log(a)
let b=document.querySelector(".Increase") 
b.addEventListener("click",function(){
    a.innerHTML=++count
})
let c=document.querySelector(".Decrease") 
c.addEventListener("click",function(){
    if(count>0){
        a.innerHTML= --count;
    }
    else{
        a.innerHTML=count;
    }
})