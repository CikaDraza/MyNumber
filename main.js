
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
const clear = document.getElementById('backspace');

// Confirm and Stop buttons
const confirmBtn = document.getElementById('calc-confirm');
const stop = document.getElementById('calc-stop');

//  display fields ###############################
const displayValElement = document.getElementById('calc-display-val');
const displayResult = document.getElementById('value');
let targetResult = document.getElementById("target");
const displayCpu = document.querySelector('.solution-display');

//  Button operators and numbers ###############################
const calcNumBtns = document.querySelectorAll('.calc-btn-num');
const calcBtnOperators = document.querySelectorAll('.calc-btn-operator');

// Timer ####################################################################
let counter;
const timer = document.getElementById('timer');
let intervalId;

// Buttons Start and New game
const startGame = document.getElementById("start_game");
const newGame = document.getElementById('new_game');

  document.addEventListener('DOMContentLoaded', ()=> {
    window.addEventListener('load', ()=> {
        const loaderWrap = document.querySelector('.loader-wrap');
        const game = document.getElementById('game-page');
        
        loaderWrap.style.display = 'block';

        init = ()=> {
          setTimeout(()=> {            
            setTimeout(()=>{
              loaderWrap.style.opacity = 0;
              loaderWrap.style.display = 'none';
            }, 700);

            game.style.display = 'block';
            setTimeout(()=> game.style.opacity = 1, 50);
          }, 9000);
        };

        init();
    }, false);
  });
    
  // Arrays
  let displayVal = [];
  let clearStrArray = [];

  // Number Buttons
  calcNumBtns.forEach(num => num.addEventListener('click', function(clickObj) {
      audio1.play();
      audio1.volume = 0.5;
      if(displayVal.length && clearStrArray[displayVal.length - 1]){
        return;
      }
      clearStrArray[displayVal.length] = this;
      // Update Display
      let btnText = clickObj.target.innerText;
      btn = btnText + ' ';
      displayVal.push(btn);
      clearStrArray.push(btn);
      displayValElement.innerText = displayVal.join('');
      this.classList.add('used');
    })
  );
  
  // Operator Buttons
  calcBtnOperators.forEach(oprt => oprt.addEventListener('click', function(clickObj) {
      audio1.play();
      audio1.volume = 0.5;
      let oper = this.valueOf();
      clearStrArray[displayVal.length] = null;
      clearStrArray[clearStrArray.length] = oper;
      let btnText = clickObj.target.innerText;
      btn = btnText + ' ';
      clearStrArray.push(btn);
      displayVal.push(btn);
      displayValElement.innerText = displayVal.join('');
    })
  );
  
  // Confirm Button
  confirmBtn.onclick = () => {

    // Show Solution
      displayCpu.style.display = 'block';
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
            
      // When click confirm calculate
      displayResult.innerText = eval(displayVal.join(''));
  
      // if the result is correct 
      if(displayResult.innerText == targetResult.innerText){
        targetResult.style.boxShadow = '2px 4px 30px 7px #ce03b3';
  
        document.getElementById('calculator').style.boxShadow = '2px 4px 30px 7px #ce03b3';
        audio6.play();
        audio6.volume = 0.2;
      }

      // When press Confirm btn do this as well
      window.clearInterval(intervalId);
      newGame.style.display = 'block';
      displayCpu.style.display = 'block';
      stop.style.display = 'none';
      numClear.classList.add('used');
      clear.classList.add('used');
      confirmBtn.style.display = 'none';
      timer.style.color = 'red';
      timer.style.borderColor = 'red';
      audio.play();      
      audio.volume = 0.2;
      audio3.pause();
      audio3.currentTime = 0;
      
      for(let i = 0; i < calcNumBtns.length; i++) {
        [i].forEach.call(calcNumBtns, (e)=> e.classList.add('used'));
      }
      for(let i = 0; i < calcBtnOperators.length; i++) {
        [i].forEach.call(calcBtnOperators, (e)=> e.classList.add('used'));        
      }
  };
  
  // backspace button
  numClear.onclick = ()=> {
    audio7.play();
    let lengthOfDisplayVal = displayVal.length;
    let elem = clearStrArray[displayVal.length - 1];
    if(elem){
      elem.classList.remove('used');
    }
    
    // Backspace elements on display
    displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);  
    displayValElement.innerText = displayVal.join('');
  
    if(displayResult.innerText == ''){
      displayResult.innerText = '???';
    }else if(displayVal == ''){
      displayResult.innerText = '???';
    }
    // Replace sign * whit sign x
    for(let i = 0; i < displayVal.length; i++)
    if(displayVal[i] == '*')
        displayVal[i] = 'x ';
    // Replace sign / whit sign ÷
    for(let e = 0; e < displayVal.length; e++)
      if(displayVal[e] == '/')
          displayVal[e] = '÷ ';
  
      // update display whit correct sign
    displayValElement.innerText = displayVal.join('');
      
  };

  clear.onclick = ()=> {
    audio7.play();
    let lengthOfDisplayVal = displayVal.length;
    let elem = clearStrArray[displayVal.length - 1];
    if(elem){
      elem.classList.remove('used');
    }
    
    // Backspace elements on display
    displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);  
    displayValElement.innerText = displayVal.join('');
  
    if(displayResult.innerText == ''){
      displayResult.innerText = '???';
    }else if(displayVal == ''){
      displayResult.innerText = '???';
    }
    // Replace sign * whit sign x
    for(let i = 0; i < displayVal.length; i++)
    if(displayVal[i] == '*')
        displayVal[i] = 'x ';
    // Replace sign / whit sign ÷
    for(let e = 0; e < displayVal.length; e++)
      if(displayVal[e] == '/')
          displayVal[e] = '÷ ';
  
      // update display whit correct sign
    displayValElement.innerText = displayVal.join('');
  };
  
  // Start Game And Start Rundom Numbers Countdowon #################################################################
  startGame.addEventListener('click', ()=> {
    // Target Number
    let spinTarget = setInterval( ()=> {
      targetResult.innerHTML = Math.floor(Math.random() * 999) + 1;
    }, 50);
    
    // with the help of numbers [1 - 9]
    let rotate = setInterval( ()=> {
      let firstFourNumb = Object.entries(calcNumBtns).slice(0,4).map(entry => entry[1]);
      for(let i = 0; i < calcNumBtns.length; i++) {
        [i].forEach.call(firstFourNumb, (e)=> e.innerText = Math.floor(Math.random() * 9) + 1);
      }
    }, 50);
  
    // with the help of numbers [10, 15, 20]
    let spin = setInterval( ()=> {
  
    let numb = ["10", "15", "20"]; 
  
      function randomElement(completeArray) {
      let comArray = completeArray.length;        
      return completeArray[ Math.floor(Math.random() * comArray) ];        
    }      
      numFive.innerHTML = randomElement(numb);
    }, 50);
  
    // with the help of numbers [25, 50, 75, 100]
    let swing = setInterval( ()=> {
      
    let numb = ["25", "50", "75", "100"];
      
      function randomElement(completeArray) { 
      let comArray = completeArray.length;          
      return completeArray[ Math.floor(Math.random() * comArray) ];        
    }      
      numSix.innerHTML = randomElement(numb);
    }, 50);
  
    // Remove and add style ########################################################################
    startGame.style.display = 'none';
    newGame.style.display = 'none';
    stop.style.display = 'block';
    confirmBtn.style.display = 'none';
    displayCpu.style.display = 'none';

    for(let i = 0; i < calcNumBtns.length; i++) {
      [i].forEach.call(calcNumBtns, (e)=> e.classList.add('run_num'));        
    }
    audio1.play();
    audio1.volume = 0.2;
    audio3.currentTime = 0;
    audio3.volume = 0.2;
  
    // Stop random numbers and start Timer #################################################################
    stop.addEventListener('click', ()=> {
      // Remove existing event listener
      stop.removeEventListener('click', stopClickHandler);
    
      // Add new event listener
      stop.addEventListener('click', stopClickHandler);

      window.clearInterval(intervalId);
      clearInterval(spinTarget);
      clearInterval(rotate);
      clearInterval(spin);
      clearInterval(swing);
      numClear.classList.remove('used');
      clear.classList.remove('used');
      stop.style.display = 'none';
      confirmBtn.style.display = 'block';
      audio1.play();
      audio1.volume = 0.2;
      audio5.play();
      audio5.volume = 0.2;
  
      // every second the timer calls the function progressTime => this should be loaded before the timer
      progressTime = ()=> {
        counter--;
        if(counter < 90){
            timer.innerHTML = counter;
            audio3.play();    
            audio3.volume = 0.5;    
        }
        if(counter < 13){
            audio4.play();        
            audio4.volume = 0.5;
        }  
        if(counter < 10){
            audio2.play();
            audio2.volume = 0.5;
            audio3.pause();     
            audio3.volume = 0.5; 
        }
        if(counter < 9){
            audio4.pause();
            audio4.volume = 0.5;
        }
        if(counter < 1){
            window.clearInterval(intervalId);
            timer.style.color = 'red';
            timer.style.borderColor = 'red';
            audio.play();
            audio.volume = 0.5;
            audio2.pause();
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
            confirmBtn.style.display = 'none';
            numClear.classList.add('used');
            clear.classList.add('used');
            for(let k = 0; k < calcBtnOperators.length; k++) {
              [k].forEach.call(calcBtnOperators, (e)=> e.classList.add('used'));
            }
            for(let j = 0; j < calcNumBtns.length; j++) {
              [j].forEach.call(calcNumBtns, (e)=> e.classList.add('used'));
            }
          }
          
          // When time up calculate what is on display  
          displayResult.innerText = eval(displayVal.join(''));
          newGame.style.display = 'block';
          confirmBtn.style.display = 'none';
          numClear.classList.add('used');
          clear.classList.add('used');
          displayCpu.style.display = 'block';
      
          for(let t = 0; t < calcBtnOperators.length; t++) {
            [t].forEach.call(calcBtnOperators, (e)=> e.classList.add('used'));
          }
          for(let g = 0; g < calcNumBtns.length; g++) {
            [g].forEach.call(calcNumBtns, (e)=> e.classList.add('used'));
          }
          
          if(displayResult.innerText == targetResult.innerText){
            targetResult.style.boxShadow = '2px 4px 30px 7px #ce03b3';
            document.getElementById('calculator').style.boxShadow = '2px 4px 30px 7px #ce03b3';
            audio6.play();
          }
          if(displayValElement.innerText == ''){
            displayResult.innerText = '???';
          }else if(displayVal == []){
            displayResult.innerText = '???';
          }else if(clearStrArray == []){
            displayResult.innerText = '???';
          }
          audio3.currentTime = 0;
        }    
      };
      // ------------------------------------------------------
      // timer call progressTime every secund
        counter = 90;
        function startInterval() {
          intervalId = setInterval(progressTime, 1000); // Update timer every second (1000ms)
        }
        startInterval();
      // -------------------------------------------------------
    
      for(let i = 0; i < calcNumBtns.length; i++) {
          [i].forEach.call(calcNumBtns, (e)=> (e.classList.remove('used'), e.classList.remove('run_num')));        
      }
      for(let j = 0; j < calcBtnOperators.length; j++) {
          [j].forEach.call(calcBtnOperators, (e)=> e.classList.remove('used'));        
      }
       
    });
    const stopClickHandler = () => {
      window.clearInterval(intervalId);
      clearInterval(spinTarget);
      clearInterval(rotate);
      clearInterval(spin);
      clearInterval(swing);
      numClear.classList.remove('used');
      clear.classList.remove('used');
      stop.style.display = 'none';
      confirmBtn.style.display = 'block';
      audio1.play();
      audio1.volume = 0.2;
      audio5.play();
      audio5.volume = 0.2;
  
      // every second the timer calls the function progressTime => this should be loaded before the timer
      progressTime = ()=> {
        counter--;
        if(counter < 90){
            timer.innerHTML = counter;
            audio3.play();    
            audio3.volume = 0.5;    
        }
        if(counter < 13){
            audio4.play();        
            audio4.volume = 0.5;
        }  
        if(counter < 10){
            audio2.play();
            audio2.volume = 0.5;
            audio3.pause();     
            audio3.volume = 0.5; 
        }
        if(counter < 9){
            audio4.pause();
            audio4.volume = 0.5;
        }
        if(counter < 1){
            window.clearInterval(intervalId);
            timer.style.color = 'red';
            timer.style.borderColor = 'red';
            audio.play();
            audio.volume = 0.5;
            audio2.pause();
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
            confirmBtn.style.display = 'none';
            numClear.classList.add('used');
            clear.classList.add('used');
            for(let k = 0; k < calcBtnOperators.length; k++) {
              [k].forEach.call(calcBtnOperators, (e)=> e.classList.add('used'));
            }
            for(let j = 0; j < calcNumBtns.length; j++) {
              [j].forEach.call(calcNumBtns, (e)=> e.classList.add('used'));
            }
          }
          
          // When time up calculate what is on display  
          displayResult.innerText = eval(displayVal.join(''));
          newGame.style.display = 'block';
          confirmBtn.style.display = 'none';
          numClear.classList.add('used');
          clear.classList.add('used');
          displayCpu.style.display = 'block';
      
          for(let t = 0; t < calcBtnOperators.length; t++) {
            [t].forEach.call(calcBtnOperators, (e)=> e.classList.add('used'));
          }
          for(let g = 0; g < calcNumBtns.length; g++) {
            [g].forEach.call(calcNumBtns, (e)=> e.classList.add('used'));
          }
          
          if(displayResult.innerText == targetResult.innerText){
            targetResult.style.boxShadow = '2px 4px 30px 7px #ce03b3';
            document.getElementById('calculator').style.boxShadow = '2px 4px 30px 7px #ce03b3';
            audio6.play();
          }
          if(displayValElement.innerText == ''){
            displayResult.innerText = '???';
          }else if(displayVal == []){
            displayResult.innerText = '???';
          }else if(clearStrArray == []){
            displayResult.innerText = '???';
          }
          audio3.currentTime = 0;
        }    
      };
      // ------------------------------------------------------
      // timer call progressTime every secund
        counter = 90;
        function startInterval() {
          intervalId = setInterval(progressTime, 1000); // Update timer every second (1000ms)
        }
        startInterval();
      // -------------------------------------------------------
    
      for(let i = 0; i < calcNumBtns.length; i++) {
          [i].forEach.call(calcNumBtns, (e)=> (e.classList.remove('used'), e.classList.remove('run_num')));        
      }
      for(let j = 0; j < calcBtnOperators.length; j++) {
          [j].forEach.call(calcBtnOperators, (e)=> e.classList.remove('used'));        
      }
    };
  });
      
  // Start New game ##############################################################################
  newGame.addEventListener('click', ()=> {
      window.clearInterval(intervalId);
      newGame.style.display = 'none';
      startGame.style.display = 'block';
      confirmBtn.style.display = 'none';
      numClear.classList.add('used');    
      timer.innerHTML = 90;    
      timer.style.color = 'yellow';
      timer.style.borderColor = 'yellow';
      targetResult.style.boxShadow = 'none';
      document.getElementById('calculator').style.boxShadow = '2px 4px 30px 7px #f4f4f4';
      audio1.play();
      audio1.volume = 0.5;
      audio3.pause();
      displayResult.innerText = '???';
      displayValElement.innerText = '';
      displayVal = [];
      evalStrArray = [];
      displayVal.innerHTML = '';
      storeNums = [];
      targetResult.innerText = '000';
      let firstFourNumb = Object.entries(calcNumBtns).slice(0,4).map(entry => entry[1]);
      for(let i = 0; i < calcNumBtns.length; i++) {
        [i].forEach.call(firstFourNumb, (e)=> e.innerText = '0');
      }
      calcNumBtns[4].innerText = '00';
      calcNumBtns[5].innerText = '000';
  
      // Removes inactive buttons
      for(let h = 0; h < calcNumBtns.length; h++) {
        [h].forEach.call(calcNumBtns, (e)=> e.classList.add('used'));
      }
      for(let j = 0; j < calcBtnOperators.length; j++) {
        [j].forEach.call(calcBtnOperators, (e)=> e.classList.add('used'));
      }
  });

