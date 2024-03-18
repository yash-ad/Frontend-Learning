///1.Map():-


//1.What is map() method/function in js?
//  Map()  function is a higherorder function in javascript, it iterates over an array and perform some opeartions each element of an array
// it creates a new array by applying a function to each element of an array.

//2.How does the map()  function works?
  //1.It takes a callBack function as its arguments.
  //2.The callback function is applied to each element of the array.
  //3.The return value of the callback function is used to create a new array.


//3.lets take an examples:-

//1.Double:-
//Original array:-
const DoubleNumbers = [1,2,3,4,5];

//Using map() to double each number in the array:-
const numbers = DoubleNumbers.map((x)=> x * 2);
console.log(numbers);//[ 2, 4, 6, 8, 10 ]


//2.Triple:-
const tripleNumbers = [6,7,8,9];

//Using map() to triple each number in the array:-
const nums = tripleNumbers.map((x)=> x * 3);
console.log(nums);// //[ '1', '11', '101', '111', '1001' ]


//3.Binary:-

//Using `map()` to binary each number in the array:-
const binaryNums = [1,3,5,7,9];//
const numBinary = binaryNums.map((x)=> x.toString(2))
console.log(numBinary); //[ '1', '11', '101', '111', '1001' ]


//Lets solve tricky exmaple using map() , that is an array of objects:-

const familyMembers = [{
  firstName:"Yash",lastName:"Dandnaik",age:"25"},
  {firstName:"Siddhi",lastName:"Dandnaik",age:"23"},
  {firstName:"Avinash",lastName:"Dandnaik",age:"55"},
  {firstName:"Vaijayanti",lastName:"Dandnaik",age:"50"},
];


const result = familyMembers.map((x)=> x.firstName + " " + x.lastName + " age:" + x.age);

console.log(result);
// [
//     'Yash Dandnaik age:25',
//     'Siddhi Dandnaik age:23',
//     'Avinash Dandnaik age:55',
//     'Vaijayanti Dandnaik age:50'
//   ]
  

//3.What are the benefits of Map() function in js:-
//1.It allows more concise and more readable code compared to the traditional looping like 'for` loop.
//2.It returns a new array without modifying the original code.
//3.chaining Map() can return a new array it can be easily chained to other array methods like 'filter()', and 'Reduce()'.
//4. It uses functional programming by using of pure functions, it takes an input and return a new value without modifying the input.



///.Filter():-
//1.What is filter() method/function in js?
 //In javascript 'filter()' is another higherorder function,it creates a new array that all elements that pass the test implemented by the provided callback function.


//2.How does the 'filter()` function/method works with an array?
 //It takes a callback function its arguments.
 //The callback function is applied to each element of the array.
 //Th filter is used for conditions if the callback functions return True then that element is included in the array, otherwise it is omitted.



//3.lets take an examples of using filter():-

//1.Odd numbers:-
const numbersTwo = [1,2,3,4,5];
// function isOdd(x){
// return x % 2;
// }

// const givenOutput = numbersTwo.filter(isOdd);
// console.log(givenOutput);//[ 1, 3, 5 ]


///.Lets write same code in a modular and readable way:-
// const givenOutput = numbersTwo.filter((x)=> x % 2);
// console.log(givenOutput);//[ 1, 3, 5 ]


// const givenOutput = numbersTwo.filter((x)=> x < 5);
// console.log(givenOutput);//[ 1, 2, 3, 4 ]


// const givenOutput = numbersTwo.filter((x)=> x === 5);
// console.log(givenOutput); //[ 5 ]

//4.What are the benefits of filter() function in js:-
//1.It allows you more concise and more readable code compared to traditional looping 'for loop'
//2.Similarly to 'map()' , filter() returns a  new array and does not modify the original array.
//3.Filter() returns a new array and it can be easily chained.
//4.It encourages a functional programming style.



///.Reduce():-
//1.What is Reduce() method/function in js?
 // In javscript,the Reduce() function is a higherorder function,that is used to iterate over an array and accumulates a single value based on the elements of the array.
 //It executes a reducer function on each element of the array,resulting a single value output.

//2.How does the 'Reducer()` function/method works with an array?
 //It takes a callBack function as its argument(reducer function) and an optional value as its arguments.
 //The reducer function is applied to each element of the array and along with the accumulator value.
 //The accumulator value is continuosly updated based on the logic defined into the reducer function.
 //The final value of the accumulator is returned as the result.
 //It does not modify the original array
 //Reduce returns a single value.

//3.lets take an examples of using filter():-

const arr = [1,2,3,4,5];

function findSum(arr){
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i]
}
return sum;
}

// console.log(findSum(arr)); //15


// const output = arr.reduce((acccumulator,currentValue)=>{
// acccumulator = acccumulator + currentValue;
// return acccumulator;
// },0)

// console.log(output); //15


//Lets write the function on finding the maximum  value:-

// function findMaxValue (arr){
// let max = 0;
// for(let i = 0; i < max.length; i++){
// if(arr[i] > max){
//     max = arr[i]
// }
// return max;
// }
// };

// findMaxValue();


const output = arr.reduce((acc,curr)=>{
if(curr > acc){
acc = curr
}
return acc;
},0)


console.log(output); //5





