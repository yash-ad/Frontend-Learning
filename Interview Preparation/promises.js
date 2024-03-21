const cart = ["Shoes", "T-shirt", "Glass", "Laptop"];

function createOrder(cart) {
  const promise = new Promise((resolve, reject) => {
    const orderId = "123456";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
    if (!validateCart(cart)) {
      const displayError = new Error("Cart is not valid");
      reject(displayError);
    }
  });
  return promise;
}

function paymentDetails(orderId) {
  return new Promise((resolve, reject) => {
    resolve("Payment Successfully");
  });
}

function validateCart(cart) {
  return true;
}

createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    return paymentDetails(orderId); // Return the promise returned by paymentDetails
  })
  .then((paymentResult) => {
    console.log(paymentResult); // Log the payment result
  })
  .catch((err) => {
    console.log(err.message);
  });




//1.What is a promise in js?
// Promise is an object , representing eventually failure or completion of an asynchronous operation.

//2.What is the use of promises in js:-
// Promises are used to handle asynchronous operations in js, so what is meant by asynchrous opeartion an asynchronous opeartion means that it does not complete immediately it takes some time to execute the code/finish the code.
// Promises allows you to write code for an asynchronous operation to complete without blocking the execution of the rest of the code.

//3.What are the three states of promises?
// The three state of promises are 1.Pending,2.Fulfilled,3.Rejected

//So what is the pending state, it is the intitial state of promise neither has been fulfilled nor been rejected,this is in the pending state.
//So what is the Fulfilled state, This state represents that the promise state has been fulfilled that means the async operation is completed.
//So what is the Rejected phase or state,this state represents that promise has been rejectd due to the async operation is failed

//4.What is `.then()` in promises?
//`.then()` is used to handle the successful resolution of a promises.

//5.What is `.catch()` in promises?
//`.catch()` is used to handle errors the rejection/failure of a promises.

//6.What is the return value of `.then()` and `.catch()` in promises?
// `.then()` and `.catch()` both returns a promise. this allows you to chain promises together for handling resolutions and rejections of one promise , and then handle the successful resolution or rejection to handle the another promise.

//7.What is callBack hell?
 //callBack hell is a situation whereas the callback functions are nested within each other and which can make your code difficult to read and maintain.

//8.How can you use `.then()` and `.catch()` to avoid callback hell in js?
//Yes we can use `.then()` and `.catch()` to avoid callBack hells using to chaining promises together. `.then()` is used to handle successfull resolution of one promise and then  use another `.then()` to handle the successfull resolution of the next promise.

//9.best practices for using `.then()` and `.catch()` in promises?
//Always handle the rejection of a promise, even if you dont expected to be.
//use `.then()` to handle the successfull resolution of a promise and it can handle chain promises together to avoid callback hell.
// for multiple promises to handle we can use `promise.all()` and `promise.race()`.


//10.Why do we use `.then()` and `.catch()` in promises?
//We use `.then()` and `.catch()` in the promises for handling the asychronous operations.to structure the way of code to handle both succesfull and failure outcomes of asynchronous operations.


const groceryCart = ["Raddish","Tomato","Cauliflower","Potato"];

function createOrderTwo(groceryCart){
    // new Promise constructor , Here we pass it as an arrow function that takes two parameters Resolve,reject:-
const promise = new Promise((res,rej)=>{
    //Asynchronous operations or logic here
const orderIdTwo = "313131";
if(orderIdTwo){
 setTimeout(()=>{
    res(orderIdTwo);
 },5000)
}
if(!validateCartTwo){
const error = new Error("Grocery cart is not valid.")
rej(error)
}
})
return promise
}


function paymentDetailsTwo(orderIdTwo){
return new Promise((res,rej)=>{
//Asynchronous operations or logic here:-
res("Payment Sucessfully");
})
};

function validateCartTwo(cart){
return true;
};


createOrderTwo(groceryCart)
.then((orderIdTwo)=>{
console.log(orderIdTwo);
return orderIdTwo;
})
.then((orderIdTwo)=>{
return paymentDetailsTwo(orderIdTwo)
})
.then((paymentResult)=>{
console.log(paymentResult);
})
.catch((err)=>{
console.log(err.message);
})