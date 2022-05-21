let LoadText=document.querySelector('.loading-Text');
let BG=document.querySelector('.bg');
let Load=1;

let init=setInterval(BlurController,50);


function BlurController()
{
    if(Load>99)
    {
        clearInterval(init);
    }

    LoadText.innerText=`${Load}%`;
    LoadText.style.opacity=scale(Load,0,100,1,0);
    BG.style.filter=`blur(${scale(Load,0,100,30,0)}px)`;
    Load++;
}


const scale=(num,in_min,in_max,Out_min,Out_max)=>{return ((num-in_min)*(Out_max-Out_min))/(in_max-in_min)+Out_min;};






