const hex=["0","1","2","3","4","5","6","8","9","A","B","C","D","E","F"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
const RandomNumberGenerator=()=>(Math.floor(Math.random()*hex.length));


const ColorGenerator=()=>{
 let Hex_Color="#"+hex[RandomNumberGenerator()]+hex[RandomNumberGenerator()]+hex[RandomNumberGenerator()]+hex[RandomNumberGenerator()]+hex[RandomNumberGenerator()]+hex[RandomNumberGenerator()];
 document.body.style.backgroundColor=Hex_Color;
 color.textContent=Hex_Color;
};


btn.addEventListener("click",ColorGenerator);
