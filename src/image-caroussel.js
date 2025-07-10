function displayImageCaroussel(wrapper, images, leftArrow, rightArrow, circleEmpty, circleFull, delay) {
    //Creating containers
    const generalContainer = document.createElement('div');
    generalContainer.classList.add('general-container');
    const carousselContainer = document.createElement('div');
    carousselContainer.classList.add('caroussel-container');
    const circlesContainer = document.createElement('div');
    circlesContainer.classList.add('circles-container');

    //Creating left Right buttons
    const leftButton = document.createElement('button');
    leftButton.classList.add('left');
    leftImage = document.createElement('img');
    leftImage.src = leftArrow;
    leftButton.appendChild(leftImage);

    const rightButton = document.createElement('button');
    rightButton.classList.add('right');
    rightImage = document.createElement('img');
    rightImage.src = rightArrow;
    rightButton.appendChild(rightImage);

    //Appending to DOM
    carousselContainer.appendChild(leftButton);
    carousselContainer.appendChild(rightButton);
    generalContainer.appendChild(carousselContainer);
    generalContainer.appendChild(circlesContainer);
    wrapper.appendChild(generalContainer);

    //Globals
    let circles = [];
    let currentImage = 0;

    //Helper Functions
    const previousImage = () => {
        if (currentImage > 0) {
            currentImage--;
        } else {
            currentImage = images.length - 1;
        }
        displayImage();
        displayCircles();
    };

    const nextImage = () => {
        if (currentImage < images.length - 1) {
            currentImage++;
        } else {
            currentImage = 0;
        }
        displayImage();
        displayCircles();
    };

    const displayImage = () => {
        carousselContainer.style.backgroundImage = `url(${images[currentImage]})`;
    };

    //Dynamycally display circles
    function displayCircles() {
        //Assigning circles to the right images
        for (let i = 0; i < images.length; i++) {
            const buttonContainer = document.createElement('button');
            const circleImage = document.createElement('img');
            (i === currentImage) ? circleImage.src = circleFull : circleImage.src = circleEmpty;
            buttonContainer.appendChild(circleImage);
            circles[i] = buttonContainer;
        }

        circlesContainer.textContent = ''; //reset to not keep the old ones

        //Displaying them
        for (let circle of circles) {

            const targetDisplay = () => {
                currentImage = circles.indexOf(circle);
                displayImage();
                displayCircles();
            };

            circlesContainer.appendChild(circle);
            circle.addEventListener('click', targetDisplay);
        }
    }

    //EventListeners
    leftButton.addEventListener('click', previousImage);
    rightButton.addEventListener('click', nextImage);

    //Initial display and clock running
    displayImage();
    displayCircles();
    if (delay) setInterval(nextImage, delay);
}

const wrapper = document.querySelector('.wrapper');

displayImageCaroussel(wrapper, ['./images/1.png', './images/2.jpg', './images/3.jpg'], './images/chevron-left.svg', './images/chevron-right.svg', './images/circle-outline.svg', './images/circle-double.svg', 5000)