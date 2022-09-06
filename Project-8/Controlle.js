const Image=document.getElementById('image');
const Images=["./images/bg-mobile.svg",
               "./images/bg-desktop.svg"
              ];

const ImageChanger=()=>{
  if(window.innerWidth>=1200)
  {
    Image.src=Images[1];
  }
  else 
  {
    Image.src=Images[0];
  }    
}

ImageChanger();

window.addEventListener('resize',()=>{
    ImageChanger();
});

