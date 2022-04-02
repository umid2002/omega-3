const hamburgerElement = document.querySelector('.hamburger__btn')
let menuOpen = false
const navLiElement = document.querySelector('.nav__list')

hamburgerElement.addEventListener('click', ()=>{
    navLiElement.classList.toggle('show')
    if(!menuOpen){
        hamburgerElement.classList.add('open')
        menuOpen = true
    }else{
        hamburgerElement.classList.remove('open')
        menuOpen = false
    }
})



 

