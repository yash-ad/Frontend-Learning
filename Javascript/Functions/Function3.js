//1.
// Run Subtract
// What is the expected output of following code?
let add = function (a, b) {
    return a+b;
}

let subtract = function (a, b) {
    return a-b;
}

let multiply = function (a,b){

    return a*b;
}

let outPut = function (func) {
    let x = 3;
    let y = 2;
    return func(x, y);
}
console.log(outPut(subtract));  //1
console.log(outPut(add));       //5
console.log(outPut(multiply));  //6


//2.
// Pass Function to Function
// What is the expected output of following code?
let addition = function(a, b) {
    return a+b;
}

let subtraction = function(a, b) {
    return a-b;
}

let result = function (func) {
    let x = 5;
    let y = 3;
    return func(x, y);
}

console.log(result(add)); //8


//Advanced Function Concepts :-

//1.Arrow Function:-

//In Javascript the Arrow function is a feature which were introduced in ES6 2015 concept,it allows you to create functions in a cleaner way compared to regular functions.

//[1] Example one:-
//On the left hand side Function expression and On the right hand side Arrow function :-
let greet = () => {
 console.log(`Hello Js im an Arrow Function`);

}

greet(); //Hello Js im an Arrow Function



//[2] Example Two:-

let countMyName = (count) => {

    let myName = "Yash";
for(let i = 0; i <= count; i++){
    console.log(`Hello Js , My name is ${myName}`);

}

};

countMyName(5); //Hello Js , My name is Yash ; 5 times



///Simple arrow function within function expression in an oneline.


//[3] Example Three:-


let addNum = (num) => num + num;

console.log(addNum(10)); //The value is 20;





