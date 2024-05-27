(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu-hamburguesa');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{


                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu__item--active');


                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });
        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }

        });
    }


    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('menu__links--show'))
                list.classList.remove('menu__links--show');

        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));



})();
/* document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000); // Cambia la imagen cada 5 segundos
    }

    document.querySelector('.prev').addEventListener('click', function () {
        slideIndex -= 2;
        if (slideIndex < 0) {
            slideIndex = document.getElementsByClassName("slide").length - 1;
        }
        showSlides();
    });

    document.querySelector('.next').addEventListener('click', function () {
        showSlides();
    });
});
 */
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let isTransitioning = false;

function showSlide(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    if (index >= slides.length) {
        currentIndex = 0;
        document.querySelector('.slider').style.transition = 'none';
        document.querySelector('.slider').style.transform = `translateX(0%)`;
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                document.querySelector('.slider').style.transition = 'transform 0.5s ease-in-out';
                currentIndex = 1;
                document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
            });
        });
    } else if (index < 0) {
        currentIndex = slides.length - 1;
        document.querySelector('.slider').style.transition = 'none';
        document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                document.querySelector('.slider').style.transition = 'transform 0.5s ease-in-out';
                currentIndex = slides.length - 2;
                document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
            });
        });
    } else {
        currentIndex = index;
        document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex % dots.length].classList.add('active');

    setTimeout(() => {
        isTransitioning = false;
    }, 500);
}

function changeSlide(step) {
    showSlide(currentIndex + step);
}

function currentSlide(index) {
    showSlide(index);
}

showSlide(currentIndex);

// Auto slide
setInterval(() => {
    changeSlide(1);
}, 5000);
