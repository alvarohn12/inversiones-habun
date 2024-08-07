/* let currentIndex = 0;
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
} */
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

    function changeSlide(n) {
        showSlide(currentIndex += n);
    }

    function currentSlide(n) {
        showSlide(currentIndex = n);
    }

    showSlide(currentIndex);

    // Variables para manejar el desplazamiento táctil
    let startX;
    let isDragging = false;
    const slider = document.getElementById('slider');

    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        clearInterval(autoSlideInterval); // Detener el deslizamiento automático mientras se arrastra
    });

    slider.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const x = e.touches[0].clientX;
        const walk = x - startX;
        slider.style.transform = `translateX(${walk}px)`;
    });

    slider.addEventListener('touchend', (e) => {
        isDragging = false;
        const movedBy = startX - e.changedTouches[0].clientX;
        if (movedBy > 50) {
            changeSlide(1);
        } else if (movedBy < -50) {
            changeSlide(-1);
        } else {
            showSlide(currentIndex);
        }
        autoSlideInterval = setInterval(() => changeSlide(1), 3000); // Reiniciar el deslizamiento automático
    });

    // Deslizamiento automático
    let autoSlideInterval = setInterval(() => changeSlide(1), 3000);

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
}, 10000);
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
    let tiempoAlerta=20000;

    setTimeout(() =>{
        alerta.style.display='block';
    },tiempoAlerta);

    /* para cerrar el boton */
    alertaCerrar.addEventListener('click', ()=> {
        alerta.style.display='none';
    })
})
