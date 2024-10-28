const hamburguer = document.querySelector(".hamburger");
const div = document.querySelector(".container")
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click",() =>
nav.classList.toggle("active") );

hamburguer.addEventListener('click',function(){
  if(div.style.display==='none'){
    div.style.display='block';
  } else{
    div.style.display='none';
  }
})

