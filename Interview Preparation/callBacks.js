

//callBack function that takes function as an argument:-
function doSomethingAsync(callback){
 // Simulate an asynchronous operation (e.g., fetching data)
 setTimeout(()=>{
callback("Data successfully fetched")
 },5000) //simulating a delay of 5000 miliseconds
}


// Callback function to handle the result
function handleResult(result){
console.log(result);
}

//Registering the callback function.
doSomethingAsync(handleResult);







