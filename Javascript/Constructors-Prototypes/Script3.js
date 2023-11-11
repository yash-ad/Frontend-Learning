///.An Instance of an object:-

 //Object in javascript:-
   //Objects in javascript are standlone entities,
  //They have certain properties associated with them,
 //These properties can be variables or functions.


///.The Instance of an object:-
 //There is an object with properties id,name and age
 //Now you want to create 100 objects that represent 100 people,
 //Each person will have an id,name,age:-

 let personOne =
 {
name:"Ashish",
id:   28,
age : 26
 }

 let personTwo =
 {

    name:"Akash",
    id:   18,
    age : 20   
 }


 //And so on...

 //But instead of creating 100 objects by individually defining id, name and age for all of
// them, you create a standard template with properties id, name and age. Then use
// this template to create objects and set the required values.
// This standard template can be seen as an object. Each time you create a new
// object, you create a new instance of an already defined object with already specified
// properties.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///.Putting it all together:-

let userDetail =
{
name:"Spiderman",
hello:function()
{
    console.log(this);
}
};
//userDetail.hello(); //{ name: 'Spiderman', hello: [Function: hello] } //Implicit Binding.

new (userDetail.hello.bind(userDetail))();//hello {}
//It creates a new object fers to the function 

//Description:-
 //1.userDetail.hello creates a reference to the hello function in the  userDetail object.
 //2.userDetail.hello.bind(userDetail) creates a new function with the same function definition that refers to.
 //3.This newly created `hello {}` function has the value of `this` in its execution context set to the userDetail object.
 //4.Now this newly created function is called as`new (userDetail.hello.bind(userDetail))()` using the `new` keyword.
 //5.Since This function uses the `new` keyword to create a new object.
 //6.The `new` keyword link this object to another object which is a prototype of the function being called.
 //7.Then the function (userDetail.hello.bind(userDetail))() will be called with the value of ‘this’ set
// to the hello() function object.
// 8. Therefore console.log(this) prints the hello {object function}.
// 9. Also, new (userDetail.hello.bind(userDetail))(); also prints the same as we know when a
// constructor function returns nothing, then the {function object} is returned.
// hello {};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Set the value of ‘this’
// Look at the code provided.
// 1. Call the function printName() with the value of ‘this’ set to the john object using hard binding.

const john =
{
name:"John",
greet: function()
{
console.log(this);   
}
};

john.greet();//{ name: 'John', greet: [Function: greet] }


//2.Then call the greet() function with the value of ‘this’ set to the CN object using any binding.

const CN = 
{
name:"Coding Ninjas",
printName : function()
{
    console.log("Hello ! my name is ",this.name);
}
};

let getOutput = CN.printName.bind(CN);
getOutput(); //Hello ! my name is  Coding Ninjas

const userName =
{
name : "Yash",
id : 31,
printName:function()
{
console.log("Hello ! My name is :",this.name,"And here is my id :",this.id);   
}
};

let result = userName.printName.bind(userName);
result();//Hello ! My name is : Yash And here is my id : 31.


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///.Function to create Objects:-
//1.
function createStudent(name,rollNo,marks)
{
let student = {};
student.name = name,
student.rollNo = rollNo,
student.marks = marks
 return student;
}


let studentOne = createStudent("Yash",31,80);
console.log(studentOne); //{ name: 'Yash', rollNo: 31, marks: 80 }

let studentTwo = createStudent("Sumit",12,90);
console.log(studentTwo); //{ name: 'Sumit', rollNo: 12, marks: 90 }




////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.Constructor:-
//A constructor is being called when an object is created.
 //Constructor Function

 //Example One:-
function Car(name,model)
{
this.name = name;
this.model = model;
}
//Using `new` keyword to create an object.
//1.
let carOne = new Car("Tata Harrier",2019);
console.log(carOne);


//2.
let carTwo = new Car("Tata Nano",2013);
console.log(carTwo);

function Bikes(name,price)
{
this.name = name;
this.price = price;
}

let bikeOne = new Bikes("Yamaha",2008);
console.log(bikeOne);


let bikeTwo = new Bikes("Honda",2003);
console.log(bikeTwo);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//1.What is the Expected Output
// What will the below statements print on the console?
function User(name) {
this.name = name;
this.isAdmin = false;
return;
}
let user =  User("Julie");
console.log(user);    //Undefined.


//2.Function Constructor
// What will be the output of the code below?
function Cuser(name) {
  this.isAdmin = false;
}
let userOne = new Cuser("James");
console.log(userOne); //Cuser { isAdmin: false }

//3.Function Objects
// What should be printed on the console?
let obj = {};
function A() { return obj; }
function B() { return obj; }
console.log( new A() == new B() );//True.

//An empty string or undefined value are falsy, 
//but an empty array or object are truthy.
//The statement new A() will make a new object of ‘A’ 
//and call the constructor of object ‘A’, which will return let obj.  
//Similarly the statement new B() will make a new object of ‘B’ and 
//call the constructor of object ‘B’, which will return let obj.
// Hence console.log( new A() == new B() ); will print true in the console.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//.Adding Behavior to objects:-

function vehicle(numWheels,price)
{
this.numWheels = numWheels;
this.price = price;
this.getPrice = function()
{

return this.price;
}
this.getNumwheels = function ()
{
   return this.numWheels
}
};

let schoolBus = new vehicle("4",5000000);
console.log(schoolBus.getPrice());//5000000
console.log(schoolBus.getNumwheels()); //4


let schoolAuto = new vehicle("3",100000);
console.log(schoolAuto.getPrice());//100000
console.log(schoolAuto.getNumwheels()); //3


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Comparing the Function Property:-
// Suppose you have a Myconstructor function with `name` local variable and getThis() properties. 
// The getThis() function simply console logs the value of `this`. 
//Now you create two objects, obj1 and obj2, 
//using the constructor function by passing the same `name` as arguments.
// What will the following line of code print?

function Myconstructor(name)
{
this.getThis = function()
{

    console.log(this);
}

};

let obj1 = new Myconstructor("Yash");

let obj2 = new Myconstructor("Satwik");
obj1.getThis();
obj2.getThis()
//In this scenario, 
//when you call obj1.getThis(), 
//it will print the obj1 object because the getThis() method is called on obj1. 
//Similarly, when you call obj2.getThis(), 
//it will print the obj2 object because the getThis() method is called on obj2.



console.log(obj1.getThis === obj2.getThis);//false.

//In JavaScript, functions are objects, and each time you create a function, 
//even if it has the same code, it results in a new function object. 
//In this case, obj1.getThis and obj2.getThis are two separate function objects, 
//even though they have the same code.
//So, when you compare them using ===, 
//it checks if they are the exact same function object in memory, 
//and since they are not the same function objects, the comparison returns false.


//Solution Description:-
//Both sides refer to two different copies of the same function; 
//hence it is false. 
//Also, both sides are just references to these functions, 
//so no execution context is created here. 

