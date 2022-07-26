let Counter=document.getElementById("span");
let ColorPre=Counter.style.color;
const Btns=document.querySelectorAll(".btn");


Btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        let value=parseInt(Counter.textContent);
        if(e.currentTarget.classList.contains("reset"))
        {
            value=0;
        }
        else if(e.currentTarget.classList.contains("increase"))
        {
            value+=1;
        }
        else if(e.currentTarget.classList.contains("decrease"))
        {
            value-=1;
        }

        if(value>0)
        {
            Counter.style.color="green";
        }
        else if(value==0)
        {
            Counter.style.color=ColorPre;
        }
        else if(value<0)
        {
            Counter.style.color="red";
        }
        Counter.textContent=value.toString();
    });
}
);

