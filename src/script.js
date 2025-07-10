const generalContainer = document.querySelector('.general-container');
const carousselContainer = document.querySelector('.caroussel-container');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const circlesContainer = document.querySelector('.circles-container');

images = ['./images/1.png', './images/2.jpg', './images/3.jpg'];
let currentImage = 0;

const previousImage = () => {
    if (currentImage > 0) {
        currentImage--;
        displayImage();
    }
};

const nextImage = () => {
    if (currentImage < images.length - 1) {
        currentImage++;
        displayImage();
    }
};

const displayImage = () => {
    carousselContainer.style.backgroundImage = `url(${images[currentImage]})`;
};

displayImage();

leftButton.addEventListener('click', previousImage);
rightButton.addEventListener('click', nextImage);