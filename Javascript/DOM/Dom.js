// //Hello-button clickable:-

// let helloButton = document.getElementById("btn");

// helloButton.addEventListener('click',function(){

//   alert("Hello Javascript DOM")  
// });




// //Hello-button clickable:-
// //Using seperated function:-

// function sayHello(){
//  alert("You logged In");
        
// };


// function sayGoodBye(){


//     alert("See you later!")
// };

// let helloButtonTwo = document.getElementById("btnTwo");

// helloButtonTwo.addEventListener("click",sayHello);


// let goodByeButton = document.getElementById("btnTwo");

// goodByeButton.addEventListener("click",sayGoodBye);



// function logOutFn()
// {

// alert("You Logged Out")

// };



// let logOutBtn = document.getElementById("btnThree");

// logOutBtn.addEventListener("click",logOutBtn);

// // We are calling this function in html button id="btnThree" using onClick attribute.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////





//CounterBox clicks on js logics:-
// 1.Count Clicks
// Send Feedback
// Let's make a counter using JavaScript. But it's a bit different; it increases only when you click on a box.
// So create a big box in the center of the web page and add a counter below it.
// When you click on the box the counter should increases by one.


// const clickBox = document.getElementById("clickBox");

// const counter = document.getElementById("counter");


// let Count = 0;

// clickBox.addEventListener("click",() => {

// Count++;

// counter.textContent = Count;
// }); 







//CounterBox clicks on js logics:-
// 1.Count Clicks
// Send Feedback
// Let's make a counter using JavaScript. But it's a bit different; it increases only when you click on a box.
// So create a big box in the center of the web page and add a counter below it.
// When you click on the box the counter should increases by one.

"use strict";
const clickAble = document.getElementById("clickBox");

const counter = document.getElementById("counter");

let count = 0;

clickAble.addEventListener('click',() =>
{

count++;
prompt(count);


counter.textContent = count;

});




// Explanation:

// In the HTML, we create a div element with the class "box" that represents the clickable box. 
// We also have a p element to display the click count.

// In the CSS, we style the box and center it on the webpage using flexbox.

// In the JavaScript, we use document.getElementById to get references to the box and the counter elements. 
// We initialize a count variable to keep track of the clicks.

// We add an event listener to the box using addEventListener. 
// When the box is clicked, the callback function is executed. 
// Inside the function, we increment the count and update the text content of the counter element to display the new count.

// Now, when you open the HTML file in a web browser, you'll see a centered box. Clicking on the box will increase the counter displayed below it.

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//MouseOver and mouseOut event:-


//OuterDiv:-
// const outerDiv = document.getElementById("Outer");

//InnerDiv:-
// const innnerDiv = document.getElementById("Inner");

//Eventlisteners:-
// outerDiv.addEventListener("mouseover",function(){
// alert("MouseOver");
// });

// outerDiv.addEventListener("click",function(){

//     alert("You clicked outerDiv");
// });

// innnerDiv.addEventListener("click",function(event){

// alert("You clicked  innerDiv");
// event.stopPropagation();
//Event bubbling can be prevented by using,
//event.stopPropagation();
//deepest element or target element to its parents.



//Keyboard keys event:-


// let inputElement = document.getElementById("search");

// inputElement.addEventListener("keypress",function(){


// alert("Key-Press");
// });




//Arrow-Keys Up-Down keyUp and keyDown


// inputElement.addEventListener("keyup",function(){


//    alert("keyUp");
// });

// inputElement.addEventListener("keydown",function(){


//     alert("keyDown");
// });

