let phno=document.querySelector("#phno");
let msg=document.querySelector("#msg");
let btn=document.querySelector("#btn");

btn.addEventListener("click",(e)=>{
    console.log(phno.value.length);
    
    if(phno.value.length!=10){
        msg.innerText="enter correct mobile number";
        alert("enter correct mobile number");
        
    }
})

phno.addEventListener("keyup",()=>{
    if(phno.value.length!=10){
        msg.innerText="enter correct mobile number";
        
    }
    else{
        msg.innerText="";
    }
})