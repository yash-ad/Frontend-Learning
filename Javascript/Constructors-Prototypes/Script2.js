//1.Output - Explicit Binding
// Send Feedback
// Determine the output and its reason.
const CN = {
   name: "Coding Ninjas"
};

function print(){
   console.log(this) ;
}

//print.bind(CN)() ; //{ name: 'Coding Ninjas' }
//Note:The window object also has a property ‘name’ with a value equal to the empty string (‘ ’).

//The CN object will be printed as its hard bound with the current execution context of the function.

//Explanation: 
//The CN object gets hardly bound to the current execution context of the function using `bind`. 
//The bind() function will bind the value of ‘this’ inside print(),
//to the object you specify in its parenthesis (the CN object).

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2.Explicit Binding Examples:-
// Send Feedback
// Look at the code given and find which of the following is an example of an explicit binding rule? 
//Assume all function calls are being made in the global scope. (multiple options correct)
var joe = {
   name: "Joe"
}; 

function print(){
   console.log(this) ; 
}
// joe.print(); //Joe is not a function.

//print.apply(joe); //{ name: 'Joe' }.

//window.print.call(joe);//Window is not defined.

//print.call(joe) //{ name: 'Joe' }.

//print(joe); //Global object/Scope. //This is not explicit binding.

//print.bind(joe)(); //{ name: 'Joe' }


//Explanation: 
//The print(joe) calls the print() function with ‘joe’ as an argument. 
//It has nothing to do with binding. 
//Since it’s directly called in the global scope, it has no binding.
//Hence this is not explicit binding.

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//3.Compare the Outputs
// Send Feedback
// Look at the following code snippet and select the correct output.
let myName = {
    name: "Yash",
    hello: function (){
       console.log("hi, I am " + this.name) ;
    }
}

let globalHello1 = myName.hello.bind(myName) ;
let globalHello2 = myName.hello ;
globalHello1();
globalHello2.bind(myName)();
// Note: window{--} represents the window object

// Solution Description:-
// Explanation: 
//The globalHello1() is hardly bound with the value of ‘this’ set to the myName object. 
//Therefore it prints ‘hi, I am Yash’.

// Whereas globalHello2() contains a reference to the hello() function, 
//defined inside myName. 
//But we bind the value of ‘this’ inside it to the myName object, 
//using the bind() method. 
//Therefore it also prints ‘hi, I am Yash’.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4.Function Calls
// Send Feedback
// Which of the following function calls will print the joe object? (multiple options correct)
var joe = {
    name: "Joe"
}; 

function print(){
    console.log(this);
}

//print.call(joe); //{ name: 'Joe' }

//print.apply(joe) //{ name: 'Joe' }

print.bind(joe) //This will not print.
    
let boundPrint = print.bind(joe);
boundPrint() //However this will print when we bound to another function.

//print.bind(joe)();//{ name: 'Joe' }

//print(joe) //Global object / scope.

//joe.print(); //TypeError: joe.print is not a function


///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Examples solving:-
//1.
function a(){

    console.log(this);
}
const b = 
{
c:"Hello",d:a
}

b.d(); //{ c: 'Hello', d: [Function: a] }

//2.
function fn()
{

  console.log(this);  
}
const v = 
{
a:"Hello",b:fn
}
v.b(); // {a:"Hello",b:[Function:fn]}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////#


//5.3rd Rule Implicit binding:-
//In my code `userName` is an object with a `greet` function,This funtion uses console.log to,
//Print Hello followed by `this` keyword

//Created an object `userName` with a `greet` function.
let userName = 
{
name : " I'm Luciefer",
greet:function()
{
console.log("Hello",this);
}
};
//userName.greet();//Hello { name: 'Lucifer', greet: [Function: greet] };

// let getOutput = userName.greet();

// console.log(getOutput);


//Created a new variable `getOutput` and assigns reference to the function userName.greet to it.
//Now at this point getOutput is just a reference to the greet function and username object is not connected to it
// let getOutput = userName.greet;


// getOutput();
//Invoked the getOutput();
//When you call getOutput(), you are essentially calling the standalone function that you assigned to the getOutput.
//Since you are calling without any context,the `this` keyword inside a greet function doesn't refer to the userName object.
//Instead it refers to the global object in a browser environment.

//So when you see the Hello[object Window] or Hello undefined, it is because the function` this` keyword is not pointing to the `userName` object.
//Instead its pointing to the typically global scope.

//In simple terms, when you take a method (like greet) out of an object, 
//and call it on its own (getOutput()), 
//it loses its knowledge of which object it belongs to. 
//As a result, the this keyword doesn't refer to the object anymore; 
//it defaults to a broader context, which is usually the global scope.




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//6.4th Rule default binding:-
 //When none of the above rule applies, 
 //the `this` keyword takes the value of the window object.

function ask()
{
console.log(this,this.name);
}
ask();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Examples:-
//1.The ‘this’ Binding - i
// Default Binding:-
// Look at the code snippet below and find the correct statement regarding the ‘this’ binding in the called function.
let juliet = {
    name: "Juliet",
    hello: function(){
        console.log("Hi, I am " + this.name);
    }
}
let globalHello = juliet.hello;
globalHello();
//Its default binding as function is called in the global scope
//via no object is connected to it.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2.The ‘this’ Binding -
//Implicit Binding:-
//Look at the code snippet below and find the correct statement regarding the ‘this’ binding in the called function.
let julietOne = 
{
    name: "Juliet",
    hello: function()
    {
        console.log("Hi, I am " + this.name);
    }
}
julietOne.hello();

//Its implicit binding as a function called using an object implicitly sets `this` to the object.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3.‘this’ in Nested Function:-


  //In javascript the value of `this` keyword depends on how a function is called.
 //Defined an `object` named `billy` and its property called `name` and its method called `outer`.
const billy = {
  name: "Billy Jol", 
  //Inside the outer method there is an inner/Nested function named `inner`.
  outer: function() 
  {
       function inner()
     {
       console.log(this);
     }     
     inner();
  }
}
billy.outer(); 
//1.When invoked the `billy.outer`,The outer method is called with the `billy` object.
//2.Inside the `outer` method there is an inner function defined.
//3.The `inner` function is Immediately invoked using `inner()`.
//4.The behavior of `this` keyword inside the nested function.
//5.Inside the `outer` method when you call the `billy.outer()`,
//The `this` keyword inside the `outer` method refers to the `billy` object.
//This is becuase the method is being called on the `billy` object.
//6.Inside the `inner` function,
//however when you call the `inner()` from within the `outer` method.
//7.The `this` keyword inside the function refers to a global object 
//becuase its a  common behavior of nested functions that are not methods of an object.

//Explanation: In the case of nested functions, 
//the binding of ‘this’ inside the inner() function is INDEPENDENT of the context of the outer function.
// Here the outer() function is implicitly binded to the billy object. 
//But the inner() has a default binding of ‘this’ as its value depends only on how inner() is called.

//We can replace this code using bind or using an arrow functions:-
//1.Using Bind():-

const userId = 
{
username : "Yash dandnaik",
outerFn : function()
{

function innerFn()
{
console.log(this);
}
innerFn.bind(this)();
}

};
userId.outerFn();//{ username: 'Yash dandnaik', outerFn: [Function: outerFn] }


//2.Using an arrow function:-

const userDetails =
{
name:"James Bond",
outter:function()
{

    const inner = ()=> {

        console.log(this);
    }

    inner();
}
}
userDetails.outter();//{ name: 'James Bond', outter: [Function: outter] }



