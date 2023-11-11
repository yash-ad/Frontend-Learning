// This keyword
// Send Feedback
// What will the below set of lines print on the browser console?
 function bike() {
  console.log(this.name);
 }
 var name = "Ninja";
 bike(); //Ninja

  
 //Code Breakdowns:-
  //1.You define a function `bike` that contains a `console.log(this.name)`statement.
    //Inside a function,`this` refers to the context in which function is executed.
  //2.You declare a global variable `name` and assign it to the value `Ninja`.
  //3.You call bike() without any explicit context,which means it use by default context,in this case is Global conetext.
  //4.Inside `bike()`,`this.name` is equivalent to the `window.name`(Since in the browser `window` is the global object).
  //5.Therefore it logs the value of the global variable name which is `Ninja`.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Strict mode
// Send Feedback
// What will be printed on the console?
"use strict"
function bike() {
    console.log(this.name);
}
var name = "Ninja";
bike();

//Code Explanation:-
 //In strict mode,when you attempt to access `this` in a function that is not a method. 
 //Its not a property of an object it will be `undefined`.
 //"use strict" enables strict mode.

// function bike() {...} defines a function bike.

// var name = "Ninja"; declares a global variable name with the value "Ninja".

// bike(); is called without any specific context (this is not set explicitly).
//In strict mode, this inside bike() will be undefined.

// As a result, when console.log(this.name) is executed, it will throw a TypeError because you're trying to access a property (name) on undefined.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Object Constructor
// Send Feedback
// What will be the output of the code below?
function Abc() {
"use strict"
this.a = 25;
return {a: 35, b: 44};
}
var obj = new Abc(); // a new object of  `ABC`.
console.log(obj.a, obj.b); // 35 44.

//Code explanation:-
 //Solution Description
 // The statement ‘ new Abc(); ’ will make a new object of ‘Abc’ 
 //and call the constructor of ‘Abc’, then in the constructor 
 //the statement ‘ return {a: 35, b: 44}; ’will return a new object 
 //which would get stored in var obj. 
 //Thus on printing obj.a and obj.b will print 35 and 44.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// What is the Output
// Send Feedback
// What will the below statements print on the console?

function User(name)
{
this.isAdmin = false;
return name;
}

let user = User("Jack");
console.log(user); //Jack

//Lets breakdown the code step by step:-
 //1.We have defined a function named `User` that takes one parameter called `name`.

//2.this.isAdmin refers to the object that will created when you call `new User(...)`.
 //In this case, it sets a property `isAdmin` to `false` on that object.

//3.`return name;` The return statement is used to specify the what value the function shpuld give back when its called.
 //In this case,its returning the`name` that was passed as a parameter.
 
//4.`let user = User("Jack")`In this case you are calling the User function with the Argument "Jack"
 //However because we didnt have used `new` keyword infront of it, so therewill be new object is not created.
 //So instead by default `this` refers to the global object(`Which is window in a browser and global in Nodejs)

//5.Console.log(user):This prints the value that was returned by the function,In this case user will be Jack.
 //Because that was returned from the `User function`.


 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  hasOwnProperty()
//  Suppose there is a class 'Person' and an object 'person' is created as follows -
 class Person {
    constructor(name)
     { this.name = name; }

    } 
    let person = new Person("James");

//The below statement returns true or false if a property is present in the person object

// person.hasOwnProperty(property)
//Where does this function come from?
 //From Objects prototype.

 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //  Which statement will give error
 //  Which of the following statements will produce an error with the following code?

 class People
 {
constructor(name)
{
    this.name = name;
}

get name()
{
return this._name;
}
set name(value)
{
this._name = value;
}
 }
let people = new People("Jones");

console.log(people); //People { _name: 'Jones' }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Call and Apply
// What will the below statements print in the console?

let ninja =
{
name:"Ninja", //name:property
getName:function() //getName method
{
let name = this.name;
return name;
}
};

let funcName = function(snack,hobby)
{
console.log(this.getName() +  `loves`  +  snack  +  `and` +  hobby);
};

funcName.call(ninja,`sushi`,`algorithms`);//Ninjalovessushiandalgorithms
funcName.apply(ninja,[`pasta`,`development`])//Ninjalovespastaanddevelopment

//Lets Breakdown the code step by step:-

 //1.Intially we defined an object called `ninja` with property `name` set to `Ninja` and method is `getName`
 //That returns the `name`.

 //2.Now moving on to the second statement `funcName` defines a function that takes two parameters `snack` and `hobby`.

 //3.Third statement `funcName.call(ninja, 'sushi', 'algorithms')`Here `call`keyword is used to call the funcName
 //and it sets the context(`this`) of the function to the `ninja` object.
 //It's like saying "when you use this inside funcName, refer to the ninja object".
 //The function then logs a message to the console using this.getName() which gets the name property from the ninja object.

 //4.funcName.apply(ninja,["pasta","development"])
 //Similar to `call`, `apply also calls the `funcName` function and sets it to the context to be the `ninja` object.
 //The difference is `call` and `apply` is , `apply` takes an array of  arguments instead of listing one by one like `call`.


                                 //For practicing:-
// let vehicle =  //Object
// {
//     name:"Car", //name:property
//     getName:function()  //getName:method
//     {
//     let name = this.name;
//     return name;
//     }

// };

// let functionName = function(model,price)
// {
//     console.log(this.getName() + ` model is ` +  model  + ` And price is ` + price);
// }

// functionName.call(vehicle,"Hyundai2012",480000);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Getter Method
// Send Feedback
// Which keyword is used to create a getter method in class?

 //get;
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  Output
// Send Feedback
// What willl be the output of the following code?

function MyClass() {}

const objOne = new MyClass(); //An empty object.
const objTwo = MyClass(); //Nothing defined.
console.log(objOne);//MyClass{}
console.log(objTwo);//Undefined.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Guess the Output
// Send Feedback
// What is the output of the code given below?

class MynewClass{
constructor(x)
{
    console.log("constructor is called!");
    this.x = x;
}
}

const object = new MynewClass();
console.log(object.x); //constructor is called! undefined

//Lets breakdown the code step by step:-
 //1.Intially we defined a `class` called `MynewClass` , so classes in javascript are used as blueprints for creating objects.

 //2.`constructor(x)` 
 //The constructor is a special method that gets called when you create a new instance of the class,in this case it takes parameter(x).

 //3.When a new instance `MynewClass` is created,the constructor will be automatically called.

 //4.console.log("constructor is called!");:
 // This line logs the message "constructor is called!" to the console. 
 //It lets you know that the `constructor function` is being executed.

 //5.`this.x = x`
 //Inside the constructor,`this` refers to instance of the class that is being created.
 //`this.x = x` is assigns to the  value of `x`, (the parameter passed when creating an instance)
 //to the property `x` of the new object.

 //6.const object = new MynewClass();:
 // This creates a `new instance of MynewClass` and assigns it to the variable object. 
 //Since the constructor expects one argument (x), 
 //it needs to be provided when creating the object,so here it is an empty right now.

 //7.console.log(object.x);:
 // This prints the value of the x property of the object to the console.


 //"constructor is called!" is logged to the console because that's what the constructor does when it's called.
// object.x is undefined because the constructor was called without providing a value for as an argument  x. This means that x is undefined by default.


                    //Similar code with providing value:-

//With practicing:-

class MynewClassTwo
{
constructor(x)
{
this.x = x;
console.log(" Now Constructor is called with a value");
}
};

const objectTwo = new MynewClassTwo(10);
console.log(objectTwo.x);//" Now Constructor is called with a value"
                        // 10.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Class Inheritance:-


//A class Person is defined already, 
//Create a class named Student inheriting the Person class and consisting of the properties class and rollNo. 
//Then, create another class named Teacher inheriting Person class and consisting of the properties teacherId and subject. 
//Call the constructor of its parent in both the classes. Create a method getDetails() in both the classes which will return an array with data in the following order:
//For Student [name,rollNo,class]
//For Teachers [name,teacherID,subject]
//The constructors of both the classes will receive arguments in the same order.


//1.A class Person is defined already,
class Person{
constructor(name)
{
this.name = name;
}
};

//2.Create a class named Student inheriting the Person class and consisting of the properties class and rollNo. 

class Student extends Person
{
constructor(name,classNo,rollNo)
{
super(name)
this.classNo = classNo;
this.rollNo = rollNo;
}
getDetails() {
    return [this.name, this.rollNo, this.class];
}
}
// Then, create another class named Teacher inheriting Person class and consisting of the properties teacherId and subject.

class Teacher extends Person {
    constructor(name, teacherId, subject) {
      super(name);
      this.teacherId = teacherId;
      this.subject = subject;
    }
  
    getDetails() {
      return [this.name, this.teacherId, this.subject];
    }
  }
  class Teacher extends Person {
    constructor(name, teacherId, subject) {
      super(name);
      this.teacherId = teacherId;
      this.subject = subject;
    }
  
    getDetails() {
      return [this.name, this.teacherId, this.subject];
    }
  }
  class Teacher extends Person {
    constructor(name, teacherId, subject) {
      super(name);
      this.teacherId = teacherId;
      this.subject = subject;
    }
  
    getDetails() {
      return [this.name, this.teacherId, this.subject];
    }
  };

  const student = new Student("John Doe", 101, "10th");
  const studentDetails = student.getDetails();
  console.log(studentDetails); // Output: ["John Doe", 101, "10th"]

  const teacher = new Teacher("Jane Smith", "T001", "Math");
  const teacherDetails = teacher.getDetails();
  console.log(teacherDetails); // Output: ["Jane Smith", "T001", "Math"]
 
  
  
  