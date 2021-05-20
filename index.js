const fire= document.querySelector(".ham");
const water= document.querySelector(".lists");

fire.addEventListener('click',() => {
   fire.classList.toggle('hot');
   water.classList.toggle('hot');
})
