// Overview: 10 Days of JavaScript


//1.:-

// This series focuses on learning and practicing JavaScript. Each challenge comes with a tutorial article, and you can view these articles by clicking either the Topics tab along the top or the article icon in the right-hand menu.

// Objective

// In this challenge, we review some basic concepts that will get you started with this series. Check out the tutorial to learn more about JavaScript's lexical structure.

// Task

// A greeting function is provided for you in the editor below. It has one parameter, . Perform the following tasks to complete this challenge:

// Use console.log() to print Hello, World! on a new line in the console, which is also known as stdout or standard output. The code for this portion of the task is already provided in the editor.
// Use console.log() to print the contents of  (i.e., the argument passed to main).
// You've got this!

// Input Format

// Data Type	Parameter	Description
// string		A single line of text containing one or more space-separated words.
// Output Format

// Print the following two lines of output:

// On the first line, print Hello, World! (this is provided for you in the editor).
// On the second line, print the contents of .
// Sample Input 0

// Welcome to 10 Days of JavaScript!
// Sample Output 0

// Hello, World!
// Welcome to 10 Days of JavaScript!
// Explanation 0

// We printed two lines of output:

// We printed the literal string Hello, World! using the code provided in the editor.
// The value of  passed to our main function in this Sample Case was Welcome to 10 Days of JavaScript!. We then passed our variable to console.log, which printed the contents of .


/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*    Parameter:
*   parameterVariable - A string of text.
**/

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
console.log(parameterVariable)

return parameterVariable;
};
greeting("Welcome to HackerRank!");


///// ////////////// ///////////////////////////////////////// /////////////////////////////////// //////////////////////////////////// ////////////////////////////// /////////////////////////////////// //////////////////////////////////////////// ///////////////////////////////////////////////////


//2.

// Objective

// Today, we're discussing data types. Check out the attached tutorial for more details.

// Task

// Variables named , , and  are declared for you in the editor below. You must use the  operator to perform the following sequence of operations:

// Convert  to an integer (Number type), then sum it with  and print the result on a new line using console.log.
// Convert  to a floating-point number (Number type), then sum it with  and print the result on a new line using console.log.
// Print the concatenation of  and  on a new line using console.log. Note that  must be printed first.
// Input Format

// Data Type	Parameter	Description
// string		The string representation of an integer you must sum with .
// string		The string representation of a floating-point number you must sum with .
// string		A string of one or more space-separated words you must append to .
// Output Format

// Print the following three lines of output:

// On the first line, print the sum of  and the integer representation of .
// On the second line, print the sum of  and the floating-point representation of .
// On the third line, print  concatenated with . You must print  before .
// Sample Input 0

// 12
// 4.32
// is the best place to learn and practice coding!
// Sample Output 0

// 16
// 8.32
// HackerRank is the best place to learn and practice coding!
// Explanation 0

// When we sum the integers  and , we get the integer .
// When we sum the floating-point numbers  and , we get . When we concatenate HackerRank with is the best place to learn and practice coding!, we get HackerRank is the best place to learn and practice coding!.

// You will not pass this challenge if you attempt to assign the Sample Case values to your variables instead of following the instructions above.

// Language: JavaScript (Node.js)
// More
// 1242526272829303132333435
// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });
    
//     main();    
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /**
// *   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
// *   Print three lines:
// *   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
// *   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
// …}


// function main() {
//     const secondInteger = readLine();
//     const secondDecimal = readLine();
//     const secondString = readLine();
    
//     performOperation(secondInteger, secondDecimal, secondString);
// }
// Line: 1 Col: 1
// **
// *   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
// *   Print three lines:
// *   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
// *   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
// *   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
// *
// *	Parameter(s):
// *   secondInteger - The string representation of an integer.
// *   secondDecimal - The string representation of a floating-point number.
// *   secondString - A string consisting of one or more space-separated words.
// **/
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number type) on a new line.
    console.log(firstInteger + Number(secondInteger));
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number type) on a new line.
    
    console.log(firstDecimal + Number(secondDecimal));
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The variable 'firstString' must be printed first.

    console.log(firstString + secondString);
}

performOperation(12, 4.32, "is the best place to learn and practice coding!");