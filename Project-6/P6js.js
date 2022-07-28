const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

const img=document.getElementById("person-img");
const Name=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");
const PreBtn=document.querySelector(".prev-btn");
const NextBtn=document.querySelector(".next-btn");
const RandomBtn=document.querySelector(".random-btn");
let counter=0;

const ShowingPerson=()=>{
  img.src=reviews[counter].img;
  Name.textContent=reviews[counter].name;
  job.textContent=reviews[counter].job;
  info.textContent=reviews[counter].text;
}

const Next=()=>{
  if(counter<reviews.length)
  {
     counter++;
  }
  else 
  {
    counter=0;
  }
  ShowingPerson();
}
const Pre=()=>{
  if(counter>=0)
  {
     counter--;
  }
  else 
  {
    counter=reviews.length-1;
  }
  ShowingPerson();
}
const RandomPicker=()=>{
  counter=Math.floor(Math.random()*reviews.length);
   ShowingPerson();
}



window.addEventListener("DOMContentLoaded",ShowingPerson);


NextBtn.addEventListener("click",Next);
PreBtn.addEventListener("click",Pre);
RandomBtn.addEventListener("click",RandomPicker);





