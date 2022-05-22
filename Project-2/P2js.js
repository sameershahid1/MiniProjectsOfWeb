const SliderContainer=document.querySelector(".slider-container");
const RightSlide=document.querySelector(".right-slide");

const LeftSlide=document.querySelector(".left-slide");
const UpButton=document.querySelector(".up-button");

const DownButton=document.querySelector(".down-button");
const SlidesLength=RightSlide.querySelectorAll("div").length;


let activeSlideIndex=0;
LeftSlide.style.top=`-${(SlidesLength-1)*0}vh`;
UpButton.addEventListener('click',()=>ChangeSlide('UP'));
DownButton.addEventListener('click',()=>ChangeSlide('DOWN'));

const ChangeSlide=(Direction)=>{
    const SliderHeight=SliderContainer.clientHeight;
    if(Direction==='UP')
    {
        activeSlideIndex++
        if(activeSlideIndex>SlidesLength-1)
        {
            activeSlideIndex=0;
        }
    }
    RightSlide.style.transform=`translateY(-${activeSlideIndex*SliderHeight}px)`;
}