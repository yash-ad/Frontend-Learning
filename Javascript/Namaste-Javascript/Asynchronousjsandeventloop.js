
//1.
// function a(){
//     console.log("a");
// };
// a()
// console.log("End");

//The function is executed in the sequence when they are called not in the sequence they are defined.


//2.

console.log("Start");

setTimeout(()=>{
console.log("callback within 5 seconds");
},5000)


console.log("End");

//Whenever the javascript program runs the global execution contect is created, javascript will execute line by line the first will be logged to the console is Start and 
//then js will move to the second line which is setTimeout so becuase of setTimeout is a part of web APIs which is given by brpwser and it has a callback function so it will store into the callback register and 
//Here also starts the timer of 5000ms which is 5 seconds and as we knows a javascript wont stop working it waits for none , so this callback function will be stored in a callback queue the callback queue is for only callback functions 
//Now the javascript move to the third line and logs the console of "End". the task completes the global execution context is pops out removed from the call stack
//the callstack is empty here the eventloop comes into the picture eventloop always keep monitoring and it also known as a gatekeeper to track the changes so here eventloop checks whether the callstack is empty or not as soon as the callstack gets empty it takes the callback function from callback (task queue) queue and pushes into the callstack and the callstack will quckly execute.

//Microtask queue have a higher priority,it just store only the function or method which had return from promises and mutation observer.