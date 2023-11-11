///1 Logged into a global scope :-
// console.log(this);
 //The `this` keyword refers to the window object in the GlobalScope.


///2 Printing `this` inside a function :-
//The demo() function is being called using the ‘new’ keyword,
//therefore the value of `this` inside demo function becomes a reference to a newly created object which contains the function object.
// function demo()
// {
//  this.demoName = "name";
//  console.log(this);
// }
//  new demo();//demo { demoName: 'name' }



//Example One:-
// let demoObject = {
// name : " I am demo",
// type : "I am an object",
// printname : function()
// {
// console.log(this);
// }
// };
//demoObject.printname();
//console.log(demoObject);
// {
//     name: ' I am demo',
//     type: 'I am an object',
//     printname: [Function: printname]
//   }
//printName() is being called in the global scope,
//but it is called using the demoObject object,
//therefore the value of `this` inside printName(),
//becomes the demoObject itself.
  



//Example Two:-
// let demoObjectTwo = 
// {
// name : "I am demoTwo",
// type : "I am an object",
// printNameTwo : function()
// {

//     console.log(this);
// }

// };

// let globalDemoFunction = demoObjectTwo.printNameTwo;

// globalDemoFunction();

//Here demoObjectTwo.printNameTwo is NOT calling the function,
//but it only contains reference to the function,
//that is stored in a variable globalDemoFunction.
//Now globalDemoFunction is called in the global scope, 
//hence the value of `this` inside  a function is the window object.


//Conclusion:-
//Every function while executing has its reference to its current execution context,
//which can be referenced by `this` keyword.
//Now this execution context gets created when a function is called.
//Therefore the value of `this` inside a function depends on how and where the function is called.


//1.Implicit Binding:-
 //Implicity decides the value of `this`.

//2.Explicit Binding:-
 //Explicity specifies what the value of `this` will be.


//3.`New` Keyword:-
 //`this` takes up the value of a newly created object which refers to another object.
 //This other object refers to the prototype of the function being called.

//4.Default Binding:-
 //When none of the above rules applies, the `this` takes the the value of the window object.


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 ///.1st rule `new` Keyword:-

  //Example Three:-
//  function vehicle()
//  {

// console.log(this);

//  };

//  new vehicle ();//vehicle {}
 // `this` takes up the value of a newly created object which refers to the another object.
 //This object refers to the prototype of the function being called.
 //However , in a standalone function without new keyword , 
 //the value of `this` depends on how the function is called.

//2nd rule giving value to an empty object:-

// function myCar(name)
// {
// this.name = name;
// console.log(this);
// }

// new myCar("MahindraThar"); 
//It created an object.//myCar { name: 'MahindraThar' }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Example Four:-
// Function Call Using ‘new’

// function student(name)
// {
// this.name = name; //this.name = "Yash";
// console.log(this);
// };
// let studentOne = new student("Yash");
// console.log(studentOne.name);
//student { name: 'Yash' } Here the student is an object and name is property of an object and yash is a value.
//Yash
//Solution Description
// Explanation: The ‘new’ keyword creates a new object. 
//The value of ‘this’ inside Student() becomes this newly created object. 
//When Student() is called, it sets this.name is equals to Yash. 

//The ‘new’ keyword creates a new instance of an object from a function.
//The variables defined inside the function (using this.varName) are properties of the object.
// This object becomes the value of ‘this’ inside the function’s execution context. 
//But primarily, 
//the ‘new’ keyword is used to create a new instance of an object from a function
// (called a constructor function).


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///.2nd rule explicit binding :-
//Explicit binding = which specifies what the value of `this` will be.

//Example one:-
const hisName =
{
name : "John"
};

function ask()
{
console.log(this,this.name);  
}

//ask(); 
 //Global object in a global scope.

//ask.call(hisName); //Methods like call, apply and bind refers `this` to any object.
 //{ name: 'John' } John

//ask.apply(hisName) //Methods like call, apply and bind refers `this` to any object.
//{ name: 'John' } John

let output = ask.bind(hisName); //Bind is a method in javscript,basically it returns a new function.
output();  //{ name: 'John' } John 


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Example Two:-
//Bind function = Whenever we call the function using the `Bind` Keyword,basically it will return a new function.

let person =
{
name : "Raj",
Greet: function()
{
console.log("Hello",this);
}
};
//person.Greet();
 //Hello { name: 'Raj', Greet: [Function: Greet] }

// let getValue = person.Greet;
// getValue();
 //Global object

let localGreet = person.Greet.bind(person); //Bind is a method in javascript,Basically it will return a new function.
localGreet();
 //Hello { name: 'Raj', Greet: [Function: Greet] } //It returns a new function.


let vehicle = 
{
name:"Tata",
message : function()
{
console.log("The car is",this);   
}
};

let getOutput = vehicle.message.bind(vehicle);

getOutput();
 //The car is { name: 'Tata', message: [Function: message] }


 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




