let counter;
const time = document.getElementById('timer');
// const start = document.getElementById("start");
const reset = document.getElementById("reset");
const audio = new Audio('sounds/Metal_Gong-Dianakc.mp3');
const audio1 = new Audio('sounds/Tick-DeepFrozen.mp3');
const audio2 = new Audio('sounds/Train Horn Low.mp3');
const audio3 = new Audio('sounds/Rusty-clock.wav');
const audio4 = new Audio('sounds/record.wav');
const audio5 = new Audio('sounds/start_time.wav');


// start.onclick = function(){
//     counter = 90;
//     timer = setInterval('progressTime()', 1000);
//     start.disabled = true;
//     reset.disabled = false;
//     audio1.play();
//     audio5.play();
// }

// Start New Game reset to begining
reset.onclick = function(){
    window.clearInterval(timer);
    time.innerHTML = 90;    
    time.style.color = 'yellow';
    time.style.borderColor = 'yellow';
    audio1.play();
    audio3.pause();
    stop.classList.remove('used');
    this.classList.add('used');
    // calcNumBtns.add('used');
    // calcBtnOperators.add('used');
    // Target Number
    let spinTarget = setInterval( () => {
	
        document.getElementById("target").innerHTML = Math.floor(Math.random() * 999) + 1;
    
    }, 50);
    // stop.addEventListener('click', ()=> {
    //     clearInterval(spinTarget);
    // });
    
    // with the help of numbers [1 - 9]
    let rotate = setInterval( () => {
        
        document.getElementById("calc-num1").innerHTML = Math.floor(Math.random() * 9) + 1;
        document.getElementById("calc-num2").innerHTML = Math.floor(Math.random() * 9) + 1;
        document.getElementById("calc-num3").innerHTML = Math.floor(Math.random() * 9) + 1;
        document.getElementById("calc-num4").innerHTML = Math.floor(Math.random() * 9) + 1;
    
    }, 50);
    // stop.addEventListener('click', () => {
    //     clearInterval(rotate);
    // });
    
    // with the help of numbers [10, 15, 20]
    let spin = setInterval( ()=> {
    
    let numb = ["10", "15", "20"]; 
    
        function randomElement(completeArray) {
        let comArray = completeArray.length;        
        return completeArray[ Math.floor(Math.random() * comArray) ];        
    }      
    document.getElementById("calc-num5").innerHTML = randomElement(numb);
    }, 50);      
    
    // stop.addEventListener('click', ()=> {
    //     clearInterval(spin);
    // });
    
    // with the help of numbers [25, 50, 75, 100]
    let swing = setInterval( ()=> {
        
    let numb = ["25", "50", "75", "100"];
        
        function randomElement(completeArray) { 
        let comArray = completeArray.length;          
        return completeArray[ Math.floor(Math.random() * comArray) ];        
    }      
    document.getElementById("calc-num6").innerHTML = randomElement(numb);
    }, 50);      
    
    // stop.addEventListener('click', ()=> {
    //     clearInterval(swing);
    // });

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
    displayVal = '';
    evalStrArray = [];
    displayValElement.innerText = '';
    displayResult.innerText = '???';    
}

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
    }
}

stop.addEventListener('click', ()=> {
    clearInterval(spinTarget);
    clearInterval(rotate);
    clearInterval(spin);
    clearInterval(swing);
    reset.classList.remove('used');
    stop.classList.add('used');        
    counter = 90;
    timer = setInterval('progressTime()', 1000);
    audio1.play();
    audio5.play();
});
// timer = setInterval('progressTime()', 1000);

// start.onclick = progressTime;
// reset.onclick = resetTime;   
//     function progressTime() {
//         start.disabled = true;
//         reset.disabled = false;
//         stop = false;
//         setInterval(() => {            
//             if(counter < 1){
//                 clearInterval();
//                               
//                 time.innerHTML = 0;
//             }else if(!stop){
//                 time.innerHTML = counter --;                
//             }
            
//         }, 1000)   
       
//     };

//     function resetTime() {
//         reset.disabled = true;
//         start.disabled = false;
//         clearInterval();
//         time.innerHTML = 90;
//         counter = 89;       
//         stop = true;
//     };    