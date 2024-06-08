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
/* filtrado */
// slider de cards
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider__card');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0;
    const cardWidth = 220; // Ancho de la tarjeta + margen
    const maxIndex = document.querySelectorAll('.card__producto').length - 1;

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    });

    function updateSlider() {
        slider.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
        updateButtons();
    }

    function updateButtons() {
        if (currentIndex === 0) {
            prevButton.classList.add('hidden');
        } else {
            prevButton.classList.remove('hidden');
        }

        if (currentIndex === maxIndex) {
            nextButton.classList.add('hidden');
        } else {
            nextButton.classList.remove('hidden');
        }
    }

    // Inicializa la visibilidad de los botones al cargar la página
    updateButtons();
});
document.addEventListener('DOMContentLoaded', ()=>{
    let alerta = document.getElementById('alerta');
    let alertaCerrar = document.querySelector('.alerta__close');
    
    /* tiempo para que aparezca la alerta */
    let tiempoAlerta=5000;

    setTimeout(() =>{
        alerta.style.display='block';
    },tiempoAlerta);

    /* para cerrar el boton */
    alertaCerrar.addEventListener('click', ()=> {
        alerta.style.display='none';
    })
})