const SliderContainer=document.querySelector(".slider-container");
const RightSlide=document.querySelector(".right-slide");
const LeftSlide=document.querySelector(".left-slide");
const UpButton=document.querySelector(".up-button");
const DownButton=document.querySelector(".down-button");

const SlidesLength=RightSlide.querySelectorAll("div").length;

LeftSlide.style.top=`-${(SlidesLength-1)*100}vh`;
UpButton.addEventListener('click',()=>ChangeSlide('UP'));
DownButton.addEventListener('click',()=>ChangeSlide('DOWN'));

let activeSlideIndex=0;

const ChangeSlide=(Direction)=>{
    const SliderHeight=SliderContainer.clientHeight;
    if(Direction==='UP')
    {
        activeSlideIndex++
        if(activeSlideIndex>(SlidesLength-1))
        {
            activeSlideIndex=0;
        }
    }
    else if(Direction==="DOWN")
    {
        activeSlideIndex--
        if(activeSlideIndex<0)
        {
            activeSlideIndex=SlidesLength-1;
        } 
    }
    RightSlide.style.transform=`translateY(-${activeSlideIndex*SliderHeight}px)`;
    LeftSlide.style.transform=`translateY(${activeSlideIndex*SliderHeight}px)`;
}