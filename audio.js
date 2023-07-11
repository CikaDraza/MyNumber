const sound = document.querySelector('.sound-icon');
const soundPseudo = document.querySelector('.sound-icon::after');
const mute = document.querySelector('.mute-icon');
const volumeSlider = document.querySelector('.sound-slider');
const tone = document.querySelector('.tone');

// Audio effects
const audio = new Audio('sounds/Metal_Gong-Dianakc.mp3');
const audio1 = new Audio('sounds/Tick-DeepFrozen.mp3');
const audio2 = new Audio('sounds/culmination.mp3');
const audio3 = new Audio('sounds/clockIsTicking.mp3');
const audio4 = new Audio('sounds/ten_seconds.m4a');
const audio5 = new Audio('sounds/time.wav');
const audio6 = new Audio('sounds/Ta Da.mp3');
const audio7 = new Audio('sounds/Blop.mp3');
const gun = new Audio('sounds/Gun_Shot.mp3');
const appre = new Audio('sounds/apprehensive.mp3');

window.addEventListener('DOMContentLoaded', ()=> {
  setTimeout(()=> {
    gun.play();
    appre.play();
    gun.volume = 0.2;
    appre.volume = 0.2;
  }, 2000);
});

audio.addEventListener('error', function(event) {
  console.log('Audio playback error:', event.target.error);
});

sound.onclick = ()=> {
  audio1.play();
  audio1.volume = 0.2;
  if(audio3.muted) {
    audio3.muted = false;
    mute.style.zIndex = '-10';
  } else {
    audio3.muted = true;
    mute.style.zIndex = '1';
    mute.onclick = ()=> {
      audio3.muted = false;
      mute.style.zIndex = '-10';
    };
    let pseud = window.getComputedStyle(sound, '::after');
    let color = pseud.getPropertyValue('color');
    console.log(color);
  }
};

function volumeSlide() {
  audio3.volume = volumeSlider.value;
  if(volumeSlider.value == 0) {
    mute.style.zIndex = '1';
  }else {
    mute.style.zIndex = '-10';
  }
}