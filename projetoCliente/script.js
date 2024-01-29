
const myObsever = new IntersectionObserver((entries) =>{
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
            console.log(entry)
        } else {
            entry.target.classList.remove('hidden')
        }

    })
}, )

const elements = document.querySelectorAll('.hidden');

elements.forEach( (element) => myObsever.observe(element))


function insta(){
    window.location.href = "#";
}
document.getElementById("insta").addEventListener("click", insta);