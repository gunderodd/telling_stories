const audio = document.getElementById("audioPlayer");

// show yellow square after 1sec (1000 millisec) of audio playback
audio.onplay = function () {
  setTimeout( function () {
    document.getElementById("yellow").style.display = "block";
  }, 1000);
  setTimeout( function () {
    document.getElementById("red").style.display = "block";
  }, 2000);
  setTimeout( function () {
    document.getElementById("purple").style.display = "block";
  }, 2000);
};

// hide the yellow square immedeately when the audio stops

// audio.onpause = () => {
//   document.getElementById("yellow").style.display = "none";
// };
