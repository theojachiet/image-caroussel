# image-caroussel
attempt at a package for an image caroussel <br>
You can import displayImageCaroussel to have an easy way to implement one.
With this function, you are dynamically displaying a caroussel in js. You still need to provide the css code to make it look like one (example provided below). <br>
The function takes 7 arguments : 
1. a wrapper (a DOM element in which the caroussel will be applied)
2. an images array (an array of strings with the relative path to the images you want displayed in their order).
3. a left arrow icon image path (preferably svg)
4. same for right arrow
5. An empty circle image path (preferably svg) to put under the caroussel to display where we are in the images order.
6. A full circle image path to know where the image currently displayed is.
7. A delay timeout you want your images to rotate automatically (you can ignore this argument if you don't want automatic scrolling).
<hr>

## CSS Sample
The image caroussel alone will probably look terrible and not even like an image caroussel.
I didn't want to do the CSS in the JS file as i prefer using separate files, i think its easier to work with, modify and overall cleaner. <br>
So i am providing this sample css to make it look somewhat good, you can change the size variable pretty easily.

```
body {
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    --container-width: 800px;
    --container-height: 300px;
}

.general-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.caroussel-container {
    width: var(--container-width);
    height: var(--container-height);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-image: url(./images/2.jpg); */
    background-size: cover;
    background-position-y: center;
}

.caroussel-container button {
    appearance: none;
    display: block;
    border: none;
    height: 40px;
    width: 40px;
    opacity: 0.5;
}

button.left {
    border-radius: 0px 10px 10px 0px;
}

button.right {
    border-radius: 10px 0px 0px 10px;
}

.circles-container {
    margin-top: 10px;
    display: flex;
    gap: 10px;
}

.circles-container button {
    appearance: none;
    border: none;
    background-color: white;
    display: block;
    width: 25px;
}

button:hover {
    cursor: pointer;
}
```
