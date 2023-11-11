///Promise is a javascript object that can be links to `Producing code` and `Consuming code`.
//A javascript object can be:-
 //1.Pending.
 //2.Fulfilled.(Resolve)
 //3.Rejected.

///The promise object supports two properties the first is `PromiseState` and the second is `PromiseResult`.
 //While a promise is `pending` working , the result is `undefined`.
 //When a promise object is `Fulfilled`, the result is `Value`.
 //When a promise object is `Rejected`, the result is `An error object`.

 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//1.while a promiseState is `pending` working and the result is Undefined
let promisePending = new Promise(()=>{}); //Callback function  as an argument
console.log(promisePending);//Promise { <pending> }
//PromiseState is `pending` and PromiseResult is `Undefined`.

//2.When a promise object is `fulfilled`(resolve) and the result is `value`.
let promiseFulfilled = new Promise((resolve,reject)=>{
resolve("The state is Fulfilled and result is value"); //resolve function
});
console.log(promiseFulfilled);//Promise { 'The state is Fulfilled and result is value'}.

//3.When a promise object is `Rejected` and the result is `An error object`.
let promiseRejected = new Promise((resolve,reject)=>{
reject("An error occured"); //reject function 
})
console.log(promiseRejected); //Promise { <rejected> 'An error occured' }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//With an API:-
//setTimeout():-

let promiseMe = new Promise((resolve,reject)=>{

setTimeout(()=>{
    resolve({message:"Succesfully"});
},3000);
});


console.log(promiseMe);
// Promise
// [[PromiseState]]
// : "fulfilled"
// [[PromiseResult]] 
// : Object


//To access the object and its an output:-
//Use `then` function

promiseMe.then((result)=>{
console.log(result);
});//{message: 'Succesfully'}


//For practicing:-
// let myName = new Promise((resolve)=>{
// setTimeout(()=>
// {
// resolve({message:"Im yash"});
// },5000)
// }
// );
// let myName = new Promise((reject)=>{
//     setTimeout(()=>
//     {
//     reject({message:"An error happened"});
//     },5000)
//     }
//     );

myName.then((result)=>{
console.log(result);
});//{message: 'Im yash'}


// myName.catch((error)=>
// {
//     console.log("An error happened",error);
// });//{message: 'An error happened'}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Promises
//1.What state will the variable `x` be when it gets logged?

// let x = new Promise(()=>{
// })
// console.log(x);

//Pending
//It will  never get fulfilled as resolve() or reject() is never called.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///.Javascript Callbacks:-

//1.What is a javascript callbacks?
 //A callback is a function in javascript that passed as an argument to another function,
 //a callback function can run after another function has finished.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//.setTimeOut:-
 //1.What is a `setTimeout`?
  //`setTimeout` is an in-built browser API(Application programming interface)In javascript,
  //its provided by the browser environment(window)to allow javascript code to schedule tasks to be executed at a later time.

  //And it is used in conjuction with Asychronous programming like callbacks,promises,asyn/await to manage the flow of asychronous operations.
 //The setTimeout() is executed only once.

 ///.Note:- Is `setTimeout` part of javascript?
  //No,Its a part of webAPI provided by the browser.


  ///.An example:-

  console.log(1);
  setTimeout(function(){
console.log(2);
  },0);
  console.log(3);

  //.Guess the output:-
  //1
  //3
  //2

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Async try catch
// Send Feedback
// Consider the following function:
async function x() {
  try{
    await Promise.reject("Rejected!!")
  } catch(e) {
    console.log(e)
  }
}
// What will happen when it gets called?
 //Try catch block will catch the errors caused by promise rejection if it is called using await.


  