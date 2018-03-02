// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Get the audio button
var autiobtn = document.getElementById("myMuteBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

function myMuteFunction() {

    if (video.muted === false) {    
       video.muted = true;
       audiobtn.innerHTML = "Mute";
    }

    else {
        video.muted = false;
        autiobtn.innerHTML = "Unmute";
    }

    };
