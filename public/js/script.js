const hamburger=document.querySelector('.hamburger')
const navbar=document.querySelector('nav')
hamburger.addEventListener("click",function(e) {
  navbar.classList.toggle('open')
  hamburger.classList.toggle('actived')
} )