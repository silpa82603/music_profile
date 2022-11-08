var mysound = document.getElementById("mysound");
var button = document.getElementById("button");
var count = 0;

// Creating a function that will change
// pause to play and vice-versa
function playpause() {
    if (count == 0) {
        count = 1;
        mysound.play();
        button.innerHTML = "Pause &#9208;";
    } else {
        count = 0;
        mysound.pause();
        button.innerHTML = "Play &#9658;";
    }
}