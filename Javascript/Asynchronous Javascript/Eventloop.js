///1.How Js engine executes the code using callstack:-

 //Whenever a javascript program run,the global execution context is created,
 //and this global execution context is pushed into the callstack.
 //The callstack does not have a timer.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///2.Behind the scenes in browser:-
 // Browser -> Js engine -> callstack -> Program runs.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///3.Webs APIs in Js:-
//1.setTimeout().
//2.Dom API.
//3.fetch().
//4.Local storage.
//5.Console.
//6.Location.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///4.What is the global object?
 //The global object is WINDOW.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SetTimeout present in the global object or global scope.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///5.Eventloop and callback (task) queue in js:-
 //Register callback -> callback (task) queue.

 //callback function put its into the callback (task) queue.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.Interview questions:-

///6.What is an event loop?
 // An eventloop in javascript is a constantly running process that monitors both the callback queue(task queue),
 // And callstack.

 //The main task or job of the eventloop is to take callbacks from the microtask queue or callback queue and put them into the
 // the callstack.This operation is performed when the call stack is empty,If there are tasks present in the both the queues, so then
 // it gives priority to the microtask queue.so here eventloop is like a gatekeeper.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///7.How event listeners work in Js?
 //The eventlistener is superpower given by the browser to javascript engine.
 //through the window or global object inform of web API, which is the Dom API  basically.
 //Eventlistener registers to the callback method.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 //1)Why do we need callback queue(task queue)?
 //callback (task) queues are essential and play a crucial role,
 //enabling asynchronous behavior of javascript  for creating responsive and efficient applications
 //The callback (task) queues its a part of event loop mechanism where asynchronous execution,Non-blocking,event handling and parallel execution happened.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2)How fetch() function works?

//The fetch  is a function in javascript,where the http request to a specified resource.
//fetch() returns a Promise, which allows you to use the .then() method to handle the response.
//the fetch works making a request (URL),
//Asynchronous behavior,Promise-based API,Handling the response,
//Handling different types of responses like text or json and last error handling using catch() method to catch the errors.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3)What are microtasks in js?
 //Microtasks in JavaScript refer to a specific type of task that is executed,
 // in the microtask queue of the JavaScript event loop. 
 // They have higher priority than task queue, 
 //which means they will be executed before the  task queue in the event loop.
 //The microtasks include Promises,Mutation observer,
 //And understanding of microtasks queue is important in scenarios where the combination of asynchronous,
 //Operations,especially when using promises and working with the DOM.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4)What can come into the microtask queue?
 //All the callback functions which comes from the promises,
 //will go inside the microtask queue and there is something known as mutation observer.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//5)Mutation observer?
 //Mutation Observer callbacks are executed as microtasks when they are triggered by changes in the DOM.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///.Example one:-
function a()
{
console.log("a");
}
a();
console.log("End"); //It executes the code line by line that means in synchronous.
//a
//End.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.Example Two:-
//How setTimeout works behind the scenes in the browser:-
//Event Loop and callback queue in js:-
console.log("Start");

const cb = setTimeout(()=>{
console.log("callback");
},2000)
//It regesters the callback and takes time get into a timer for milseconds.

console.log("End");
//Output:-
 //start    - 1
 //End      - 2
 //callback - 3

 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//How Event listeners work in js:-

//Example three:-
console.log("Start task");


//Click event handler inside a btn
document.getElementById("btn")
.addEventListener("click",function cb(){
    console.log(" clickable Callback");
});
console.log("End task");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Okay now this time in our code there is a setTimeout() and as well as fetch() method or function.
//fetch() basically goes and request an api call to server from web browser.
//fetch() function returns a promise which is going to be resolve as a response.
console.log(" lets Start the task ");

setTimeout(()=>{
console.log("Cb setTimeout");
},3000);

fetch("https:api/netflix.com")
.then(()=>{
    console.log("Cb Netflix");
});
console.log(" lets End the task ");

//Output:-
 // lets Start the task - 1
 // lets End the task - 2
 // Cb Netflix - 3
 // Cb setTimeout - 4

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
