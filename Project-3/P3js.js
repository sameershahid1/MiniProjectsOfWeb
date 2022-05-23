const TagsEl=document.getElementById('tags');
const TextArea=document.getElementById('textarea');

TextArea.focus();

TextArea.addEventListener('keyup',(e)=>{
    createTags(e.target.value);
    if(e.key=='Enter')
    {
        setTimeout(()=>{e.target.value;},10);
        randomSelect();
    }
});

function createTags(input)
{
  const tags=input.split(',').filter((tag)=>tag.trim()!=='').map((tag)=>tag.trim());
  console.log(tags);
  
  TagsEl.innerHTML='';
  tags.forEach((tag)=>
  {
  const tagEl=document.createElement('span');
  tagEl.classList.add('tag');
  tagEl.innerText=tag;
  TagsEl.appendChild(tagEl);
  });
}

function randomSelect()
{
    const times=30;
    const interval=setInterval(()=>
    {
        const randomTag=PickRandomTag();
        HighLightTag(randomTag);
        setTimeout(()=>{UNHighLightTag(randomTag);},100);
    },100);

    setTimeout(()=>
    {
       clearInterval(interval);
       setTimeout(()=>
       {
        const randomTag=PickRandomTag();
       HighLightTag(randomTag);
       },100);
    },times*100);

}

function PickRandomTag()
{
    const tags=document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random()*tags.length)];
}

function HighLightTag(tag)
{
    tag.classList.add('highlight');
}

function UNHighLightTag(tag)
{
    tag.classList.remove('highlight');
}


