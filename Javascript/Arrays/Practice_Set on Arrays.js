 //Practice set on Arrays :-

 //1.create an array of numbers take input from the user to add numbers to this array:- (Input from the user means using prompt and add numbers to this array using push method hence to add the element of the end of an array:=

 const numbers = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ];

 let user_Input = prompt("Enter a number :");// 55 // 31

 user_Input = Number.parseInt(user_Input) // why do we used parseInt because user_Input its a string and parseInt is used for converting string to an integer or a number.
 //Using push() method
 numbers.push(user_Input); //Add the element to the end of an array

  console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 55] , [1, 2, 3, 4, 5, 6, 7, 8, 31] 


 //Using unshift() method
numbers.unshift(user_Input) //Add the element to the beginning of an array
 console.log(numbers); // [55, 1, 2, 3, 4, 5, 6, 7, 8]







 //2.Keep adding numbers to the array from question 1 using while or do while loop with an array until 0 is added to the array:-

 const theNumbers = [11 , 12 , 13 , 14 , 15 , 16 ];
let a;
 do {a = prompt("Enter your number here : ");

     a = Number.parseInt(a);

  theNumbers.push(a);
 }

while( a!== 0);   // The strict inequality (!==) operator checks whether its two operands are not equal, Zero is the only number that evaluates to falsy
 console.log(theNumbers); // [11, 12, 13, 14, 15, 16, 11, 22, 44, 0] the last number ended with 0 with closing loop.






//3.Filter for numbers divisble by 10 from a given ARRAY:-

let arr = [1 , 2 , 3 , 40 , 50 , 200 , 120 , 350 , 460 , 500,65 , 78 , 80 , 90];

// Filter function 
let usingFilterFn = arr.filter((value)=>{

return value % 10 === 0 ;    // Value is divisble by 10 with  always use strict eqaulity operator with equal value and equal type it compares both the value and the type of two operands , Zero is the only number that evaluates to falsy

})

console.log(usingFilterFn); // (9) [40, 50, 200, 120, 350, 460, 500, 80, 90]


///Imp Tip :- 0 and 1 are type 'number' but in a Boolean expression, 0 casts to false and 1 casts to true . Since a Boolean expression can only ever yield a Boolean, any expression that is not expressly true or false is evaluated in terms of truthy and falsy. Zero is the only number that evaluates to falsy







//4.Create an array of square of given numbers (Using Map method because it returns an array) (Square that means multiply here)  :-

const array = [ 10 , 20 , 30 , 40 , 50 , 60 ];

const arrSquare = array.map((value)=>{

    return value * value 
})

console.log(arrSquare); // 100 , 400 ,900 , 1600 , 2500 , 3600 



//5.Using reduce to calculate factorial of a given number from an array here we can multiply(Because reduce returns a value) :-

const Array = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

const reduceFunc =  newArray.reduce((value1 , value2)=>{

return value1  * value2

})

console.log(reduceFunc); // 3628800
