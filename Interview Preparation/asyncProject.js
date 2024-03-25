

//1.setTimeout():-
//How to use setTimeout() and clearTimeout():-
//Changing the text using setTimeout() method or function timer sets for 5000 miliseconds.
// const printTextFn = function(){
//     let changeH1 = document.querySelector('h1');
//     changeH1.innerHTML = "Asynchronous JavaScript";  
// };

// let changeTheText = setTimeout(printTextFn,5000);


//     let stopButton = document.querySelector('#stop-btn');
//     stopButton.addEventListener('click',()=>{
//         clearTimeout(changeTheText);
//         console.log("Stop");
//     });
 



//2.setInterval() and clearInterval():-

// const printMyName = function(){
//     console.log("Yash Dandnaik",Date.now());
// }

// let intervalId;
// const setIntervalFunc =function(){
//     intervalId =  setInterval(printMyName,1000);
// };



// const clearIntervalFunc = function(){
// clearInterval(intervalId);
// };

// let startButton = document.querySelector(`#start-btn`);

// startButton.addEventListener('click',setIntervalFunc);


// let stopButton = document.querySelector('#stop-btn');
// stopButton.addEventListener('click',clearIntervalFunc)



//3.Background color changer using the setInterval() and clearInterval():-

function randomColor (){
    const hexValues = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hexValues[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId;
const startChangingColor = function (){
    intervalId = setInterval(changeBgColor, 1000);

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function (){
    clearInterval(intervalId);
    intervalId = null;
};

let startButton = document.querySelector('#start-btn');
startButton.addEventListener('click', startChangingColor);

let stopButton = document.querySelector('#stop-btn');
stopButton.addEventListener('click', stopChangingColor);
