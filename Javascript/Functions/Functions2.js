// //Function within Function:-
// //1.

// let varName = "Im Global";

// function outerFn()
// {
//     let outerVar = 10;
//     //let varName = "Im Outer";

//  function innerFn()

//  {
//      let innerVar = 100;
//      //let varName = "Im Inner";
//     //console.log(outerVar);
//     console.log(varName);  //Im Inner 1st


//  }
//  //console.log(innerVar); //It will give an error innerVar is not defined.because it doesnot exist outside of scope innerFn() and ofcourse its a child scope function.
//  innerFn();
//  console.log(varName); //Im outer 2nd execution



// }

// outerFn(); //The answer is 10; Because outerFn is a parent and innerFn is a child so parent have an access. 
// console.log(varName); // And 3rd execution which is global 


// //2.
// // Function Within Function
// // Send Feedback
// // What is the expected output of following code:-

// function a() {
//     console.log("Inside a");

//     function b() {
//         console.log("Inside b");
//     }
// }

// a(); //console.log("Inside a"); Because we have called this first function;


//3.
// Calling Inner Function
// Send Feedback
// What is the expected output of following code

// function oneFn() {
//     console.log("Inside oneFn");

//     function twoFn() {
//         console.log("Inside twoFn");
//     }
// }

// twoFn(); //twoFn is not defined ,because we have accessed outside of a function.


//4.
// Function Call Inside Function
// Send Feedback
// What is the expected output of following code?

var combinedString = "";
function a() {
    combinedString = "Inside a";

    function b() {
        combinedString = combinedString + " Inside b";
    }

    b();
}

a();
console.log(combinedString) //Inside a  Inside b


//5.Functions Expressions :-
// A named function expression which means that function has a name.

var factorial = function fact(n){ //1.var factorial = function fact(n) This line declares a variable called factorial and assigns it a function. The function takes a single parameter (n) and is named fact. It calculates the factorial of the input number n.

var ans = 1; //2.var ans = 1;: This line initializes a variable ans and sets it to 1. The variable ans will be used to store the factorial result.


for(var i = 1; i <= n; i++){ //for(var i = 1; i <= n; i++){ ... }: This is a for loop that starts with i as 1 and runs as long as i is less than or equal to the input number n. In each iteration of the loop, i is incremented by 1.

    ans = ans * i; //ans = ans * i;: Within the for loop, this line multiplies the current value of ans by the value of i and stores the result back in the ans variable. This way, it keeps updating ans by multiplying it with the numbers from 1 to n.
}
//After the for loop finishes, the function returns the final value of ans, which represents the factorial of the input number n.
return  ans;


};
//console.log(factorial);
//console.log(factorial(5));: This line calls the factorial function with an input value of 5 and logs the result to the console.
console.log(factorial(4)); //24
//console.log(factorial(5)); //120

//Sure, let's break down the code step by step:
// Initially, ans is set to 1.
// The for loop starts with i = 1 and multiplies ans by 1, so ans remains 1 (1 * 1).
// The loop continues with i = 2, and now ans is updated to 1 * 2 = 2.
// The loop continues with i = 3, and ans is updated to 2 * 3 = 6.
// The loop continues with i = 4, and ans is updated to 6 * 4 = 24.
// Finally, the loop continues with i = 5, and ans is updated to 24 * 5 = 120.
// So, the function returns 24, which is the factorial of 4.
// So, the function returns 120, which is the factorial of 5.


//5.Functions Expressions :-

let factorialTwo = function fact2(n)//1.let factorialTwo = function fact2(n) This line declares a variable called factorialTwo and it assigns it a function. The function takes a single parameter (n) and is named fact2. It calculates the factorial of the input number n.

{

let answer = 1; //2.let answer = 1;: This line initializes a variable answer and sets it a value 1. The variable answer will be used to store the factorial result.


for(let i = 1; i <= n; i++)//for(let i = 1; i <= n; i++){ ... }: This is a for loop that starts with i as 1 and runs as long as i is less than or equal to the input number n. In each iteration of the loop, i is incremented by 1.
{

    answer = answer * i; //answer = answer * i;: Within the for loop, this line multiplies the current value of answer by the value of i and stores the result back in the answer variable. This way, it keeps updating answer by multiplying it with the numbers from 1 to n.
}

return answer;//After the for loop finishes, the function returns the final value of ans, which represents the factorial of the input number n.

};

console.log(factorialTwo(6));//This line calls the factorialTwo function with an input value of 6 and logs the result to the console.

// Initially, ans is set to 1.
// The for loop starts with i = 1 and multiplies ans by 1, so ans remains 1 (1 * 1).
// The loop continues with i = 2, and now ans is updated to 1 * 2 = 2.
// The loop continues with i = 3, and ans is updated to 2 * 3 = 6.
// The loop continues with i = 4, and ans is updated to 6 * 4 = 24.
// Finally, the loop continues with i = 5, and ans is updated to 24 * 5 = 120.
// Finally, the loop continues with i = 6, and ans is updated to 120 * 6 = 720.
// So, the function returns 24, which is the factorial of 4.
// So, the function returns 120, which is the factorial of 5.
// So, the function returns 720, which is the factorial of 6.




///.Function declaration and Function expression:-

//console.log(functionExpression); //Undefined
//1.
let functionExpression = function expr()
{

console.log("Hello i'm function expression");
};

//console.log(functionExpression); //Function definition becuase we have not invoked the function

//2.
console.log(functionDeclaration);
function functionDeclaration()
{
console.log("Hello i'm function declaration");

}
//console.log(functionDeclaration); //Function declaration


//3.
// Function Expression
// Send Feedback
// What is the output of following code?
let RectArea = function(width, height) {
    return width * height;
}

console.log(RectArea(5,4)); //20


//4.
// Nested Variable Function

// What is the expected output of following code?
function a() {
    console.log("Inside a");

    function b() {
        console.log("Inside b");
    }
   
}

a();
b(); //B is not defined becuase we are calling this function outside of a scope.



//5.
// Function Expression Syntax
// Choose the correct syntax for a function expression.

//(.1)
let variable_Name = function(){ /*function body*/ }


//(.2)
let var_Name = function function_Name(){ /*function body*/ }




//The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.























