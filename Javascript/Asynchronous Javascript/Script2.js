//Sync and Async kya hota hai?

//1.What is synchronous in javascript?
 //Synchronous is a javascript by defualt behavior and Jvasceript is a single threaded language that means
 //The code run in a particular sequence line by line from top to bottom, in an exact order of the statements.


//For exmaple:-
console.log(`Im number One`);
console.log(`Im number Two`);
console.log(`Im number Three`);
console.log(`Im number Four`);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 //2.What is Ashychronous in javascript?
  //Asynchronous is an essential concept in javascript that allows your code to run in the backgrounf without blocking the execution ofn the other code.
  //And non-blocking code it happens in an asynchronous.functions running in parallel with other functions.

 ///Here are few examples below:-
// setTimeout();
// setInterval();
// Promises;
// async;
// await;
// fetch;
// axios;
// XMLHttpRequest;
//All of these are examples of Asynchronous.


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Always rememeber `callback` is a function.
  //setTimeout(callback,timeinms) //(callback/Handler,miliseconds)

  

  console.log(`Hey1`);
  setTimeout(function(){
console.log(`Hey2`);
  },1000);
  console.log(`Hey3`);

  //Output:=

  //`Hey1`
  //`Hey3`
  //`Hey2`
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Synchronous always moved to the callstack.
  //Asychronous moved to the register callback then callback queue(Task queue) and when the callstack gets empty then code is moved to the callstack.

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Async code likhne ke liye:-

  // fetch;
  // promises;
  // XMLHttpRequest;
  // setInterval;
  // setTimeout;
  // axios;

  //Ansers above code:-
  // 
  
// async;
// await;
// then;
// catch;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///Promises:-
 //Promise is a constructor function. and it defines with a `new` keyword.
 //There are two properties which promises have 1)State and 2)Result:-

//  There are 3 states in promises
//1.Pending.
//2.Resolve(fulfilled).
//3.Rejected.


//Lets go through an example:-

//Example one:-
let answer = new Promise((resolve,reject)=>{
if(true){
  return resolve();
}
else{
  return reject();
}
});

answer
.then(function(){
console.log("Task is been resolve"); //Task is been resolve //If there is True.
})

.catch(function(){
  console.log("Task is rejected"); //Task is rejected //If there is false.
})


//Example Two:-

let findOutNum = new Promise((resolve,reject)=>{
let n =  Math.floor(Math.random() * 10) ;

 if(n<5 ){
  return resolve();
 }
 else
{
  return reject();
}
})

findOutNum.then(function(){
console.log("below");
});
findOutNum.catch(function(){
console.log("above")
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//.Promises chain example:-

 //Task no 1 : sabse pehle ghar aaoo.
 //Task no 2 : Gate kholo gate lagao.
 //Task no 3 : Khana pakao khana khaoo.
 //Task no 4 : Khana khaake walk karke soh jaoo.

 //Lets do these tasks with using promises:-

 let taskOne = new Promise((resolve,reject)=>{
return resolve("Sabse pehle ghar aaoo");
 })

 let taskTwo =  taskOne.then(function(data){
  console.log(data);
  return new Promise((resolve,reject)=>{
return resolve("Gate kholo gate lagao");
  })
});

let taskThree = taskTwo.then(function(data){
  console.log(data);
  return new Promise((resolve,reject)=>{
return resolve("Khana pakao khana khaoo.");
  })
});

let taskFour = taskThree.then(function(data){
  console.log(data);
  return new Promise((resolve,reject)=>{
return resolve("Khaana khake walk karke sojaoo")
  })

});

let taskFive = taskFour.then(function(data){
  console.log(data);
})
//  Sabse pehle ghar aaoo
//  Gate kholo gate lagao
//  Khana pakao khana khaoo.
//  Khaana khake walk karke sojaoo


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//.Async/Await:-

//Lets take an example of Async/Await:-

async function abcd()
{
 let raw = await fetch('https://randomuser.me/api/');

 let output = await raw.json();
 console.log(output);

};

abcd();

// Output:-

//   results: [
//     {
//       gender: 'male',
//       name: [Object],
//       location: [Object],
//       email: 'jesus.roman@example.com',
//       login: [Object],
//       dob: [Object],
//       registered: [Object],
//       phone: '983-460-796',
//       cell: '670-995-192',
//       id: [Object],
//       picture: [Object],
//       nat: 'ES'
//     }
//   ],
//   info: { seed: '7a582143f7b96375', results: 1, page: 1, version: '1.4' }
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function randomApi(){
  let rawData = await fetch("https://randomuser.me/api/");

  let getOutput = await rawData.json();

  console.log(getOutput);


}

randomApi();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//.What is a concurrency?
 //Js mein sync code and async code ek saath process ho raha tha ye hai concurrency.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
