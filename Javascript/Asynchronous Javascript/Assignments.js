//1.Assigment Number one:-

 //Create a simple counter function, which when called will return two functions: 
 //start() and stop(). 
 //Use those functions to start the counter and stop them. 
 //The start() function should start printing 0 …. N - 1 
 //with one second delay between every logs. 
 //The stop() should pause the counter.
 // Use setTimeout() and Promises to do this.

  //So here The javascript code creates a simple counter function with using `start()` and `stop` functions using `setTimeout()` and Promises:-7

  function createCounter() {
    let isRunning = false;
    let count = 0;
    let intervalId;

    function start() {
        if (!isRunning) {
            isRunning = true;
            return new Promise(resolve => {
                intervalId = setInterval(() => {
                    console.log(count);
                    count++;
                }, 1000);
                resolve('Counter started');
            });
        } else {
            return Promise.resolve('Counter is already running');
        }
    }

    function stop() {
        if (isRunning) {
            isRunning = false;
            clearInterval(intervalId);
            return Promise.resolve('Counter stopped');
        } else {
            return Promise.resolve('Counter is already stopped');
        }
    }

    return { start, stop };
}

const counter = createCounter();

// Starting the counter
counter.start().then(message => {
    console.log(message);
});

// Stopping the counter after 5 seconds
setTimeout(() => {
    counter.stop().then(message => {
        console.log(message);
    });
}, 5000);

// Creating the Counter:
// We have a function called createCounter that sets up the counter.
// Setting Up Variables:

// Inside createCounter, there are some boxes where we can store information:
// isRunning keeps track of whether the counter is currently counting or not.
// count keeps track of the current number in the counter.
// intervalId is like a ticket that helps us control time.
// Starting the Counter (start):

// If the counter isn't already counting, we can tell it to start.
// When we start it, it gives us a special ticket (a Promise) that says, "I'll let you know when I've started".
// While it's counting, it prints numbers every second.
// Stopping the Counter (stop):

// If the counter is currently counting, we can tell it to stop.
// When we stop it, it gives us another ticket (a Promise) that says, "I'll let you know when I've stopped".
// Using the Counter:

// We create a counter by saying const counter = createCounter();.
// We start it by saying counter.start(). This gives us a ticket that says, "I'll let you know when I've started".
// After 5 seconds, we tell it to stop by saying counter.stop(). This gives us a ticket that says, "I'll let you know when I've stopped".
// Results:

// When we start the counter, it starts printing numbers with a one-second gap between each. It starts from 0, then 1, and so on.
// After 5 seconds, it stops and tells us "Counter stopped".

////////////////////////////////////////////////////////////////////////////////////////////////

///.Assignment No  2:-
 //Custom Asynchrony:-
//  Given a function randomAsyncFunction() which completes after an unknown amount of time and does not return a promise. 
//Write a function asyncWithCallback() that will take a callback function and will call the randomAsyncFunction() and the callback() will be executed only after the randomAsyncFunction() is completed.


//1.randomAsyncFunction(callback):-
  //This is a function that pretends to do some work that takes an unknown amount of time,
  //much like a computer program that takes some time to process things.
  //It accepts a special instruction called(`callback`) which will follow once its done with its job.

  //First it pretends to figureout how long it will take(`randomTime`),somwhere between 0 to 3 seconds.
  //Then it uses `setTimeout` to wait for that moment of time before pretending to finish.

  //When its done , it prints a message saying "randomAsyncFunction completed" and then follows the `callback` instruction.

// function randomAsyncFunction(callback) {
//     const randomTime = Math.random() * 3000; // Simulating unknown processing time (between 0 to 3 seconds)
//     setTimeout(() => {
//         console.log("randomAsyncFunction completed");
//         callback();
//     }, randomTime);
// }

// //2.asyncWithCallback(callback):-
//  //This fuction helps us use `randomAsyncFunction`.It takes `callback` as an `input`,
//  //Which is like saying,"When you are done,do this other thing specified by` callback`".
//  //Inside `asyncWithCallback`, it calls `randomAsyncFunction` and tells it to use use`callback` when its finished.

// function asyncWithCallback(callback) { //parameter
//     randomAsyncFunction(callback);    // `callback` passed as an argument.
// }

// //3.Example Usage:

// // Here, we define a function called myCallback. 
// //It's our way of telling JavaScript what to do when randomAsyncFunction is done.

// // myCallback is quite simple.
// // It just prints a message saying it was executed after randomAsyncFunction.


// function myCallback() {
//     console.log("Callback executed after randomAsyncFunction");
// }


// //4.Running the Code:

// // The last line, 
// //asyncWithCallback(myCallback);, 
// //is like saying, "Hey, do the thing that might take some time, 
// //and when you're done, use myCallback to handle it."
// // When you run this code, 
// //it starts the process. 
// //randomAsyncFunction takes a random amount of time (up to 3 seconds) to finish. 
// //When it does, it prints a message and calls myCallback. 
// //Then, myCallback prints its own message.

// asyncWithCallback(myCallback);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//(For practice purpose only):-
///.Assignment No  3
 //Custom Asynchrony:-
//  Given a function randomAsyncFunction() which completes after an unknown amount of time and does not return a promise. 
//Write a function asyncWithCallback() that will take a callback function and will call the randomAsyncFunction() and the callback() will be executed only after the randomAsyncFunction() is completed.


 

function randomAsyncFunction(callback){
    const randomTime = Math.random * 3000;
    setTimeout(()=>{

console.log("randomAsyncFunction completed");
callback()
    },randomTime);
};

function asyncWithCallback(callback){
randomAsyncFunction(callback);
}

function myCallback()
{
console.log("Execution completed");
}


asyncWithCallback(myCallback); //Function `myCallback` passed as an argument, to the asyncWithCallback function.
