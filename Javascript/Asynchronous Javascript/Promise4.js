//Promises:-

//A Promise always accepts function.
const promiseOne = new Promise((resolve,reject)=>{
//Do an async task using setTimeout()

setTimeout(function(){
    console.log("An async task is complete.");
    resolve();  //Resolve method call (Invoked)
},5000)
})


//`.then` is connected and relation with`resolve`.

promiseOne.then(()=>
{
console.log("Promise consumed");
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Another way of writing code directly using sytax without declarung a variable:-

new Promise((Resolve,Reject)=>{
setTimeout(()=>{
console.log("Async Task 2");
Resolve();
},2000)
}).then(()=>{
console.log("Async task 2 resolved");
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Data consumption and values

const promiseThree = new Promise((Resolve,Reject)=>{
setTimeout(()=>{
Resolve({userName:"Yash",userId:31}); //An object passed as a parameter in resolve.
},1000)
});


promiseThree.then((data)=>{
console.log(data);
}) //{ userName: 'Yash', userId: 31 }


////////////////////////////////////////////////////////////////////////////////////////////////

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(()=>{
let error = false;
if (!error) {
 resolve({username:"Spiderman",userId:"123"})   
}
else{
    reject("ERROR:Something went wrong")
}
    },1000)
});


//Promise chaining:-
 //
promiseFour
.then((user)=>{
console.log(user);
// return user.username
return user.userId;
 })
// .then((username)=>{
// console.log(username);})
.then((userId)=>
{
    console.log(userId);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("The promise is either Resolved or Rejected");
})


//finally():-
//A keyword in javascript the callback is execute when the promise is settled(resolve or rejected.)

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Async Await and try catch ;-

//True;
const promiseFive = new Promise((resolve, reject) => {
   setTimeout(()=>{
let error = true;
if(!error){
resolve({ userName : "Yash"  ,userPassword :  "3198"});
}else{
reject("Error : Javascript error went wrong")
}
   },1000) 
})

async function consumePromiseFive()
{
 try{
    const response = await promiseFive;
 }
 catch(error){
    console.log(error);
};
}
consumePromiseFive();
//Error : Javascript error went wrong


///.(For practice purpose only):-

//False;


const promiseSix = new Promise((resolve, reject) => 
{
    setTimeout(()=>
    {
       
 let result = false;

// / ! is the logical NOT operator in JavaScript. 
//   It negates the value of the expression that follows it.
//   In this case, result is false, so !result evaluates to true. 
//   This means the condition inside the if statement is true.

if (!result) 
{
  resolve(console.log("Resolved program sucessfulyy")); 
}
else
{
reject("Something went extremely wrong")
}

    },1000)
});

async function consumePromisesSix()
{
try{
    const checkResponse = await promiseSix;
}
catch(result){
console.log(result);
}
};

consumePromisesSix() //Something went extremely wrong