# simple-slider
This slider uses JavaScript to manipulate the css attributes of each slide.

Essentially, the JavaScript code at the bottom of the html document changes the opacity attribute of each slide when either there is a click event or when the DOM loads. In the latter case, the setInterval function executes a function every 10 seconds.

If you want to use this slider you can customize in the following ways:

1. Changing images:
In the css file, replace the background-image attribute of each slide to your source images.

2. Adjusting image roll times:
In the JavaScript file, change the time argument in the setInterval function. Default is 10seconds.

3. Change from fade to animations:
The easiest way is to change the style.opacity method to the css animation of your choice, either transform: positionX (for slide effects) or transform: matrix3d (for more intricate and complicated animations).

Happy full page sliding...
