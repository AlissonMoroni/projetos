const ham = document.querySelector(".ham");
const navMenu = document.querySelector(".nav-menu");

ham.addEventListener("click", () =>{
    ham.classList.toggle('active');
    navMenu.classList.toggle('active');
})

window.addEventListener('scroll', () => {
    let scroll = document.querySelector('.scrolltop')
    scroll.classList.toggle('activeScroll', window.scrollY > 450)
})

function backtop(){
window.scrollTo({
    top: 0,
    behavior: 'smooth'
})
}

