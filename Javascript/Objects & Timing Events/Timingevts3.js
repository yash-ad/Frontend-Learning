//Deep copy VS Shallow copy :-


///1.With Objects :-
let girlName =
{
name : "Susan",
age  : 13
};



let womanName = girlName;

console.log(womanName); 
//{ 
// name : "Susan",
// age  : 13
// };


//Lets make it change :-

womanName.name = "Rose";
womanName.age = 30;


console.log(womanName);
//{ 
// name : "Rose",
// age  : 30
// };


console.log(girlName);
//{ 
// name : "Rose",
// age  : 30
// };




//Using Spread operator with an example:-

let boyDetails = 
{
name : "Raj",
age  : 23,
}

console.log(boyDetails);
//{ 
// name : "Raj",
// age  : 23
// };



let manDetails = {...boyDetails};

console.log(manDetails);
//{ 
// name : "Raj",
// age  : 23
// };



manDetails.name = "Yash";
manDetails.age  = 25;
console.log(manDetails);
//{ 
// name : " Yash",
// age  : 25
// };


console.log(boyDetails);
//{ 
// name : "Raj",
// age  : 23
// };



///1.With Arrays :-

let arr = [1,2,3,4,5,6];
console.log(arr);       //[1,2,3,4,5,6];


let arr2 = arr;
console.log(arr2);    //[1,2,3,4,5,6];


arr2.push(7);       //Push() method :- Adds the element at the end of an array.
console.log(arr2); //


console.log(arr);  //[1,2,3,4,5,6,7];



let arr3 = [...arr];

console.log(arr3); //[1,2,3,4,5,6,7];

arr3.pop();
console.log(arr3);//[1,2,3,4,5,6];

arr3.unshift(0);
console.log(arr3);//[0,1,2,3,4,5,6];


arr3.shift();
console.log(arr3);//[1,2,3,4,5,6];


console.log(arr); //[1,2,3,4,5,6,7];



 //Additional Notes : Deep Copy vs Shallow Copy:-

//  Deep Copy
// ● In Deep copy, The values that are copied in the new variable are copied and
// disconnected from the original variable, which means if you try to change the
// new variable, the original variable shouldn't have any changes.
// ● For a primitive value, you use a simple assignment:
// For e.g.
let num = 5;
let copiedValue = num;
// And when you change the value of the copiedValue variable, the original value
// remains the same.   

copiedValue = 10;
console.log(copiedValue);  //10.
console.log(num); //5.


// How to make a Deep copy of arrays or objects?
// By Using Spread Operator
// The spread operator (...) allows us to copy all or part of an existing array or object
// into another array or object.


let girl =
{
name : "susan",
age : 15
}

console.log(`Before using spread operator`);
console.log(girl);
//{
// name : "susan",
// age : 15
// }



let copiedGirl = {...girl};
console.log(`The middle one :`,copiedGirl);
//{
// name : "susan",
// age : 15
// }

copiedGirl.name = "Shanaya";
copiedGirl.age  = 16;
console.log(`After using spread operator`);
console.log(copiedGirl);
//{
// name : "Shanaya",
// age : 16
// }
console.log(girl);
//{
// name : "susan",
// age : 15
// }


// In this example, all values in the copiedGirl object are disconnected from the
// original girl object. So "girl" and "copiedGirl" both are different objects.

// Note: Spread operator can be used in many cases, like when we want to expand,
// copy,concat with math object.




// Shallow Copy:
// ● In shallow copy, when we copy the original object into the new object, the new
// object has the copy of the original object's memory address, which means
// both objects point to the same memory address.
// For e.g.
let personOne = {name:"Rahul",age:20};
let personTwo = personOne;
// If you assign one object to another like person2 = person1, then the value of
// ‘person1’ gets assigned to ‘person2’ and therefore, they both will point to the same
// location.

console.log(personOne == personTwo); //True.
console.log(personOne === personTwo); //True.



// Now if you changed the person2  state property in an object, changes would be reflect back to the original
// ‘person1’ object because they point to the same memory address.

personTwo.state ="Maharashtra";
console.log(personTwo);//{name:"Rahul",age:20,state:"Maharashtra"};
console.log(personOne);//{name:"Rahul",age:20,state:"Maharashtra"};
//It wont be changed the answer remains same.


// 1.Spread Opertaor:-
// Consider the following object. 
// What happens when we spread into a new object and change the firstName property of the object?
let obj1 = { firstName: 'James' };
let obj2 = {...obj1};
obj2.firstName = 'John';
console.log(obj1);
//{ firstName: 'James' };

//CodeDescription :-
//Spread creates a deep copy of the array, 
//meaning the obj2 is disconnected from obj1. 
//So, changing the firstName property of the obj2 will not be reflected by the obj1.

