//Arrays In Javascript:-

//Arrays is a basically collection of data.
//[Square bracket is called literal]
//In the square bracket we called elements.
//Array length is always starts from 1 and indices from 0.
//The best practice in javascript is ALways declare an array with the const.


//1.
const arr = [1,2,3,4,5];

console.log(arr); //[1,2,3,4,5]

//2.
//The keyword Const is a little misleading here.
//It doesnot define a constant array however it defines a constant reference to an array.
//So becuase of this we can still change the elements of a constant array.
const arrOne = new Array(1,2,3,4,5,6);

console.log(arrOne);//[1,2,3,4,5,6]



//3.

const myArray = [1,2,3,4,5,6,7,8,9,10];

console.log(myArray); //[1,2,3,4,5,6,7,8,9,10];


const myNewArray = myArray;



myNewArray[9] = 0; //In Array with the help of indices we have fixed the 0 position at index 9.
console.log(myNewArray); //[1,2,3,4,5,6,7,8,9,0];

console.log(myNewArray[3]); //4 Accessed the element.
console.log(myNewArray[10]);//Undefined

myNewArray[3] = "Four"; //Because we have changed the 4 number into a string for change the element at index  position 3 which starts from zero.
console.log(myNewArray); //[1,2,3,"Four",5,6,7,8,9,0];



myNewArray[12] = 100;
console.log(myNewArray); //[1,2,3,"Four",5,6,7,8,9,0, <2 empty items>,100];
console.log(myNewArray.length);//Total number of length us 13
console.log(myNewArray[10]) //Undefined.



let arraaay = new Array(); //Undefined 


let arraay3 = new Array(2,3,4);
console.log(arraay3);//[2,3,4]
console.log(arraay3.length);//Total length is 3.


///Functions on Arrays :-

let arrayFour = [1,2,3,4,5,6];

//1.Push():-
//Adds a new element at the end of the an array and it modifies the original array with an argument,returns the new array.

arrayFour.push(7); 
console.log(arrayFour);// Here is the element new added  [1,2,3,4,5,6,7];

console.log(arrayFour.length);//So total length is 7.


//2.Pop():-
//Removes the last element of an array and returns the removed element.

console.log(arrayFour.pop()); //7 is the last element which was removed by using Pop.


console.log(arrayFour);// [1,2,3,4,5,6] Returns a new array and  the removed element is none.




//3.Shift():-  
//Removes the first element of an array and returns it.
console.log(arrayFour);//[1,2,3,4,5,6]
console.log(arrayFour.shift()); //1
console.log(arrayFour); //[2,3,4,5,6]



//4.unShift():-  
//Adds a new element to the beginning of an array and returns new length.
console.log(arrayFour);
arrayFour.unshift(`Hello Im unShift and Im on Number one position because of unShift`);
console.log(arrayFour);//[`Hello Im unShift and Im on Number one position because of unShift`,2,3,4,5,6]

//Examples:-

// 1.Push in Array
// What is the output of the following code?
let color= ["Orange", "Blue", "Green"];

color.push("Red");

console.log(color[0]+ " " +color[color.length-1]); //Orange Red



//2. Shift Array
// What is the output of the following code?
var fruits = ["Red", "Orange", "Blue", "Green"];

console.log(fruits.shift()); //Red , Because it removes the first element of an array and returns.


//3.Heterogeneous Array :-
//Is the below given array allowed in Javascript?


var myArr = [45, "Ninja"];

console.log(myArr); //[45, "Ninja"];
//The answer is Yes , ofcourse we can , Since in javascript the array can store can be mixed of data types it could be string,boolean or number.



//4.Splice() :-

//Splice can be used to add new items to an array and returns deleted items.
//Arguments  modifies the array.
//There are 3 Arguments in Splice().
//1st is Start index.
//2nd is Deletion count.
//3rd is Elements to be insert.


//1.
const numsArray = [2,3,4,5,6];
console.log(numsArray);// [2,3,4,5,6];

console.log(numsArray.splice(1,1));//3.
console.log(numsArray);//[2,4,5,6];

console.log(numsArray.splice(1));//[4,5,6];
console.log(numsArray);//[2]; //Deleted all the lements and return only 2.


const numsArrayTwo = [2,3,4,5,6];
console.log(numsArray);// [2,3,4,5,6];

console.log(numsArrayTwo.splice(2,0,"Four")); //At index 2 , number of deletion 0 , add a new element to the index 2 instead of 4 is "Four."
console.log(numsArrayTwo); // [2,3,"Four",5,6];



console.log(numsArrayTwo.splice(2,2,10,20));
console.log(numsArrayTwo); //[2,3,10,20,5,6]



// Array Splice
// What is the output of following code?
let fruity = ['Apple', 'Orange', 'Kiwi', 'Strawberry'];

fruity.splice(4, 1, 'Banana');

console.log(fruity);// ['Apple', 'Orange', 'Kiwi', 'Strawberry','Banana'];



// Array Splice
// Send Feedback
// What is the output of following code?
let myFruits = ['Apple', 'Orange', 'Kiwi', 'Strawberry'];

myFruits.splice(1, 0, 'Banana');

console.log(myFruits);//['Apple', 'Banana','Orange', 'Kiwi', 'Strawberry'];


//Array length - 1;

let cafeArray = ["Cappucino","Americano","Blackcoffee","Coldcoffee","Lemontea"];

console.log(cafeArray);

//Array index it starts from zero and end n - 1;
console.log(cafeArray.length); //5

let arrLength = cafeArray.length;

let lastIndex = arrLength - 1;

console.log(cafeArray[lastIndex ]); //And the last index is 4 which is Lemontea;

console.log(cafeArray[5]); //Undefined

console.log(cafeArray[-1]); //Undefined

