var video;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	document.getElementById('volume').innerHTML = (video.volume * 100) + '%';
	console.log("Play Video");
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	video.playbackRate = (video.playbackRate * 0.8)
  	console.log("Speed is " + video.playbackRate);
}

function increaseSpeed() {
	video.playbackRate = (video.playbackRate * 1.25)
	console.log("Speed is " + video.playbackRate);
}

function skipAhead() {
	if (video.currentTime <= video.duration - 60) {
		video.currentTime += 60;
	} else {
		video.currentTime = 0;
	}
	console.log("Current location is "+ video.currentTime);
}

function mute() {
	var muteButton = document.getElementById('mute')

	if (video.muted === true) {
		video.muted = false;
		console.log("Unmuted");

		muteButton.innerHTML = 'Mute'
	} else if (video.muted === false) {
		video.muted = true;
		console.log("Muted");

		muteButton.innerHTML = 'Unmute'
	}
}

function changeVolume() {
	var volumeSlider = document.getElementById('volumeSlider');

	video.volume = (volumeSlider.value / 100);
	document.getElementById('volume').innerHTML = (video.volume * 100) + '%';

	console.log("Volume is " + video.volume * 100 + '%');
}


function gray() {
	video.classList.add('grayscale');
	console.log("In grayscale")
}

function color() {
	video.classList.remove('grayscale');
	console.log("In color")
}
