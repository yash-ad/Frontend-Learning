// //Pass by value VS Pass by reference :-

// //Lets take an example of piece of code :-

// // We have a function called fn that takes three parameters: a, b, and c.
// function fn (a,b,c)
// {
// a = 3; // We assign the value 3 to the parameter a. 
// //However, it's important to note that a is a local variable within the function, and this change does not affect the variable x outside the function.

// // We use the push method to add the string "Bob" to the array b. 
// // This change modifies the y array outside the function, since arrays are mutable objects in JavaScript.
// b.push("Bob");

// // We assign the value false to the property first of the object c. 
// // Like arrays, objects are mutable in JavaScript, so this change modifies the z object outside the function.
// c.first = false;
// }

// // Outside the function, we declare three variables: x, y, and z.
// let x = 4; // x is assigned the value 4.
// let y = ["Raj","Rahul"];// y is assigned an array ["Raj", "Rahul"].
// let z = {first : true}; // z is assigned an object {first: true}.



// // We call the function fn with the arguments x, y, and z. 
// //This means we pass the values of x, y, and z as the corresponding arguments to the function.
// fn(x,y,z); //These  are arguments

// console.log(x,y,z);// After the function call, we use console.log to print the values of x, y, and z.


// // x: 4
// // y: ["Raj", "Rahul", "Bob"]
// // z: {first: false}

// // The value of x remains unchanged outside the function,
// // because a is a local variable inside the function.
// // The array y gets modified outside the function, as we added "Bob" to it using the push method.
// // The property first of the object z gets modified outside the function from true to false.

// // Remember, changes made to primitive values (like numbers),
// // within a function don't affect the original variable outside the function. 
// // However, changes made to arrays and objects within a function,
// // do affect the original arrays and objects outside the function because they are passed by reference in JavaScript.







// //Code created by me and understood well.
// //Reference In javascript ;-

// function fnTwo(e,f,g)
// {

// e = 5;
// f.push("Yash");
// g.first = true;

// }


// let H = 6;
// let I = ["Papa","Aai","Siddhi"];
// let J = {first : false};

// fnTwo(H,I,J);
// console.log(H,I,J);


// //Because we have pass just the reference.



///Pass By Value :-

function passByValue(varOne,varTwo)
{
 console.log("Inside by value method");
 varOne = 50;
 varTwo = 100;
 console.log(`varOne = ${varOne}`, `varTwo = ${varTwo}`);
}


let varOne = 15;
let varTwo = 30;   



console.log(`varOne = ${varOne}`, `varTwo = ${varTwo}`);

passByValue(varOne,varTwo);

console.log("after call pass by value method");
console.log(`varOne = ${varOne}`, `varTwo = ${varTwo}`);



///Pass By Reference :-


function passByReference(obj,arr)
{
 console.log("Inside pass by reference method");
 obj.a = 10;
 arr.push("Yash");
 console.log(obj,arr);
}

let obj = {a:15};
let arr = ["Aai","Papa","Siddhi"];
console.log("Before call pass by reference method");
console.log(obj,arr);

passByReference(obj,arr);
console.log("After call pass by reference method");
console.log(obj,arr);







