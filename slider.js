window.addEventListener('onload', setHeight())
window.addEventListener('onresize', setHeight());
let number = 1;
let x = document.getElementsByClassName('slide').length;
setInterval(function(){
    if(number < x) {
        number = number + 1;
        let prevNumber = number - 1;
        document.getElementById('slide-'+number).style.opacity = 1;
        document.getElementById('slide-'+prevNumber).style.opacity = 0;
    } else {
        number = 1;
        document.getElementById('slide-'+number).style.opacity = 1;
        document.getElementById('slide-5').style.opacity = 0;
    }
    return number;
},10000);

function handleNext() {
    if (number < x) {
        console.log(number)
        number = number + 1;
        let prevNumber = number - 1;
        document.getElementById('slide-'+number).style.opacity = 1;
        document.getElementById('slide-'+prevNumber).style.opacity = 0;
    } else {
        number = 1;
        document.getElementById('slide-'+number).style.opacity = 1;
        document.getElementById('slide-5').style.opacity = 0;
    }
}

function handleBack() {
    console.log(number);
    if (number <= x && number != 1) {
        number = number - 1;
        let prevNumber = number + 1;
        document.getElementById('slide-'+number).style.opacity = 1;
        document.getElementById('slide-'+prevNumber).style.opacity = 0;
    } else {
        number = 5
        document.getElementById('slide-'+number).style.opacity = 1;
        document.getElementById('slide-1').style.opacity = 0;
    }
}
function setHeight() {
    let height = window.innerHeight.toString() + 'px';
    console.log(height);
    document.getElementById('slider-wrapper').style.height = height;
}