const Image=document.getElementById('image');
const Images=["./images/image-product-mobile.jpg",
               "./images/image-product-desktop.jpg"
              ];

const ImageChanger=()=>{
  if(window.innerWidth>=768)
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

