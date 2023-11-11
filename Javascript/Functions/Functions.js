///Basics-Of-Functions :-




//1)Function declaration :=


//1.Example Addition:-

//Given examples
let a = 1;
let b = 2;
let c = 3;


function sumOfTheNumbers(a,b) //Parameters
{

console.log("The result of a + b is : ",(a+b));
console.log("The result of a + b is : ",(b+c));    
console.log("The result of a + b is : ",(c+a));        

}


sumOfTheNumbers(a,b);  //This is a calling for function
//The result of a + b is :  3
//The result of b + c is :  5 
//The result of c + a is :  4






//2.Example Subtraction:-

const e = 6;
const f = 5;
const g = 4;

function subtractionOfNumbers(x,y)
{
const subtraction = x - y;         //Code to be exeucted or perform an operations.
console.log("The result is ",subtraction);
console.log("Done");
}

subtractionOfNumbers(e,f); // The result is   1
subtractionOfNumbers(f,g); // The result is   1
subtractionOfNumbers(g,e); // The result is  -2






//3.Example Multiplication :-
//.Using Return keyword in the function:-

const h = 9;
const i = 8;
const result = multiplyTheNumbers(h,i); //Here we called a function at the top, yes we can do that its a behaviour of javascript so called hoisting.

function multiplyTheNumbers(x,y){


    const multiplyOperation = x * y;

    return multiplyOperation;


}

console.log("Result is : ",result); //Result is :  72





//4.Division :-
//Lets take an example of hoisting:-
//Here we  have used a hoisting example or hoisting term that means its a behaviour of javascript declarations are hoisted to the top of scope,its basically relation to the  memory management.
//Ofcourse we can declare our function at the top.

function divideTheNumbers(x,y){

    const divisionOperation = x % y;

    return divisionOperation;

}



let k = 10;

let l = 20;

const getResult = divideTheNumbers(k,l);

console.log("Dividation is : ",getResult); //Here the result is division of 10 and 20 is 10.




//2)Function Expression:=


//1.Example square :-

const squareOfNumber = function(num)
{

    return num * num
}

console.log(squareOfNumber(3)); //9
console.log(squareOfNumber(4));//16
console.log(squareOfNumber(5));//25



//2.Example of addition :-

let additionOfNumber = function(num){

    return num + num;
}

console.log(additionOfNumber(6)); //12
console.log(additionOfNumber(7)); //14
console.log(additionOfNumber(8)); //16



//3.Example of Subtraction :-

let subtractionOfNumber = function(value)
{

    return value - value;
}


console.log(subtractionOfNumber(9)); //0



//4.Example :-
//Your task in this exercise is to code a function which will be able to take a word and locate the position of a chosen letter in that given word. 


//Task 1: Write a function named letterFinder that accepts two parameters: word and match.
//Task 2: Code a 'for' loop inside the function's body. The for loop's counter should start at zero, increment by 1 on each iteration and exit when the counter variable's value is equal to the length of the word parameter.
//Task 3: Add an if statement inside the for loop whose condition works as follows:

 //Access each of the letters inside the passed in word using the counter variable, with word[i]. 

 //Check if the current word[i] is equal to the value of match.

 //Task 4:console.log the following inside the body of the if statement: console.log('Found the', match, 'at', i).

 //Task 5:Write the else condition. Here you'll just console log the following: console.log('---No match found at', i).

 //Task 6:Call the letterFinder and pass it as its first argument as the string "test" and as its second argument, the string "t".



 //A function that accepts two parameters
function letterFinder(word,match){
for(let i = 0 ; i < word.length ; i++)
//This loop exists when i is equal to the length of the word.
{

//Check if the current character, word[i] , is equal to the match.
if(word[i] === match){

    console.log('Found the', match, 'at Position', i)
}
else{
    console.log('---No match found at', i)

}

}

}

letterFinder("test","e");
//No match found at 0
//Found the e at position 1
//No match found at 2
//No match found at 3


//.Example 4 :-
//Your task in this exercise is to code a function which will be able to take a word and locate the position of a chosen letter in that given word. 
//Vowel founder example using function, forLoop , and control If statement:-
function findVowelsInAlphabets(word,match){
    for( let i = 0; i < word.length; i++ ){
        if( word[i] === match){

            console.log(" vowel found : " , match , "At Index" , i)
        }
        else{
            console.log("No vowel found :",i);
        }


    }

}
findVowelsInAlphabets("AEIOU","I");
//No vowel found : 0
//No vowel found : 1
// No vowel found: 2
// No vowel found: 3
// vowel found :  U At postion 4



//Example 5 :-

function arrayBuilder(one,two,three){
    
    let arr = [];

arr.push(one);
arr.push(two);
arr.push(three);
return arr;

}
//Additionally i can save this function to call a variable
//Lets create a variable to save this function in a variable.

let simpleArray = arrayBuilder("Mango","Banana","Kiwi");

//And now I can console the values that are stored in simpleArray:-
console.log(simpleArray);





//Example 6 :-
//Write a function to find mean on 5 number:-


let mean = function(a,b,c,d)
{

return (a+b+c+d) / 4; //4+5+6+7 = 22 and 22/4 = 5.5

}

console.log(mean(4,5,6,7));//4+5+6+7 = 22 and 22/4 = 5.5 
//5.5







//Example 7 :-
//Functional programming:-


let currencyOne = 100;
let currencyTwo = 0;
let exchangeRate = 1.2;

function convertCurrency(amount,rate){

return  amount * rate;


}

//lets find the output of currencyTwo:-

currencyTwo = convertCurrency(currencyOne,exchangeRate); //(100,1.2) 100 multiply by 2.

console.log(currencyTwo); // the output is 120


//Example 8 :-
//Function calling and recursion:-

let counter = 4
function example()
{
 console.log(counter);
counter = counter - 1;
if(counter === 0) return ;
example();

}
example();


//When a functon calls itself,this is whats known as Recursion.
//Recursion is an alternative way to run repetitive code without the use of loops.



//Example 9 :-
function myDay()
{
console.log("Morning");
console.log("Afternoon");
console.log("Evening");
console.log("Night");

//myDay(); //What will happen if run this code , the function will run over and over, as there is no condition to stop it.
}

myDay();





//Example 10 :-

//Example of conversion:-

function addTwoNumbers(num1,num2)
{

    console.log(num1+num2);


}

addTwoNumbers(3,"4"); //34 string
//Since in  javascript + operator is can be used for both addition and string concatenation, which one or both operands are string ,the + operator performs string concatenation instead of string,javascript will concatenate 3 and "4" to produce the string "34".




//Example 11:-

function sumOfNums(number1,number2){


//let additionofNums = number1 + number2
//return additionofNums;
return number1 + number2; //This also an optional way to return.

}
const resultOf = sumOfNums(4,4); // 8
console.log(resultOf); 
// Here the interesting fact of function is the value will get an undefined since many functions,  by default , return the value of UNDEFINED.Function is built so as to no have the explicity set return value, it gets the default return value of undefined.


//Example 12:-

function loginUserMessage(username){
return `${username} just logged in`;


}

//const getUserName = loginUserMessage(); //undefined just logged in, Since its not defined thatswhy.

const getUserName = loginUserMessage("Yash"); //Function stored in a variable.

console.log(getUserName); //Yash just logged in









