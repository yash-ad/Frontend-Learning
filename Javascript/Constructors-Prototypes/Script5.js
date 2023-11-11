//1.Fix the code below by deleting the printDetails() function from the Student object 
function Student(id, name, club)
{
    this.id = id ;
    this.name = name ;
    this.club = club ;
    // this.printDetails = function(){
    //     console.log(this.id, this.name, this.club);
    // }
}


//2.Adding it to the Student prototype object:-

Student.prototype.printDetails = function()
{
    console.log(this.id, this.name, this.club);
}


//3. Then create 4 `new` instances of the Student object by 
//setting the id, name, club values to (1, “Raj”, “Cricket”), 
//(2, “Rohan”, “Dance”), (3, “Rita”, “Basketball”) and
// (4, “Reema”, “Music”). 

const studentOne   = new Student(1,"Raj","cricket");
const studentTwo   = new Student(2,"Rohan", "Dance");
const studentThree = new Student(3,"Rita","Basketball");
const studentFour  = new Student(4,"Reema","Music");


//4.Now create an array of these 4 objects.:-
const studentArr = [studentOne,studentTwo,studentThree,studentFour];


//5.Run a loop on the array you created and call each object's printDetails() function:-

studentArr.forEach(function(student)
{
student.printDetails();
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//For practice:-

//1. Fix the code below by deleting the printDetails() function from the Cars object and 
//adding it to the Cars prototype object. 
function Cars(id, name, price){
    this.id = id ;
    this.name = name ;
    this.price = price ;
    // this.printDetails = function(){
    //     console.log(this.id, this.name, this.club);
    // }
}

Cars.prototype.printDetails = function()
{
    console.log(this.id, this.name, this.price);
}


//2. Then create 4 `new ` instances of the Cars object by setting the id, name, price values:-

let carOne   = new Cars(1,"Tata",230000);
let carTwo   = new Cars(2,"Mahindra",32000);
let carThree = new Cars(3,"Volvo",78000);
let carFour  = new Cars(4,"Dodge",450000);


//3.Now create an array of these 4 objects:-
const carsArray = [carOne,carTwo,carThree,carFour]


//4.Run a loop on the array you created and call each object's printDetails() function:-

carsArray.forEach(function(Cars){
Cars.printDetails()

});

//Output:-
//1 Tata 230000
// 2 Mahindra 32000
// 3 Volvo 78000
// 4 Dodge 450000

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Objects:-
 //An empty object in javascript:-
 //There are two ways to create an empty objects.

/// Object as a function exist in javscript.

//1.
 let obj = {};


//2.

//let obj = new Object();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The Prototype Chain - i
// Send Feedback
// Look at the following code and determine the output.

// function A(){
//      this.name =  "A";
// }

// Object.prototype.color = "red";  //Prototype chain.
// var d = new A();


// console.log(d.color) ; //red.

//Solution Description:-
 //`d` looks up in the prototype chain upto Object.prototype to get the value.
 //Object.prototype.color sets the value of the property color for all the objects which is assigned `red` now,
 //now matter how the object is created.
 //Here `d` looks up in the prototype chainup to Object.
 //prototype to get the value of color.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The Prototype Chain - ii
// Send Feedback
// Look at the following code and determine the output and the most appropriate reason.
function A(){
    this.name = "A";
    this.color = "blue";
}
function B(){
    this.name = "B";
}
function C(){
    this.name =  "C";
}

let obj1 = new A() ;
let obj2 = new B() ;
let obj3 = new Object();
let obj4 = new C();

A.prototype.color = "red" ;
B.prototype.color = "red" ;
Object.prototype.color = "pink" ;

console.log(obj1.color, obj2.color, obj4.color, obj3.color);

///Solution description:-
 //The obj1 has a property color of blue, so it doesnt check value to the prototype chain.
//The obj2 doesnt have a property color,so it looks upinto the prototype chain in its prototypes and a red value is assigned to it.
//The obj3 made using Object(); a new object and its inherits the color value pink from its prototype as it has no property.
//The obj4 has no property color,so it looks up in the prototype chain in the function prototype, 
//which also doesn’t have a property color. 
//So it looks further up in the chain in the Object function, 
//then in Object.prototype and assigns pink color.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///. object Vs Object:-
 //What is the difference:-

 //1.object:-
  // key-value pairs.
  //typeOf object is an object.

//2.Object:-
 //constructor function.
 //typeOf Object is a function.


//Object()
// What is the output of following code?
const object1 = new Object();
object1.property1 = 42;
console.log(Object()); // Object{}.



//object
// What happens if you run the following code snippet in console?
const object2 = new Object();
object2.property1 = 43;
console.log(object2); //{ property1: 43 }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//.Class:-
 //ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

//1.JavaScript Classes are templates for JavaScript Objects.
//2.A javascript class is not an object.
//2.It is a template for javascript objects.


//Use the`class` keyword to create a class:-
class Vehicle
{

//Always add a mehod named constructor:-
constructor(vehicleName,price)
{
this.vehicleName = vehicleName,
this.price = price;
}

getPrice()
{
return this.price;
}
};

let vehicleOne = new Vehicle("Truck",800000);

let vehicleTwo = new Vehicle("Boat",670000);

console.log(vehicleOne);//Vehicle { vehicleName: 'Truck', price: 800000 };
console.log(vehicleTwo);//Vehicle { vehicleName: 'Boat', price: 670000 };


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


class Cardetails
{
constructor(name,model)
{
this.name = name,
this.model = model;
}

};


let car1 = new Cardetails("Harrier",2019);

let car2 = new Cardetails("Honda",2013);


console.log(car1);//Cardetails { name: 'Harrier', model: 2019 }
console.log(car2);//Cardetails { name: 'Honda', model: 2013 }


////////////////////////////////////////////////////////////////////////////////////////////////////////
//1.Constructor :-
// What happens if you do not add a constructor to a class?
 //Default empty constructor will be added automatically.


//2.typeof
// Send Feedback
// What will the following code produce on the console?
class Person 
{
   constructor(name) 
   { this.name = name;}
}
console.log(typeof( Person)); //function


//3.Object.prototype.constructor
// What will be the output of the following code?
class Mandetails {
  constructor(name) 
  { this.name = name; }
}
console.log(Mandetails === Mandetails.prototype.constructor); //True.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///Class expression and hoisting:-

 //You cannot call a class without a `new` keyword.
 //class expression cannot hoisted.

 

// let bikeOne = new Bikes("Honda",2010);

// let bikeTwo = new Bikes("Yezdi",1980);
 let Bikes = class{

constructor(name,model)
{
this.name = name,
this.model = model
}
};


let bikeOne = new Bikes("Honda",2010);

let bikeTwo = new Bikes("Yezdi",1980);


console.log(bikeOne);//Bikes { name: 'Honda', model: 2010 }
console.log(bikeTwo);//Bikes { name: 'Yezdi', model: 1980 }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Inheritance using classes:-

//1.`extends` keyword i used in javascript when class declarations or class expressions to create a subclass
 //that inherits the properties and methods from a parent class.

//2.`super` keyword is used within a subclass to call the constructor of the parent class,
 // or to access methods and properties of the class.

 //Example:-

  class Animal //Parent
  {

    constructor(name)
    {
        this.name = name;
    }

    speak()
    {
        console.log(`${this.name} makes a sound`);
    }
  };

  class Buffalo extends Animal{ //Child (subclass)

    constructor(name,breed)
    {
super(name); // calls the constructor of the parent class (Animal).
this.breed = breed;
    }

    growl()
    {
console.log(`${this.name} growls loudly `);
    }

    speak()
{
super.speak(); //calls the speak from the parent class (Animal)
console.log(`${this.name} growls`);
}

  };


  const myBuffalo = new Buffalo("Dyna","Murha");

  console.log(myBuffalo.name);
  console.log(myBuffalo.breed);
  console.log(myBuffalo.growl);
  //Dyna
// Murha
// [Function: growl]
console.log(myBuffalo);
//Buffalo { name: 'Dyna', breed: 'Murha' }

//Code explanation:-
 //In this example we have an `Animal` class with a `constructor` method and a `speak` method.
 //We then create a `Buffalo` subClass that extends `Animal` using the `extends` keyword.
 // The `Buffalo` class has it owns `constructor method and additional `growl` method.

 //Inside the `Buffalo` class we use `super` keyword to call the constrcutor of the parent class.
 //`super(name)`.This intializes the `name` property inherited from the parent class `Animal`.
 //We also `super.speak` to call the `speak` method of the parent class.
 //Using `extends` and `super` keywords allows us to create hierarchy of classes where subclasses inherit to the parent.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Class Expression
// Send Feedback
// What will the following code print in console?
let People = class {
  constructor() {}
  sayHello() {
    return 'Hello!';
  }
};
var instance = new People();
console.log(instance.sayHello()+" "+ People.name);//Hello! People //The value of the name is set to the functions name.

///Solution Description:-
 //Every function has a property called `name`,By default.
 //The value of the `name` is set to the functions name.
 //At the back,the class is converted into a function only.
 //Hence the `name` property takes up the value of the class name.



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Parent Class Function
// Send Feedback
// Which keyword is used to call the base/parent class functions from the child functions?
  //`super` is the keyword is used to call the base/parent functions from the child functions.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Inheritance in JavaScript
// Send Feedback
// What will the following code print in the console?
// class Busdetails{
// constructor ( doors, wheels){
//     this.doors = doors;
//     this.wheels = wheels;

// }
// }
// class bus extends Busdetails{
//     constructor(windows){
        
//         this.windows = windows;
//     }
// }
// var b = new bus(10);
// console.log(bus.windows);

//It will caught an error:-
//Because must call `super` constructor in derived class before accessing `this`.
//or returning from derived constructor.

 //Similar code with `super` keyword and with an output:-

 class busDetails{  //Parent/Base class.
   constructor(doors,numWheels)
   {
this.doors = doors;
this.numWheels = numWheels;
  }
 };

 class bus extends busDetails{ //Child/Sub class.

    constructor(doors,numWheels,windows)
    {
super(doors,numWheels)
this.windows= windows;

    }
 }


 let instnaceResult = new bus(4,8,15);

 console.log(instnaceResult.doors); //4
 console.log(instnaceResult.numWheels);//8
 console.log(instnaceResult.windows); //15


 //Code explanation:-
  //In this code we have two classes `Busdetails` and `bus` 
  //extends `Busdetails` calls the `super(doors,wheels)` to ensure that the `doors` and numwheels properties are properly intialized.
  // When you create an instance `instanceResult` of bus class with the `new bus(4,8,15)`
  //It will have a windows property with a value fo 15.
  //The console.log(instnaceResult.windows) will output `15` to the console.

