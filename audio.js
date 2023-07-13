const sound = document.querySelector('.sound-icon');
const soundPseudo = document.querySelector('.sound-icon::after');
const mute = document.querySelector('.mute-icon');
const muteTone = document.querySelector('.mute-icon-tone');
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
    audio5.volume = 0.3;
  }, 2000);
});

audio.addEventListener('error', function(event) {
  console.log('Audio playback error:', event.target.error);
});

sound.onclick = ()=> {
  audio1.play();
  // audio1.volume = 0.2;
  if(audio3.muted) {
    audio3.muted = false;
    mute.style.visibility = 'hidden';
    mute.style.opacity = '0';
  } else {
    audio3.muted = true;
    mute.style.visibility = 'visible';
    mute.style.opacity = '1';
  }
};

tone.onclick = ()=> {
  audio1.play();
  audio1.volume = 0.2;
  if(audio2.muted && audio4.muted && audio5.muted) {
    audio2.muted = false;
    audio4.muted = false;
    audio5.muted = false;
    muteTone.style.visibility = 'hidden';
    muteTone.style.opacity = '0';
  } else {
    audio2.muted = true;
    audio4.muted = true;
    audio5.muted = true;
    muteTone.style.visibility = 'visible';
    muteTone.style.opacity = '1';
  }
};

let style = document.createElement('style');


function volumeSlide() {
  audio3.volume = volumeSlider.value;
  audio6.volume = volumeSlider.value;
  audio.volume = volumeSlider.value;
  audio5.volume = volumeSlider.value;
  console.log(audio.volume = volumeSlider.value);
  if(volumeSlider.value == 0) {
    mute.style.visibility = 'visible';
    mute.style.opacity = '1';
    style.innerHTML = `#${sound.id}::after {
      width: 20px;
      height: 20px;
    }`;
  }else if(volumeSlider.value > 0 && volumeSlider.value < 0.2) {
    mute.style.visibility = 'hidden';
    mute.style.opacity = '0';
    style.innerHTML = `#${sound.id}::after {
      width: 30px;
      height: 30px;
    }`;    
  }else if(volumeSlider.value > 0.2 && volumeSlider.value <= 0.5) {
    mute.style.visibility = 'hidden';
    mute.style.opacity = '0';
    style.innerHTML = `#${sound.id}::after {
      width: 35px;
      height: 35px;
    }`;    
  }else if(volumeSlider.value > 0.5) {
    mute.style.visibility = 'hidden';
    mute.style.opacity = '0';
    style.innerHTML = `#${sound.id}::after {
      width: 45px;
      height: 45px;
    }`;
  }
}

document.head.appendChild(style);