const colors=["green","red","rgba(133,122,200)","#f15025"];
const btn=document.getElementById('btn');
const color=document.querySelector(".color");
const RandomNumberGenerator=()=>(Math.floor(Math.random()*colors.length));

const ColorChanger=()=>{
    const randomNumber=RandomNumberGenerator(); 
    document.body.main
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
};

btn.addEventListener("click",ColorChanger);


