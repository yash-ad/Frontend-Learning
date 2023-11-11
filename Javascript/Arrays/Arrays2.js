// //Iterating over Arrays:-

// //For of example:-

// //1.Students rollNumber :-

// const studentsRollNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// for(let rollNum of studentsRollNum)
// {

// console.log(rollNum);//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// }




// let arr = [2,3,4,5,6,7];
// ///Simple method using forLoop:-
// // for(let i = 0; i <= arr.length; i++)
// // {

// //     console.log(arr[i]); // 2 3 4 5 6 7;

// // }




// ///Simple method using forEach:-
// function printNums(element)
// {

//     console.log(element);
// }

// arr.forEach(printNums);// 2 3 4 5 6 7;



// // Find the Output
// // What will be the output of the following code?
// let sum = 0; 
// let array = [1, 2, 3];

// function getSum(ele) {
//     sum += ele;
// }
// array.forEach(getSum);
// //Code explanation:-

// //1.First of all the code intializes a two variable sum and array;
// //2.sum: This variable is used to store the sum of all elements in the array. 
// //It starts with an initial value of 0.
// //3.array: This is an array containing three elements: 1, 2, and 3.
// //4.The code defines a function called getSum(ele). 
// //This function takes a single parameter ele, 
// //which represents the current element being processed in the forEach loop. 
// //Inside the function, the value of ele is added to the sum variable.
// //The code then uses the forEach method to iterate through each element in the array. 
// //For each element, it calls the getSum function, 
// //passing the element value as an argument. 
// //This will add each element's value to the sum variable.
// //After the forEach loop has finished, 
// //the code prints the final value of sum using console.log(sum)
// //Now let's calculate the sum:

// // First iteration: sum = 0 + 1 (1 is the first element in the array)
// // Second iteration: sum = 1 + 2 (2 is the second element in the array)
// // Third iteration: sum = 3 + 3 (3 is the third element in the array)
// console.log(sum);  //6
// // So, the final value of sum will be 6.



// // Day of the Week:-
// // Write a function 'returnDay' that takes one parameter(number from 1 to 7) and returns the day of the week.
// // (where 1 is Monday, 2 is Tuesday, 3 is Wednesday, etc).
// // If the number is less than 1 or greater than 7, the function should return null.


// function returnDay(Number)
// {
//     // Note: Store the days of the week in the array.
// const daysOfWeek = [`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`];

// if(Number <= 7 && Number >= 1)
// {
//     return daysOfWeek[Number-1];


// }
// else{

//     return null;
// }

// }
// //You can use this function by passing a number from 1 to 7 as an argument. For example:
// console.log(returnDay(1)); // Output: "Monday"
// console.log(returnDay(3)); // Output: "Wednesday"
// console.log(returnDay(7)); // Output: "Sunday"
// console.log(returnDay(0)); // Output: null
// console.log(returnDay(8)); // Output: null
// console.log(returnDay(5)); // Output: "Friday".



// //Example:-
// // Global and Local Variable:-
// // What is the output of following code?
// let abc = 10; //Global

// function test() {
    
//    abc = 20;  //Global not yet assigned a variable there for bydefault it will become global.
// }

// test();
// console.log(abc); 


// // The output is 20 because the variable a is declared in the global scope with an initial value of 10. 
// // When the test() function is called, it modifies the value of the global variable a to 20.

// // Let's break down the code step by step:

// // let a = 10;: Here, the variable a is declared and initialized with the value 10 in the global scope.

// // function test() { a = 20; }: This defines a function named test, which doesn't explicitly declare a local variable a. 
// //Since there is no local a within the function, it refers to the global variable a.

// // test();: The test() function is called execute, which assigns the value 20 to the global variable a.

// // console.log(a);: This line outputs the value of the global variable a after the test() function has been executed. 
// //Since the test() function modified the global a to 20, that's the value that gets printed.

// // So, when you run this code, 
// //it will output 20 because the function test() changes the value of the global variable a from 10 to 20.





// //Example:-
// // Omitted Value in Array
// // Consider the code given below -
// let arrays = [ 1, , ,3, 4 ];
//  //console.log(arrays);//[ 1, <2 empty items> , 3, 4 ];







//  //Example:-
// // Passing Fewer Arguments
// // What will the function 'test' return upon execution of these statements?
// function test(a, b) {
//     console.log( a + b );
// }
// //test(2); //NaN : becuase we have passed fewer arguments.






// //Example:-
// // Hoisting in Javascript
// // What will be the output of following code snippet?
// let a = 1;

// function b() {
//     a = 10;
//     return;
//     function a() { }
// }

// b();
// console.log(a); //1

// //Lets breakdown the code:-
// // Expression function a() { } has created a local a that has a functional/local scope. 
// //This new "a " now gets hoisted to the top of its enclosing function b() with it’s declaration and definition.

// // Therefore, the statement a = 10; is no longer changing the value of the global a which remains to be 1, but rather it is changing the local a from a function to an integer value of 10.

// // Since we are logging the global a, the output is 1.




// //Example:-
// // Hoisted Function
// // Send Feedback
// // What is the output of following code?

// //Differnet variables get different values:-

// //hoisted(); //It will throw an error hoisted is not a function.
// var hoisted = function() { //With using let keyword
//     //hoisted(); //Cannot access hoisted before intialization
//     //let hoisted = function() { //With using let keyword
//     console.log('bar');
// };


// //It will throw an error hoisted is not a function.




// //Example:-
// // For Each Word
// // Send Feedback
// // What is the output of following code?
// let words = ['one', 'two', 'three', 'four'];

// words.forEach(function(word) 
// {
//     console.log(word);
//     if (word === 'two') 
//     {
//         words.shift();
//     }
// });


// // We have an array called words that contains four strings: 'one', 'two', 'three', and 'four'.

// // We use the forEach method to loop through each element in the words array.

// // Inside the loop, we have a function that takes an element from the array as input and executes the code inside the function for each element.

// // For each element (word) in the array, the code does the following:
// // a. It prints the current word to the console using console.log(word).
// // b. It checks if the current word is equal to 'two' using if (word === 'two').
// // c. If the current word is 'two', it removes the first element from the words array using words.shift(). 
// // d.This means that 'one' will be removed from the array in this case.

// // The loop continues with the next element in the array until all elements have been processed.

// // Loop starts with the first element 'one':

// // 'one' is printed to the console.
// // Since 'one' is not equal to 'two', nothing happens, and we move to the next element.
// // Loop moves to the second element 'two':

// // 'two' is printed to the console.
// // Since 'two' is equal to 'two', the words.shift() line executes, and the first element 'one' is removed from the array.
// // Now the words array contains only three elements: ['two', 'three', 'four'].

// // The loop moves to the third element 'three':

// // 'three' is printed to the console.
// // Since 'three' is not equal to 'two', nothing happens, and we move to the next element.
// // The loop moves to the fourth element 'four':

// // 'four' is printed to the console.
// // Since 'four' is not equal to 'two', nothing happens.
// // The loop ends because all elements in the array have been processed.

// // After the loop, the final words array will be ['two', 'three', 'four'].

// // So, the behavior of this code is a bit unusual because it modifies the array while iterating over it, and that can lead to unexpected results. In general, it's not recommended to modify an array while using forEach, for...of, or similar loops that rely on the array's length. Instead, you should use a regular for loop or other approaches to safely modify the array.





// //Example:-
// // Splice
// // What is the output of following code snippet?


//  let color = ['red', 'orange', 'blue', 'violet'];

// // let removed = color.splice(2);

// // console.log(removed);//['blue', 'violet']; //Start from index 2 , no elements to remove 2.
// // console.log(color);//['red', 'orange']; //Remaining colors are.



// //Example:-
// // Find the Output - 2
// // What will be the output of the following code:

// function a()
// {
//     function b() {
//         return 3;
//     }

//     return b();

//     function b() {
//         return 8;
//    }
// } 

// console.log(a()); //8

// // Solution Description
// // Both the b() functions are function declarations and will therefore be hoisted to the top of a() local scope.
// // However, the b() returning 8 will be hoisted after the one returning 3.
// // Therefore, the one returning 8 will be executed.




// // Rest Parameter
// // Send Feedback
// // What will be the output of the following code?
// function fun(...input){
//     var sum = 0;
//     for(var i = 0; i < input.length; i++){
//         sum += input[i];
//     }
//     return sum;
// }
// console.log(fun(1,2,3,4,5)); //15



// // Default parameters
// // Send Feedback
// // Consider the following code snippet:
// function f(a,b = 1) {
//   console.log(a*b)
// }
// var x = // some hidden  value
// f(5,x)
// // What should be the value of x so that the output is 5?

// // Solution Description
// // If we pass undefined to a default parameter, 
// // it will take the value of default parameter instead of undefined.





//Example:-
// Implement a function “duplicate” to duplicate an array, as shown below:

// For input arr=[1,2] duplicate(arr) should return [1,2,1,2]

// let arr = [1, 2];

// function duplicate(arr){
//     let n = arr.length;

//     for(let i = 0; i < n; i++){

//         arr.push(arr[i]) //push() = Adds a new element at the end of an array.
//     }

    
//     return arr;
// }

// let resultArray = duplicate(arr);
// console.log(resultArray); //[1,2,1,2];

// The function duplicate is defined, which takes an array arr as input.

// A variable n is declared and assigned the value of the length of the input array arr.

// The for loop is used to iterate through the array. It starts with i = 0 and continues as long as i is less than n (the original length of the array).

// Inside the loop, the arr[i] element is duplicated by pushing it to the end of the array using arr.push(arr[i]).

// The loop repeats for all elements of the original array, effectively doubling the size of the array.

// After the loop, the modified array is returned.


// In this example, arr is [1, 2]. 
//and the duplicate function is called with this array as an argument. 
//The function duplicates each element in the array, so the resultArray will be [1, 2, 1, 2]. 
//The output of the console.log(resultArray); will be [1, 2, 1, 2].



//Example:-
// Implement a function that returns an updated array with 1 left rotation on an array of integers
// rotateLeft([1,2,3,4]) // returns [2,3,4,1]

let arr = [1,2,3,4];
function rotateLeft(arr) {
    if (!arr || arr.length <= 1) {
      return arr;
    }
    
    const firstElement = arr.shift();
    arr.push(firstElement);
    return arr;
  }
  const result = rotateLeft([1, 2, 3, 4]);
  console.log(result); // Output: [2, 3, 4, 1]


//In this JavaScript implementation, 
//we use the shift() method to remove the first element from the array and store it in the firstElement variable. 
//Then, we use the push() method to append firstElement back to the end of the array, effectively achieving a left rotation of the array by one position.
    




















