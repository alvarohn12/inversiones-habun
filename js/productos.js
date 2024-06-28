document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById('slider__producto');
    const slides = slider.querySelectorAll('.producto__slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const indicators = document.getElementById('indicators').querySelectorAll('.indicator');

    let currentSlide = 0;
    const totalSlides = slides.length;

    let startX = 0;
    let endX = 0;

    function updateSlider(transition = true) {
        if (transition) {
            slider.style.transition = 'transform 0.5s ease-in-out';
        } else {
            slider.style.transition = 'none';
        }
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;

        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    function moveToNextSlide() {
        if (currentSlide === totalSlides - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        updateSlider();
    }

    function moveToPrevSlide() {
        if (currentSlide === 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide--;
        }
        updateSlider();
    }

    prevButton.addEventListener('click', function() {
        moveToPrevSlide();
    });

    nextButton.addEventListener('click', function() {
        moveToNextSlide();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentSlide = index;
            updateSlider();
        });
    });

    slider.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchmove', function(e) {
        endX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', function() {
        if (startX > endX + 50) {
            moveToNextSlide();
        } else if (startX < endX - 50) {
            moveToPrevSlide();
        }
    });

    updateSlider();
});
/* 
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById('slider__producto');
    const slides = slider.querySelectorAll('.producto__slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const indicators = document.getElementById('indicators').querySelectorAll('.indicator');

    let currentSlide = 0;
    const totalSlides = slides.length;

    let startX = 0;
    let endX = 0;

    function updateSlider(transition = true) {
        if (transition) {
            slider.style.transition = 'transform 0.5s ease-in-out';
        } else {
            slider.style.transition = 'none';
        }
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;

        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    function moveToNextSlide() {
        if (currentSlide === totalSlides - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        updateSlider();
    }

    function moveToPrevSlide() {
        if (currentSlide === 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide--;
        }
        updateSlider();
    }

    prevButton.addEventListener('click', function() {
        moveToPrevSlide();
    });

    nextButton.addEventListener('click', function() {
        moveToNextSlide();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentSlide = index;
            updateSlider();
        });
    });

    slider.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchmove', function(e) {
        endX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', function() {
        if (startX > endX + 50) {
            moveToNextSlide();
        } else if (startX < endX - 50) {
            moveToPrevSlide();
        }
    });

    updateSlider();
});

*/
