///:What is Prototype:-
 //Basically it means for every function that are creating ,javascript engine will create two objects one the function itself and the other is prototype of the function.
 
//:When and how the prototype is useful?
  //The prototype is useful when using the function in a constructor mode,

//1.Function Prototype:-
// Look at the following function definitions. 
//Determine for which of the following a prototype will be made?
function func1(){
      var a = "I am func1";
      console.log(a); // A prototype will be not created for `func1` becuase its a regular function defined using function declaration.
   }

function func2(b) {
      this.b = b;
      return b; // A prottype will be not created for `func2` because its a regular function defined and its have no properties or methods that would require a prototype.
   }

function func3(){
        this.c = "I am func3";
        this.print = function(){
           console.log(this); 
        // A prototype will be created for `func3` because its an instance to create a constructor function,
       // constructor function is typically used for create objects,
      // Javascript creates a prototypes objects,
     // that can be used to add properties and methods,
    // Now in this case `func3` defines a property  `print` which is a method and this common scenario for creating prototypes.
        }
    }

//Solution Description:-
 //Javscript creates a function prototype for any function that you create.
 //Although the prototype created becomes useful when we use the function in a constructor
 //It is created for all the functions.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2.Reference to Function Prototype
//Look at the following code snippet and determine
// if both a and b have an internal reference to the same function prototype or not.

function Person(name){
    this.name = name;
    this.print = function(){
        console.log(this);
    }
}
var a = new Person("A");
var b = new Person("B");

//Solution Description:-
 //Whenever a function is created.
 //A SINGLE copy of the associated function prototype is created too.
 //All the objects created using this constructor function share the same function prototype.
 //A new prototype is NOT created for every instance of the object.



 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Why Prototypes:-
 
function Truckdetails(name,price,model)
{
this.name = name;
this.price = price;
this.model = model;
}

Truckdetails.prototype.getPrice = function()
{
    return this.price;
}
Truckdetails.prototype.getModel = function()
{
    return this.model;
}

Truckdetails.prototype.getName = function()
    {
        return this.name
    }

    Truckdetails.prototype.color = "Orange";
let truckOne = new Truckdetails("Tata",500000,2010);

let truckTwo = new Truckdetails("Mahindra",700000,2015);

console.log(truckOne.getPrice());//500000
console.log(truckTwo.getPrice());//700000

console.log(truckOne.getModel());//2010
console.log(truckTwo.getModel());//2015

console.log(truckOne.getName());//Tata
console.log(truckTwo.getName());//Mahindra

console.log(truckOne.color);//Orange
console.log(truckTwo.color);//Orange


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Function Prototype for Every Function
//Are prototypes created for every function?
 //: True.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//prototype.getName;-
// What will be the output of the following code?
function Person(name) {
this.name = name;
}
var p1 = new Person("Joy");
var p2 = new Person("Julie");
Person.prototype.getName = function() 
{ return this.name };
console.log(p1.getName() + " is friend with " + p2.getName());
//Joy is friend with Julie.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//getName()
// Send Feedback
// What will be the output for the following code?
function Person(name) {
  this.name = name;
}
var p1 = new Person("Joy");
var p2 = new Person("Julie");

Person.prototype.getName = function() { return this.name };

p1.getName = function() {return `John`};
console.log(p1.getName() + " is friend with " + p2.getName());
p2.getName = function() {return `Jonson`};
console.log(p1.getName() + " is friend with " + p2.getName());

// Joy is friend with Julie
// John is friend with Julie
// John is friend with Jonson

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///.More properties around Prototype:-
function Cardetails(name,price,model)
{
this.name = name;
this.price = price;
this.model = model;
}

Cardetails.prototype.getPrice = function()
{
    return this.price;
}
Cardetails.prototype.getModel = function()
{
    return this.model;
}

Cardetails.prototype.getName = function()
    {
        return this.name
    }

    Cardetails.prototype.color = "White";
let carOne = new Cardetails("Tata",500000,2010);

let carTwo = new Cardetails("Mahindra",700000,2015);

console.log(carOne);
console.log(carTwo);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// getPrototypeOf()
// Send Feedback
// What will be the output of following code in console?

let h = new Boolean();
console.log(Object.getPrototypeOf(h)); //False

//Codedescription:-

  //When you create a new Boolean object using the `new Boolean` constructor, 
 //you are creating a boolean object wrapper for a boolean value.
//The boolean constructor takes an optional argument that specifies the intial value of the Boolean object
//Which defualts to false.


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// hasOwnProperty():-
// What will be the output of following code snippet?
function People(age) 
{
this.age = age;
}
var p1 = new People(9);
console.log(People.hasOwnProperty("name")); //True.

console.log(People.name); //People
//Solution Description:-
 //Every function has a property called ‘name’. 
 //By default, the value of ‘name’ is set to the function's name.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
