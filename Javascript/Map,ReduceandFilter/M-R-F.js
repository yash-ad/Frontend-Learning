// Map, Reduce and Filter
// There are many useful built-in methods available in JavaScript to work with arrays.

// 1.The map() Method:-

// ● The map() method allows you to iterate over an array and modify its 
// elements using a specified function.
// ● map () method does not modify the original array. It returns a new array value.
// For example,
// let arr = [2, 3, 4, 5, 6];
// Now imagine you have to multiply each array's elements by 4.

let arr = [2,3,4,5,6];

let modifiedArr = arr.map(function(element){


    return element * 4
});

console.log(modifiedArr); //[8,12,16,20,24];
console.log(arr);  //[2,3, 4, 5, 6]; it doesnot modify the original array.



let arr2 = [1,2,3,4,5,6];

let modifiedArrTwo = arr2.map(function(element){

return element + 2;


});

console.log(modifiedArrTwo);// [3,4,5,6,7,8];
console.log(arr2);// [1,2,3,4,5,6];



// 2. The Reduce () Method:-

// ● The reduce() method aims to combine the elements in a sequence and give 
// us a reduced single value output.
// Syntax:
// array.reduce(function, initialVal)
// The first argument of the reduce function is called a reducer function, and the second
// argument is an optional initial value.



let array = [200,450,280,670,770,435];

let result = array.reduce((a,b) => a + b);

console.log(result);
// In the parameter, the first one is the accumulator which is "a",accumulates the results of
// the execution from the reducer function and the second is the current element "b" in the
// array.
// We have to calculate the sum of all elements in the array. The reducer function
// executes every element of the array. Each time the reducer function executes, the
// result is stored in the accumulator. At last the final single value of the accumulator is
// returned once all the elements in the array are traversed.
// Suppose the initial value is not supplied as an argument to the reduce() method. In
// that case, the accumulator takes the first element in the array, which becomes the
// accumulator's initial value, and the second element of the array will be the current
// value.
// We called the reduce() method and only passed the first argument, the reducer
// function. Since there is no initial value, the accumulator grabs the first element in the
// array to start with, 200. The second element in the array is 450, which is the current
// value. The reducer function starts executing from the array's second element. It
// returns the result of 650 after execution, which is the sum of the accumulator and the
// current value. The accumulator will start accumulating the result. When all the
// elements in the array are finished, a single value output is returned, totalling 2,805.




//3.The Filter() Method :-
// ● The filter function is used to filter the value inside an array.
// ● The filter() method is used to create a new array from a given array
// consisting of only those elements from the given array which satisfy a
// condition set by the argument method.

// E.g. Suppose you have to filter odd values in the array

let oddArray  = [1,3,2,5,7,6];

function isOdd(x)
{
return x % 2;
}

let getOutput = oddArray.filter(isOdd);
console.log(getOutput);//[1,3,5,7];


//M.C.Q:-
// 1.Purpose of map() :-
// The main purpose of the array map() function is that-
//It passes each element of the array on which it is invoked to the function you specify and returns an array containing the values returned by that function.



// 2.Find Output:-
// What will be the output of the following code ?
let arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let myArr= arrayOne.filter(v => v % 3 === 0);
console.log(myArr);

//The filter function will iterate through the array and create an array of values if the condition is true. 
//Hence all the elements divisible by three will be printed.









