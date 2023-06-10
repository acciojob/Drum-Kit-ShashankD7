// Function to play sound based on key code
function playSound(keyCode) {
  var audio = document.querySelector('audio[data-key="' + keyCode + '"]');
  var key = document.querySelector('.key[data-key="' + keyCode + '"]');

  if (!audio) return; // Exit if no audio element found for the key
  audio.currentTime = 0; // Rewind the audio to the start
  audio.play();

  key.classList.add('playing'); // Add the 'playing' class to the key element
}

// Function to handle keydown event
function handleKeyDown(event) {
  var keyCode = event.keyCode;
  playSound(keyCode);
}

// Function to remove the 'playing' class from the key element
function removePlayingClass(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

// Add event listeners
window.addEventListener('keydown', handleKeyDown);

var keys = document.querySelectorAll('.key');
keys.forEach(function (key) {
  key.addEventListener('transitionend', removePlayingClass);
});

