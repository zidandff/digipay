const btnAccordions = document.querySelectorAll('.accordion-button');
const imgScreen = document.querySelector('.fitur-screen');
btnAccordions.forEach(btn => {
    btn.addEventListener('click', ()=> {
        // change active accordion color 
        btnAccordions.forEach(btn => btn.parentElement.parentElement.classList.remove('active'))
        const accordionItems = btn.parentElement.parentElement;
        if(!btn.classList.contains('collapsed')){
            accordionItems.classList.add('active');
        }

    })
})

btnAccordions.forEach(btn => {
    btn.addEventListener('click', ()=> {
        if(btn.classList.contains('collapsed')){
            return
        }
        imgScreen.src = btn.getAttribute('data-screen');
        imgScreen.classList.add("animate");
        setTimeout(() => {
            imgScreen.classList.remove("animate");
        }, 500);
    })
})

new Splide( '.splide', {
    autoplay: true,
    type: "loop",
    interval: 4000,
    arrows: false,
    gap: "10em",
} ).mount();

AOS.init({
    offset: 200,
    duration:700
});

var scene = document.querySelector('.scene');
var parallaxInstance = new Parallax(scene);