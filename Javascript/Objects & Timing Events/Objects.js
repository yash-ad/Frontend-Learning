//Javascript Objects and their examples:-


//1.
//let student = {}; //An empty object

//console.log(typeof student);//Typeof student is an object.



//2.
let studentOne = 
{
name   :"Arpit", 
rollNo : 31 , 
marks  :50
};

console.log(studentOne); //{name:"Arpit", rollNo: 31 , marks:50};

//Dot is for notation that means to access particular property.
console.log(studentOne.name);//Arpit
console.log(studentOne.rollNo);//31
console.log(studentOne.marks);//50


//For changing the property and assigning the value :-
studentOne.name = "Yash";
console.log(studentOne.name); //"Yash";

studentOne.rollNo = 1;
console.log(studentOne.rollNo);// 1;

studentOne.marks = 100;
console.log(studentOne.marks);// 100;

console.log(studentOne);

console.log(studentOne.semester);//Undefined because we have not defined  the semester yet.


studentOne.semester = 3;
console.log(studentOne); //3;



//3.
let person = 
{
    name: "Jack",
    age: 50
};
// What is 'age: 50' written in the above object 'person'?
//The answer is Property of an object.



//4.
//To create an empty object:-

//1.Method 1
// let obj = {};

//OR

//2.Method 2
// let obj = new Object();


//5.
let carObj = 
{
name:"Honda",
price:15,
year:2001
};

console.log(carObj);



//With using dot notation:-
//console.log(carObj.name);
//console.log(carObj.price);
//console.log(carObj.year);


//6.
///Withusing square bracket notation with the help of string:-

console.log(carObj["name"]); //Honda
console.log(carObj["price"]);//15
console.log(carObj["year"]);//2001



carObj.name="Hyundai";
carObj.price=20;
carObj.year= 2005;

console.log(carObj);//{name:Hyundai,price:20,year:2005};





//7.
//Using function for an example:-
let printProperty = (object,prop) =>
{

console.log(object[prop]);

}

let prop   = "name";


printProperty(carObj,prop); //Hyundai





//8.
//Deleting properties:-

//Delete keyword for deleting the unwanted property:=

//delete carObj.year;   //Delete keyword using dot notation


//Delete keyword using square bracket notation :-
delete carObj["year"];  
console.log(carObj);

delete carObj["price"];
console.log(carObj);

delete carObj["name"];
console.log(carObj);



//9.Example is given :-

// Access 3rd Key
// An object is given as -
let objt = 
{
    key1: "value1",
    key2: "value2"
};
// What will be the output when you enter "obj.key3" on the console?
console.log(objt["key1"]); // value1;
console.log(objt.key3);   // Undefined.
