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
        displayCircles();
    }
};

const nextImage = () => {
    if (currentImage < images.length - 1) {
        currentImage++;
        displayImage();
        displayCircles();
    }
};

const displayImage = () => {
    carousselContainer.style.backgroundImage = `url(${images[currentImage]})`;
};

displayImage();
displayCircles();

function displayCircles() {
    let circles = [];
    //Assigning circles to the right images
    for (let i = 0; i < images.length; i++) {
        const buttonContainer = document.createElement('button');
        const circleImage = document.createElement('img');
        (i === currentImage) ? circleImage.src = './images/circle-double.svg' : circleImage.src = './images/circle-outline.svg';
        buttonContainer.appendChild(circleImage);
        circles[i] = buttonContainer;
    }

    circlesContainer.textContent = '';

    //Displaying them
    for (let circle of circles) {
        circlesContainer.appendChild(circle);
    }
}

leftButton.addEventListener('click', previousImage);
rightButton.addEventListener('click', nextImage);