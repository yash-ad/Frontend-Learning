//Lexical scoping:-
//Part One:-

///Examples
//1.MDN javascript code:-
// function init()       //Parent function
// {

// let name = "Mozilla"; 


// function displayName() //Child function
// {


// console.log(name);

// }

// displayName();//Child function

// }
// init(); //Parent function



//Lets do with this exercise with our ownLogic code :-

// function outerFn()
// {
//  let myName = "Yash";
// console.log(mySecret);  //mySecret is not defined it is not accesible here.

//  function innerFn()
//  {
// let mySecret = 123;
// console.log(myName);//"Yash" It is an accessible here.

//  }
//  function innerTwoFn()
//  {
// console.log(mySecret); //mySecret is not defined it is not accesible here.
// console.log(myName);//"Yash" Here is  also an accessible.

//  }
// innerFn();

// innerTwoFn();

// }
// outerFn();
//console.log(myName); // Error myName is not defined.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Closures:-
//1.
//  let i = 10;

//  function outerFn()
//  {
//  let j = 20;
//  console.log(i,j); //10 20
//  function innerFn()
//  {
// let k = 30;
// console.log(j,k); //20 30
//  }
//  innerFn();
//  }
//  outerFn();



 //2.More on closures:-
let a = 100;

function outSide()
{
 let b = 200;
 console.log(a,b);

 let inSide = function()
 {

    let c = 300;
    console.log(a,b,c);
    a++;
    b++;
    c++;


 }
 return inSide;
}
// outSide(); // 100 200
let inner = outSide(); 
inner();  // 100 200
         //  100 200 300

//Seperate execution context:
inner = outSide(); //101 200
inner(); // 101 200 300


//3.What is the Expected Output
// What will the following code snippet print?
// function Adder(x) {
//   return function(y) 
//   {
//     return x + y;
//   };
// }
// var add5 = Adder(5);
// var add10 = Adder(10);
// console.log(add5(2));
// console.log(add10(2));

///Code explanation:-
//The given code snippet defines a higher-order function called Adder that takes a parameter x 
//and returns an inner function. 
//The inner function, when called with a parameter y, returns the sum of x and y. 
//Then, the code creates two instances of the inner function using different values for x (5 and 10), 
//assigns them to the variables add5 and add10, 
//and finally calls these inner functions with a parameter 2.

// var add5 = Adder(5); 
//calls the Adder function with x as 5, and assigns the returned inner function to the variable add5.

// var add10 = Adder(10); 
//calls the Adder function with x as 10, and assigns the returned inner function to the variable add10.

// console.log(add5(2)); 
//calls the inner function stored in add5 with y as 2, 
//resulting in the sum of 5 + 2, which is 7.

// console.log(add10(2)); 
//calls the inner function stored in add10 with y as 2, 
//resulting in the sum of 10 + 2, which is 12.


//4.Closure In JavaScript
// What is the expected output?

//Self Invoking Functions are used.
//The function that IIFE is returning contains the lexical context of the IIFE and it is stored in `add` and it gets invoked(call) 5 times,
//and each the counter is updated in the same lexiacal context:-
//IIFE(Immediately Invoked Function Expression):-

//The provided code snippet demonstrates the concept of closures in JavaScript by creating a function called `add` 
//that returns an inner function. 

//The inner function captures and increments a counter variable defined in the outer function's scope. 
//Let's break down the code and predict the expected output:
let add = (function ( ) {
  let counter = 0;
  //Inner function
  return function ( ) {
       counter += 1;  //Increments
       return counter;
}
})();    
console.log(add());//1
console.log(add());//2
console.log(add());//3
console.log(add());//4
console.log(add());//5


//The outer function is immediately invoked using (function() { ... })(), 
//creating a closure. Inside this outer function, 
//a counter variable is declared and initialized to 0.

//The outer function returns an inner function that has access to the counter variable due to closures. 
//The inner function increments the counter by 1 and returns its value.

//The variable add now holds the inner function returned by the (immediately invoked outer function).

//When add() is called for the first time, it increments the counter (which was 0) to 1 and returns 1.
//When add() is called a second time, it increments the counter (which is now 1) to 2 and returns 2.
//When add() is called a third time, it increments the counter (which is now 2) to 3 and returns 3.
//When add() is called a fourth time, it increments the counter (which is now 3) to 4 and returns 4.
//When add() is called a fifth time, it increments the counter (which is now 4) to 5 and returns 5.



//Part Two:-

// function makeFunc()
// {
// const Name = "Firefox";

// function displayName()
// {
// console.log(Name);
// }
//  return displayName;
// //reference pass as a return.  
// }
// const myFunc = makeFunc();
// myFunc();



//Lets change the background color using DOM:-
//Lets make the function in a different way with understanding of lexical and closure as well:-

// function clickHandler(color)
// {

// //document.body.style.backgroundColor = `${color}`;

// return function backgroundColor()
// {
//     document.body.style.backgroundColor = `${color}`;   //It will access because of lexical scope.

// };

// };


// document.getElementById("Orange").onclick = clickHandler("orange");

// document.getElementById("Green").onclick = clickHandler("green");


// function clickHandler(color)
// {

//  return function changeBckgroundClr()
//  {
// document.body.style.backgroundColor = `${color}`;


// };

// };

// document.getElementById("Purple").onclick = clickHandler("purple");

// document.getElementById("Yellow").onclick = clickHandler("yellow");