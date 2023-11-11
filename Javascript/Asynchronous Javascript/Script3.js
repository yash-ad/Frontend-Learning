///.Problems with solution:-

//1.
// Promise.all()
// Send Feedback
// What will be the result of the following code?

const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("a")})
});

const promiseTwo = new Promise((resolve,reject)=>{
    resolve("b")
});

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("c"),10})

})

Promise.all([promiseOne,promiseTwo,promiseThree])
.then((msg)=>{console.log(msg);})

//It will return all the resolved promises if none are rejected else it will return the first rejected promise.
//a,b,c.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2.
// promise vs SetTimeout
// Send Feedback
// What will be logged in the output?
setTimeout(() => {
  console.log('a')
})

new Promise((resolve,reject) => {
  setTimeout(() => {
    console.log('b')
  })
})
//a,b;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// async await
// Send Feedback
// What will happen when the following code runs?
async function x() {
  try{
    await Promise.reject("Rejected!!")
  } catch(e) {
    console.log(e)
  }
}

x()
.catch((msg) => {
  console.log(msg)
})

//"Rejected!!" will get printed once.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// callbacks
// Send Feedback
// What will be the output of the following code?
x((a,b,c) => {
  return a+b+c
},2,3,6)

function x(callback,a,b,c) {
  let str = ""
  setTimeout(() => {
    str += "x"
  });

  str += callback(a,b,c)
  console.log(str)
}
//11.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// True or false
// Send Feedback
// Javascript is a multithreaded language. True or False
 //False: Javascript is a single threaded language.
 //////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Queue priority
// Send Feedback
// Which queue gets priority from the event loop while pushing the callbacks to the call stack?
 //Microtask queue.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Rejection in await
// Send Feedback
// What will happen if the following code runs?
function x() {
  Promise.reject('x')
  return Promise.resolve('y')
}

async function log() {
  const val =  await x()
  console.log(val)
}

log()
//It will print y and give a promise rejection error,Becuase in this case function is returning`Promise.resolve('y')`. 
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// promise vs SetTimeout 2
// Send Feedback
// What will get logged in the console?
const promise = new Promise((resolve,reject) => {
  resolve('a')
})

setTimeout(() => {
  console.log('b')
})

promise.then((msg) => {
  console.log(msg)
})

//a,b
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promise.race()
// Send Feedback
// Write the output of the following code.

const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('a')
    })
  })
  
  
  const promise2 = new Promise((resolve,reject) => {
    resolve('b')
  })
  
  const promise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('c')
    },10)
  })
  
  
  Promise.race([promise1,promise2,promise3])
  .then((msg) => {
    console.log(msg)
  })
  //The Promise.race() will return the first resolved promise
  //b.

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //User logged in or Not:-
  //Using promises:-

    //let userLoggedIn = true;
   //let userLoggedIn = fasle;
//   let userAuthenticity = new Promise((resolve,reject)=>
//   {

//     setTimeout(()=>{
//       if(userLoggedIn)
//       {
//         resolve();
//       }
//       else{
//         reject();
//       }

//     },1000)  //1000 ms = 1 second

//   });


//   userAuthenticity.then(()=>{
// console.log("User Logged In");

//   });

//   userAuthenticity.catch(()=>
//   {
// console.log("User Not logged In");
//   });
  
  //Output:"User Logged In";
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Another way of writing code:-
  //Promise wrapping in a function:-
  //Passing parameters to Resolve and Reject:-

  let userLoggedIn = true;

  function checkUserLoggedIn()
  {

    let promise = new Promise((Resolve,Reject)=>{
setTimeout(()=>{
if(userLoggedIn){
  Resolve("User Logged in Succesfully");
}
else{
  Reject("User has not logged In");
}
},2000)
    })
    return promise;
  }

checkUserLoggedIn().then((Succesmsg)=>
{
console.log(Succesmsg);
})
checkUserLoggedIn().catch((failuremsg)=>{
console.log(failuremsg);
})

//User Logged in Succesfully.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let userNotLoggedIn = false;

function checkUserNotLoggedIn()
{
let promise = new Promise((resolve,reject)=>{
  setTimeout(()=>
  {
  if(userNotLoggedIn){
  resolve("User Logged In");
  }
  else{
    reject("User Not Logged In");
  }
  
  },5000)
})

return promise;
}
checkUserNotLoggedIn().then((succesMsg)=>{
console.log(succesMsg);
})

checkUserNotLoggedIn().catch((failureMsg)=>{
  console.log(failureMsg);
})
//User Not Logged In
// 1 Uncaught (in promise) User Not Logged In