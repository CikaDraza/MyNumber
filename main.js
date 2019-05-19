
//  Button numbers ###############################
const numOne = document.getElementById('num1');
const numTwo = document.getElementById('num2');
const numThree = document.getElementById('num3');
const numFour = document.getElementById('num4');
const numFive = document.getElementById('num5');
const numSix = document.getElementById('num6');

//  Button operators ###############################
const numPlus = document.getElementById('calc-plus');
const numMinus = document.getElementById('calc-minus');
const numMulty = document.getElementById('calc-multiply');
const numDivide = document.getElementById('calc-divide');
const numLB = document.getElementById('calc-left-bracket');
const numRB = document.getElementById('calc-right-bracket');
const numClear = document.getElementById('calc-backspace');

// Confirm and Stop buttons
const confirm = document.getElementById('calc-confirm');
const stop = document.getElementById('calc-stop');

//  display fields ###############################
const displayValElement = document.getElementById('calc-display-val');
const displayResult = document.getElementById('value');
let targetResult = document.getElementById("target");

//  Button operators and numbers ###############################
const calcNumBtns = document.querySelectorAll('.calc-btn-num');
const calcBtnOperators = document.querySelectorAll('.calc-btn-operator');

// Timer ####################################################################
let counter;
const time = document.getElementById('timer');
// const start = document.getElementById("start");
const startGame = document.getElementById("start_game");
const newGame = document.getElementById('new_game');
const audio = new Audio('sounds/Metal_Gong-Dianakc.mp3');
const audio1 = new Audio('sounds/Tick-DeepFrozen.mp3');
const audio2 = new Audio('sounds/Train Horn Low.mp3');
const audio3 = new Audio('sounds/Rusty-clock.wav');
const audio4 = new Audio('sounds/ten_seconds.m4a');
const audio5 = new Audio('sounds/time.wav');
const audio6 = new Audio('sounds/Ta Da.mp3');
const audio7 = new Audio('sounds/Gun_Shot.wav');
const audio8 = new Audio('sounds/apprehensive.mp3');
const audio9 = new Audio('sounds/Pure Simphoni.mp3');
const audio10 = new Audio('sounds/Blop.mp3');


// Page Pre-Loader
    audio7.play();
    audio8.play();
    audio9.play();

  window.addEventListener('load', function() {
    const loader = document.querySelector('.loader-wrap');
    loader.classList.add('hidden');
    setTimeout(clearBoxLoader, 10000);
  });

  function clearBoxLoader() {
    const boxLoader = document.querySelector('.box-loader');
    boxLoader.classList.add('no-animation');
  };

// When click buttons numbers display
let displayVal = [];
let evalStrArray = [];
let clearStrArray = [];

// Number Buttons
calcNumBtns.forEach(function(num) { 
  num.addEventListener('click', function(clickObj){
    audio1.play();      
    if(displayVal.length && clearStrArray[displayVal.length - 1]){
      return;
    }
    // var numbers = this.innerText;
    clearStrArray[displayVal.length] = this;

    // Update Display
    let btnText = clickObj.target.innerText;
    btn = btnText + ' ';
    displayVal.push(btn);
    clearStrArray.push(btn);
    evalStrArray.push(btn);
    displayValElement.innerText = displayVal.join('');
    this.classList.add('used');
  });
});

// Operator Buttons
calcBtnOperators.forEach(function(oprt) {  
  oprt.addEventListener('click', function(clickObj){
    audio1.play();
    let oper = this.valueOf();
    clearStrArray[displayVal.length] = null;
    evalStrArray[evalStrArray.length] = oper;
    let btnText = clickObj.target.innerText;
    btn = btnText + ' ';
    evalStrArray.push(btn);
    clearStrArray.push(btn);
    displayVal.push(btn);
    displayValElement.innerText = displayVal.join('');
  });
});

// Confirm Button
confirm.onclick = () => {
    // if display empty show result this ??? 
    if(displayResult.innerText == ''){
      return displayResult.innerText = '???';
    }else if(displayVal == ''){
      return displayResult.innerText = '???';
    }
    // Replace sign x whit sign * to make a calculation
    for(let i = 0; i < displayVal.length; i++)
      if(displayVal[i] == 'x ')
          displayVal[i] = '*';
    // Replace sign ÷ whit sign / to make a calculation
    for(let e = 0; e < displayVal.length; e++)
    if(displayVal[e] == '÷ ')
          displayVal[e] = '/';
    // When click confirm to calculate
    displayResult.innerText = eval(displayVal.join(''));

    // if the result is correct 
    if(displayResult.innerText == targetResult.innerText){
      targetResult.style.boxShadow = '2px 4px 30px 7px #f4f4f4';
      document.getElementById('calculator').style.boxShadow = '2px 4px 30px 7px #ce03b3';
      audio6.play();
    }

    // When press Confirm btn do this as well
    newGame.style.display = 'block';
    stop.style.display = 'none';
    numClear.classList.add('used');
    confirm.style.display = 'none';
    window.clearInterval(timer);
    time.style.color = 'red';
    time.style.borderColor = 'red';
    audio.play();
    audio3.pause();
    audio3.currentTime = 0;
    
    for(let i = 0; i < calcNumBtns.length; i++) {
      [i].forEach.call(calcNumBtns, function(e) {
      e.classList.add('used');
      });
    }
    for(let i = 0; i < calcBtnOperators.length; i++) {
      [i].forEach.call(calcBtnOperators, function(e) {
      e.classList.add('used');
      });        
    }
};

// backspace button
numClear.onclick = () => {
  audio10.play();
  let lengthOfDisplayVal = displayVal.length;
  let elem = clearStrArray[displayVal.length - 1];
  if(elem){
    elem.classList.remove('used');
    // clearStrArray[displayVal - 1] = null;
  }
  // displayVal.length = displayVal.length - 1;
  
  // Backspace elements on display
  displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);  
  displayValElement.innerText = displayVal.join('');

  if(displayResult.innerText == ''){
    displayResult.innerText = '???';
  }else if(displayVal == ''){
     displayResult.innerText = '???';
  }
  // Replace sign * whit sign x
  for(var i = 0; i < displayVal.length; i++)
  if(displayVal[i] == '*')
      displayVal[i] = 'x ';
  // Replace sign / whit sign ÷
  for(var e = 0; e < displayVal.length; e++)
    if(displayVal[e] == '/')
        displayVal[e] = '÷ ';

    // update display whit correct sign
  displayValElement.innerText = displayVal.join('');
    
};

// Rundom Numbers Countdowon #################################################################
startGame.addEventListener('click', ()=> {
  // Target Number
  let spinTarget = setInterval( () => {
    // let targetResult = document.getElementById("target");
    targetResult.innerHTML = Math.floor(Math.random() * 999) + 1;

  }, 50);

  // with the help of numbers [1 - 9]
  let rotate = setInterval( () => {
    
    document.getElementById("num1").innerHTML = Math.floor(Math.random() * 9) + 1;
    document.getElementById("num2").innerHTML = Math.floor(Math.random() * 9) + 1;
    document.getElementById("num3").innerHTML = Math.floor(Math.random() * 9) + 1;
    document.getElementById("num4").innerHTML = Math.floor(Math.random() * 9) + 1;

  }, 50);

  // with the help of numbers [10, 15, 20]
  let spin = setInterval( ()=> {

  let numb = ["10", "15", "20"]; 

    function randomElement(completeArray) {
    let comArray = completeArray.length;        
    return completeArray[ Math.floor(Math.random() * comArray) ];        
  }      
  document.getElementById("num5").innerHTML = randomElement(numb);
  }, 50);

  // with the help of numbers [25, 50, 75, 100]
  let swing = setInterval( ()=> {
    
  let numb = ["25", "50", "75", "100"];
    
    function randomElement(completeArray) { 
    let comArray = completeArray.length;          
    return completeArray[ Math.floor(Math.random() * comArray) ];        
  }      
  document.getElementById("num6").innerHTML = randomElement(numb);
  }, 50);

  // Remove New Game button ########################################################################
  startGame.style.display = 'none';
  newGame.style.display = 'none';
  stop.style.display = 'block';
  confirm.style.display = 'none';
  for(let i = 0; i < calcNumBtns.length; i++) {
      [i].forEach.call(calcNumBtns, function(e) {
      e.classList.add('run_num');
    });        
  }
  document.getElementById('calculator').style.boxShadow = '2px 4px 30px 7px #f4f4f4';
  audio1.play();
  audio3.currentTime = 0;
// Stop random numbers and start clock #################################################################
  stop.addEventListener('click', ()=> {
    window.clearInterval(timer);
    clearInterval(spinTarget);
    clearInterval(rotate);
    clearInterval(spin);
    clearInterval(swing);
    numClear.classList.remove('used');
    stop.style.display = 'none';
    confirm.style.display = 'block';
    counter = 90;
    timer = setInterval('progressTime()', 1000);
    audio1.play();
    audio5.play();
  
    for(let i = 0; i < calcNumBtns.length; i++) {
        [i].forEach.call(calcNumBtns, function(e) {
        e.classList.remove('used');
        e.classList.remove('run_num');
      });        
    }
    for(let i = 0; i < calcBtnOperators.length; i++) {
        [i].forEach.call(calcBtnOperators, function(e) {
        e.classList.remove('used');
      });        
    }

  });

});

function progressTime() {
  counter--;
  if(counter < 90){
      time.innerHTML = counter;
      audio3.play();        
  }
  if(counter < 13){
      audio4.play();        
  }  
  if(counter < 10){
      audio2.play();        
  }
  if(counter < 9){
      audio4.pause();
  }
  if(counter < 1){
      window.clearInterval(timer);
      time.style.color = 'red';
      time.style.borderColor = 'red';
      audio.play();
      audio3.pause();
      audio3.currentTime = 0;
  }
  if(counter === 0){    
    // Replace sign x whit sign * to make a calculation
    for(let i = 0; i < displayVal.length; i++)
      if(displayVal[i] ==='x ')
      displayVal[i] = '*';
    // Replace sign ÷ whit sign / to make a calculation
    for(let e = 0; e < displayVal.length; e++)
    if(displayVal[e] === '÷ ')
    displayVal[e] = '/';

    // If not a number on display set on new game
    if(isNaN(displayValElement.innerText) == true){
      displayResult.innerText = '???';
      newGame.style.display = 'block';
      confirm.style.display = 'none';
      numClear.classList.add('used');
      for(let i = 0; i < calcBtnOperators.length; i++) {
        [i].forEach.call(calcBtnOperators, function(e) {
          e.classList.add('used');        
        });
      }
      for(let i = 0; i < calcNumBtns.length; i++) {
        [i].forEach.call(calcNumBtns, function(e) {
          e.classList.add('used');
        });
      };
    }

    // When time up calculate
    displayResult.innerText = eval(displayVal.join(''));

    newGame.style.display = 'block';
    confirm.style.display = 'none';
    numClear.classList.add('used');

    for(let i = 0; i < calcBtnOperators.length; i++) {
      [i].forEach.call(calcBtnOperators, function(e) {
        e.classList.add('used');        
      });
    }
    for(let i = 0; i < calcNumBtns.length; i++) {
      [i].forEach.call(calcNumBtns, function(e) {
        e.classList.add('used');
      });
    };
    
    if(displayResult.innerText == targetResult.innerText){
      targetResult.style.boxShadow = '2px 4px 30px 7px #f4f4f4';
      document.getElementById('calculator').style.boxShadow = '2px 4px 30px 7px #ce03b3';
      audio6.play();
    };
    if(displayValElement.innerText == ''){
      return displayResult.innerText = '???';
    }else if(displayVal == []){
      return displayResult.innerText = '???';
    }else if(clearStrArray == []){
      return displayResult.innerText = '???';
    }
    audio3.currentTime = 0;
  }

};

// Start New game ######################################
newGame.addEventListener('click', ()=> {
    window.clearInterval(timer);
    newGame.style.display = 'none';
    startGame.style.display = 'block';
    confirm.style.display = 'none';
    numClear.classList.add('used');    
    time.innerHTML = 90;    
    time.style.color = 'yellow';
    time.style.borderColor = 'yellow';
    audio1.play();
    audio3.pause();
    displayResult.innerText = '???';
    displayValElement.innerText = '';
    displayVal = [];
    evalStrArray = [];
    targetResult.innerText = '000';
    let firstFourNumb = Object.entries(calcNumBtns).slice(0,4).map(entry => entry[1]);
    for(let i = 0; i < calcNumBtns.length; i++) {
      [i].forEach.call(firstFourNumb, function(e) {
      e.innerText = '0';
      });
    };
    calcNumBtns[4].innerText = '00';
    calcNumBtns[5].innerText = '000';
    // Removes inactive buttons
    for(let i = 0; i < calcNumBtns.length; i++) {
      [i].forEach.call(calcNumBtns, function(e) {
      e.classList.add('used');
      });
    }
    for(let i = 0; i < calcBtnOperators.length; i++) {
      [i].forEach.call(calcBtnOperators, function(e) {
      e.classList.add('used');
    });        
  }
    targetResult.style.boxShadow = 'none';
});