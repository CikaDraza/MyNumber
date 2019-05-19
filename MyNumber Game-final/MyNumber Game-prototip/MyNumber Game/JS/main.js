//  Button numbers ###############################
const numOne = document.getElementById('calc-num1');
const numTwo = document.getElementById('calc-num2');
const numThree = document.getElementById('calc-num3');
const numFour = document.getElementById('calc-num4');
const numFive = document.getElementById('calc-num5');
const numSix = document.getElementById('calc-num6');
//  Button operators ###############################
const numPlus = document.getElementById('calc-plus');
const numMinus = document.getElementById('calc-minus');
const numMulty = document.getElementById('calc-multiply');
const numDivide = document.getElementById('calc-divide');
const numLB = document.getElementById('calc-left-bracket');
const numRB = document.getElementById('calc-right-bracket');
const numClear = document.getElementById('calc-backspace');
const confirm = document.getElementById('calc-confirm');
const stop = document.querySelector('#calc-stop');

//  display fields ###############################
const displayValElement = document.getElementById('calc-display-val');
const displayResult = document.getElementById('value');

//  Button operators and numbers ###############################
const calcNumBtns = document.querySelectorAll('.calc-btn-num');
const calcBtnOperators = document.querySelectorAll('.calc-btn-operator');
let targetResult = document.getElementById("target");

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
const audio4 = new Audio('sounds/record.wav');
const audio5 = new Audio('sounds/start_time.wav');
const audio6 = new Audio('sounds/Ta Da.mp3');

// When click buttons numbers display
let displayVal = '';
let evalStrArray = [];
let clearArray = [];


let updateDisplayVal = (clickObj) => {
  let btnText = clickObj.target.innerText;
    btn = btnText + ' ';
    displayVal += btn;
    evalStrArray.push(btn);
    displayValElement.innerText = displayVal.replace(/,/g,' ');    
};

// Selecting all numbers button by click
calcNumBtns.forEach(function(num) {  
  num.addEventListener('click', updateDisplayVal, true);  
});

// Selected number are inactive
calcNumBtns.forEach(function(num) { 
  num.addEventListener('click', function(){
    audio1.play();      
    this.classList.add('used');
    clearArray[displayVal.length] = true;

  });
});

// Selecting all operator butons by click
calcBtnOperators.forEach(function(oprt) {  
  oprt.addEventListener('click', updateDisplayVal, false);
  
});
// Selecting all operator butons by click #2 metod
// calcOptLength = calcBtnOperators.length;
// for (let i = 0; i < calcOptLength; i++) {
//   calcBtnOperators[i].addEventListener('click', performOperation, false);
// }

// add click sound on button operators
calcBtnOperators.forEach((oprt)=>{
  oprt.addEventListener('click', ()=>{
    audio1.play();
    clearArray[displayVal.length] = null;
  })
})

// Confirm result on the display into value ##############################################################
  confirm.onclick = () => {       
    // if display empty show this result ??? 
    if(displayResult.innerText == ''){
      return displayResult.innerText = '???';
    }else if(displayVal == ''){
      return displayResult.innerText = '???';
    }else if(evalStrArray == []){
      return displayResult.innerText = '???';
    }
    // Replace sign x whit sign * to make a calculation
    for(let i = 0; i < evalStrArray.length; i++)
      if(evalStrArray[i] ==='x ')
      evalStrArray[i] = '*';
    // Replace sign ÷ whit sign / to make a calculation
    for(let e = 0; e < evalStrArray.length; e++)
    if(evalStrArray[e] === '÷ ')
    evalStrArray[e] = '/';
    // When click confirm to calculate
    displayResult.innerText = eval(evalStrArray.join(''));

    if(displayResult.innerText == targetResult.innerText){
      targetResult.style.boxShadow = '3px 4px 20px 0px rgb(105, 228, 24)';
      audio6.play();
      console.log('Bingo');
    }
    
    // When press Confirm btn do this as well
        window.clearInterval(timer);
        time.style.color = 'red';
        time.style.borderColor = 'red';
        audio.play();
        audio3.pause();
        audio3.currentTime = 0;
        newGame.classList.remove('used');
        stop.classList.add('used');
        numClear.classList.add('used');
        for(let i = 0; i < calcNumBtns.length; i++) {
          // calcNumBtns[i].classList.remove('used');
          [i].forEach.call(calcNumBtns, function(e) {
          e.classList.add('used');
          });
        }
        for(let i = 0; i < calcBtnOperators.length; i++) {
          // calcNumBtns[i].classList.remove('used');
          [i].forEach.call(calcBtnOperators, function(e) {
          e.classList.add('used');
          });        
        }
  };

// backspace button ########################################################################################
numClear.onclick = () => {  
  audio1.play();
  let lengthOfDisplayVal = evalStrArray.length;
  evalStrArray = evalStrArray.slice(0, lengthOfDisplayVal - 1);  
  displayValElement.innerText = evalStrArray.join(' ');
  
  // Removes inactive buttons
  for(let i = 0; i < calcNumBtns.length; i++) {
    // calcNumBtns[i].classList.remove('used');
    [i].forEach.call(calcNumBtns, function(e) {
    e.classList.remove('used');
  });
    displayVal = evalStrArray;
  }
  // if display empty show result this ???
  // if(displayResult.innerText == ''){
  //   return displayResult.innerText = '???';
  // }
  // else if(displayVal == ''){
  //   return displayResult.innerText = '???';
  // }
  // Replace sign * whit sign x
  for(let i = 0; i < evalStrArray.length; i++)
  if(evalStrArray[i] == '*')
  evalStrArray[i] = 'x ';
  // Replace sign / whit sign ÷
  for(let e = 0; e < evalStrArray.length; e++)
    if(evalStrArray[e] == '/')
    evalStrArray[e] = '÷ ';
    // update display whit correct sign
  displayValElement.innerText = evalStrArray.join(' ');

  // let elem = displayVal[evalStrArray.length - 1];
  //  if(elem){
  //    elem.classList.remove('used');
  //    displayVal[evalStrArray.length - 1] = null;
  //  }
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
    
    document.getElementById("calc-num1").innerHTML = Math.floor(Math.random() * 9) + 1;
    document.getElementById("calc-num2").innerHTML = Math.floor(Math.random() * 9) + 1;
    document.getElementById("calc-num3").innerHTML = Math.floor(Math.random() * 9) + 1;
    document.getElementById("calc-num4").innerHTML = Math.floor(Math.random() * 9) + 1;

  }, 50);

  // with the help of numbers [10, 15, 20]
  let spin = setInterval( ()=> {

  let numb = ["10", "15", "20"]; 

    function randomElement(completeArray) {
    let comArray = completeArray.length;        
    return completeArray[ Math.floor(Math.random() * comArray) ];        
  }      
  document.getElementById("calc-num5").innerHTML = randomElement(numb);
  }, 50);

  // with the help of numbers [25, 50, 75, 100]
  let swing = setInterval( ()=> {
    
  let numb = ["25", "50", "75", "100"];
    
    function randomElement(completeArray) { 
    let comArray = completeArray.length;          
    return completeArray[ Math.floor(Math.random() * comArray) ];        
  }      
  document.getElementById("calc-num6").innerHTML = randomElement(numb);
  }, 50);

  // Remove New Game button ########################################################################
  startGame.style.display = 'none';
  newGame.style.display = 'block';
  stop.classList.remove('used');
  audio1.play();

  stop.addEventListener('click', ()=> {
    window.clearInterval(timer);
    clearInterval(spinTarget);
    clearInterval(rotate);
    clearInterval(spin);
    clearInterval(swing);
    newGame.classList.add('used');
    numClear.classList.remove('used');
    stop.classList.add('used');
    counter = 90;
    timer = setInterval('progressTime()', 1000);
    audio1.play();
    // audio5.play();
  
    for(let i = 0; i < calcNumBtns.length; i++) {
      // calcNumBtns[i].classList.remove('used');
        [i].forEach.call(calcNumBtns, function(e) {
        e.classList.remove('used');
      });        
    }
    for(let i = 0; i < calcBtnOperators.length; i++) {
        // calcNumBtns[i].classList.remove('used');
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
  if(counter < 12){
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
      stop.classList.add('used');
      numClear.classList.add('used');
      newGame.classList.remove('used'); 
  }
  if(counter === 0){
    
    // Replace sign x whit sign * to make a calculation
    for(let i = 0; i < evalStrArray.length; i++)
      if(evalStrArray[i] ==='x ')
      evalStrArray[i] = '*';
    // Replace sign ÷ whit sign / to make a calculation
    for(let e = 0; e < evalStrArray.length; e++)
    if(evalStrArray[e] === '÷ ')
    evalStrArray[e] = '/';
    // When click confirm to calculate
    displayResult.innerText = eval(evalStrArray.join(''));

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
      targetResult.style.boxShadow = '3px 4px 20px 0px rgb(105, 228, 24)';
      audio6.play();
      console.log('Ta da');
    };
    if(displayResult.innerText == ''){
      return displayResult.innerText = '???';
    }else if(displayVal == ''){
      return displayResult.innerText = '???';
    }else if(evalStrArray == []){
      return displayResult.innerText = '???';
    }
  }

};

// Start New game ######################################
newGame.addEventListener('click', ()=> {
    window.clearInterval(timer);
    newGame.style.display = 'none';
    startGame.style.display = 'block';
    stop.classList.add('used');
    numClear.classList.add('used');    
    time.innerHTML = 90;    
    time.style.color = 'yellow';
    time.style.borderColor = 'yellow';
    audio1.play();
    audio3.pause();
    displayResult.innerText = '???';
    displayValElement.innerText = '';
    displayVal = '';
    evalStrArray = [];
    targetResult.innerText = '000';
    let firstFourNumb = Object.entries(calcNumBtns).slice(0,4).map(entry => entry[1]);
    for(let i = 0; i < calcNumBtns.length; i++) {
      // calcNumBtns[i].classList.remove('used');
      [i].forEach.call(firstFourNumb, function(e) {
      e.innerText = '0';
      });
    };
    calcNumBtns[4].innerText = '00';
    calcNumBtns[5].innerText = '000';
    // Removes inactive buttons
    for(let i = 0; i < calcNumBtns.length; i++) {
      // calcNumBtns[i].classList.remove('used');
      [i].forEach.call(calcNumBtns, function(e) {
      e.classList.add('used');
      });
    }
    for(let i = 0; i < calcBtnOperators.length; i++) {
      // calcNumBtns[i].classList.remove('used');
      [i].forEach.call(calcBtnOperators, function(e) {
      e.classList.add('used');
    });        
  }
    targetResult.style.boxShadow = 'none';
});