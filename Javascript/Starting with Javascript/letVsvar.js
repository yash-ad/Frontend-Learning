// var Vs let :-

// The difference between using the let and var keywords in a for loop,
// combined with the setTimeout function.
//Using var:-
for(var i = 1; i <= 5; i++)
{
setTimeout(function(){

    console.log(i);

},1000 

)};
//The output is-
// 6
// 6
// 6
// 6
// 6
//5 times

//Explanation:
// When you use var to declare i, it has function scope rather than block scope. 
// This means there is only one i variable shared across all iterations of the loop.
// The setTimeout function schedules the inner function to run after a delay of 1000 milliseconds (1 second).
// However,by the time the setTimeout function is executed,
// the loop has already completed, and the value of i is 6.
// So, when the inner function is executed after the delay,
// it logs the value of i, which is 6, five times.












//Using `let`:-

for(let i = 1; i <= 5 ; i++)
{
setTimeout(function(){


    console.log(i);
},1000

)};

//The output is-
// 1
// 2
// 3
// 4
// 5


// Explanation:
// When you use let to declare i, it has block scope.
// This means a new i variable is created for each iteration of the loop,
// and each instance has its own value.
// The setTimeout function schedules the inner function to run after a delay of 1000 milliseconds (1 second), just like before.
// However, since each iteration has its own separate i,
// when the inner function is executed after the delay,
// it logs the value of the respective i, which is 1, 2, 3, 4, and 5 in each iteration.
// So,the key difference here is that using let creates a new variable for each iteration with block scope,
// ensuring that each instance of the function within setTimeout captures the correct value of i. 
// This leads to the expected behavior in the second example.


//1.M.C.Q:-
// Let vs Var
// The main difference between the variables declared with var and with let is :-

//Variables declared with var have global scope,
//whereas variables declared with let have block scope.
//Variables declared with let are defined only within the block(and any blocks nested within it).

//2.M.C.Q:-
// Find the Output - I
// What will be the output of the following code?



//This javascript code defines a function called oddSum(n),that takes a positive integer `n` as input(parameter).
//the function calculates the sum of oddnumbers upto `n` and stores the cumulative sums in an array `result`.
//Finally, it returns this array.

function oddSum(n)
//function oddSum(n) defines a function that takes an input (n).
{
    let total = 0
    let result= [];
//Inside the function, let total = 0 initializes a variable total,
//to keep track of the cumulative sum of odd numbers. 
    for(let x = 1; x <= n; x++)
//A for loop iterates over x from 1 to n (inclusive). 
    { 
//let odd = 2*x-1 calculates the odd value, which represents the x-th odd number.        
       let odd = 2*x-1; 
       total += odd;
//total += odd adds the current odd number to the total sum.       
       result.push(total);
//result.push(total) appends the current value of total to the result array.      
    }
    return result;
//After the loop completes,
//the function returns the result array containing the cumulative sums of odd numbers.    
}

let result = oddSum(5);
//calls the oddSum function with an argument of 5,
//calculating the cumulative sums of odd numbers up to 5.
console.log(result); //[1,4,9,16,25]
// Explanation of the output:

// The first odd number is 1. Cumulative sum: 1.
// The second odd number is 3. Cumulative sum: 1 + 3 = 4.
// The third odd number is 5. Cumulative sum: 1 + 3 + 5 = 9.
// The fourth odd number is 7. Cumulative sum: 1 + 3 + 5 + 7 = 16.
// The fifth odd number is 9. Cumulative sum: 1 + 3 + 5 + 7 + 9 = 25.
// So, the final result array contains [1, 4, 9, 16, 25].

//Solution Description:-
//Let keyword has block scope so the total variable will be defined inside the for loop in the given code snippet. 
//The given code returns 1, 4, 9, 16, and 25, the square of the first five natural numbers.







