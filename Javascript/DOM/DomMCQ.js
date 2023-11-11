// 1.DOM Structure:-
// Choose the correct statement/statements about the DOM descending relationship :-
// 1).The topmost object in the DOM is the Browser window.
// 2).After the window.DOM is the document displayed in the browsers window.


//2.API
// What does API stands for?
// Application Programming Interface.


//3.What is the output?
// What is the output of following code snippet?
// console.log(window.document==document);
//True


//4.Find the output
//What is the result of the following code snippet?
//console.log(window.location === document.location) //True.
// Solution Description:-
// The window.location object can be used to get the current page address (URL) 
// and to redirect the browser to a new page. The Document.location read-only property returns a Location object, 
// which contains information about the URL of the document and provides methods for changing that URL and loading another URL. 

//5.This
// What will be the output of following code?
// function test(){
// return this;
// }
// console.log(test()==window);//True.
// Solution Description:-
// In this case, the function's this returns the global/window object i.e. test() returns window object. 
// Thus console.log(test()==window); prints true in the console.



//6.InnerHTML:-
// Why is Element.innerHTML used?
// Gets or Sets the text.



//7.getElementsByTagName:-
// Why is the following code snippet used?
// document.getElementsByTagName(name);
// Find elements by tagName: It is used to find the elements by tagName.





//8.Event handler
//Event handler is nothing but Function.
//Explanation: An event handler is in general, a function that handles or responds to an event. 
//For example onclick, onkeypress, onload etc are event handler functions.




//9.Function Invocation
//When will the browser invoke the handler?
//Specified event occurs.
//The browser will invoke the handler when a specified event occurs. In event-driven programming, a handler (also known as an event handler or callback function) is a piece of code that is executed in response to a particular event being triggered. Events can be user interactions (e.g., clicks, keypresses) or other actions like data loading, timeouts, etc.

//For example, if you have a button on a webpage and you want to perform a certain action when the button is clicked, 
//you would attach a click event handler to that button. The handler function will only be invoked when the user clicks the button (the specified event). Similarly, different events (e.g., mouseover, form submission, etc.) can have their own corresponding handlers, and they will be invoked when their respective events occur.





//10.Mouse events
//When are mouse events generated?
// 1) When the user clicks over a document.
// 2) When user moves a document.




//11.Mouse events - I
// event occurs when the user clicks on an element:-
// onClick.




//12.Browser Invoking Handler
// The browser invokes the handler when- A specified event occurs.
// Explanation: When an event of the specified type occurs on the specified target, the browser invokes the handler.
// e.g. onclick function is executed when the mouse is clicked.




//13.Script tag
// Where can we add script tag in html code?
// In head and In body.




//14.External JavaScript
//What are the advantages of using external Javascript?
// It separates HTML and code.
// It makes HTML and JavaScript easier to read and maintain.
// Cached JavaScript files can speed up page loads.


//15.Linking external JavaScript
// How to link external JavaScript in a HTML page?
// <script src="script.js"></script>


//16.onkeydown event.
//The onkeydown event occurs when the user is..
//Pressing a key.



//17.Rotation of mouse wheel:-
//Which among these is a property that reports rotation of mouse wheel axes?
//Gets the distance that a mouse wheel has rotated around the x-axis (horizontal).
//The deltaX property returns a positive value when scrolling to the right, and a negative value when scrolling to the left, otherwise 0.


//18.keyCode property
//What value does the keyCode property holds when a Shift key is pressed for adding punctuation character?
//Digits.



//19.key type
//Which of the following properties is used to specify the key type when pressed?
//Keycode.
//The keyCode property returns the Unicode character code of the key that triggered the onkeypress event or the Unicode key code of the key that triggered the onkeydown or onkeyup event.



//20.Event Bubbling
//In Event bubbling, events starts from?
//deepest element or target element to its parents.


//21.Event bubbling prevention
//Event bubbling can be prevented by using
//event.stopPropagation();



//22.Strict Mode
//Choose the correct statement about the strict mode:-
//It applies to individual functions and also to the entire script.
//It prevents or throws errors when relatively "unsafe" actions are taken (such as gaining access to the global object).



//23.Event type
//Which property specifies the type of event triggered?
//Type.



//24.Drag and Drop
//Which of the following are the drag and drop events?
//Both drop and dragstart.



//25.Script Tag for External JavaScript
//The external JavaScript file must contain the <script> tag.
//False.


//26.Event Handling
//The process by which the browser decides which objects to trigger event handlers on is?
//Event propagation.



//27.addEventListener:-
// Which of the following statements about the arguments of addEventListener() is/are True.
// 1.The first argument to addEventListener() is the event type for 
// which the handler is being registered.  
// 2.The second argument to addEventListener() is the function that 
// should be invoked when the specified type of event occurs.



//28.Changing text in HTML
//Choose the correct JavaScript syntax to change the content of the following HTML code.
//<p id="ninjas">Coding Ninjas</p>:-
// document.getElementById(“ninjas”).innerHTML=”I am a Ninja”;
// document.querySelector(“#ninjas”).innerHTML= “I am a Ninja”









