var video;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
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

	console.log("Current location is "+ '');
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

	console.log("Volume is ");
}


function gray() {

	console.log("In grayscale")
}

function color() {

	console.log("In color")
}
