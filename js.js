// hamburger menu
const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.getElementById('main-nav');

// Slider
const carousel_tracker = document.querySelector('.carousel-tracker');
const carousel_slides = Array.from(carousel_tracker.children);
const right_Btn_Carousel = document.querySelector('.carouselButton-right');
const left_Btn_Carousel = document.querySelector('.carouselButton-left');
const slideWidth = carousel_slides[0].getBoundingClientRect().width;

// modal Benefits
const modal = document.getElementById('benefits-modal');
const headerBtn = document.getElementById('mainBtn');
const closeModalBtn = document.getElementById('closeButton');
const closeBtnModal = document.getElementById('closeModal');

// Event Listeners
headerBtn.addEventListener('click', openModal );
closeModalBtn.addEventListener('click', closeModal );
menuIcon.addEventListener('click', useHamburgerMenu);

// Modal Buttons
function openModal(){
    modal.style.display = 'block';
}
function closeModal(){
    modal.style.display = 'none';
}

// Open Hamburger menu
function useHamburgerMenu() {
    navbar.classList.toggle('change');
}

// arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

carousel_slides.forEach(setSlidePosition);

const moveToSlide = (carousel_tracker, currentSlide, targetSlide) => {
    carousel_tracker.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('currentSlide');
    targetSlide.classList.add('currentSlide');
}

// When I click Left, move slides to the left

left_Btn_Carousel.addEventListener('click', e => {
    const currentSlide = carousel_tracker.querySelector('.currentSlide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(carousel_tracker, currentSlide, prevSlide);
});

// When I click Right, move slides to right
right_Btn_Carousel.addEventListener('click', e => {
    const currentSlide = carousel_tracker.querySelector('.currentSlide');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(carousel_tracker, currentSlide, nextSlide);
});


// hamburger menu










