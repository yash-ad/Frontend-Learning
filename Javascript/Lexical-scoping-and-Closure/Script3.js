//1.
// function greet(useR){
//     let useR = "Dear " + useR;
//     return function(greeting = "Hello! ") {
//         console.log(greeting+useR);
//     }
// };
// let sayHello = greet("Yash");
// sayHello();
//When variable sayHello is assigned the function greet, 
//it return another function. 
//In outer scope user is updated as `Dear ${user}`. 
//As it is a closure, 'Hello! Dear Yash' gets printed

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2.
// Guess the Output
// Send Feedback
// What will be the output of the following code?
// function foo() {
//     var a = 8;
//     function bar() {
//         console.log(a);
//     }
//     var a = a+2;
//     return bar;
// }
// var fun = foo();
// fun();
//10

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 //3.Modify Items in cart
// What gets logged to the console?

// The cart defines a function
// function cart() {

//     //Intialize the items count to 0.
//     let items = 0;

//     //Return an object with two methods:-
//     return {
//        addItem: function () {
//     //Increments the item count when a new item is added.    
//             items++; 
//         },

//     //Get the current item count.    
//         getItem: function () {
//             return items;
//         }
//     };
// }
// //Create a cart using the cart function.and stored in a variable closure using `const`.
// const closure = cart();
// closure.addItem(); //Add an item (increase the item count by 1)
// closure.addItem(); //Add an another item (increase the item count by 1)
// closure.addItem(); // Add one more item (increase the item count by 1)
// console.log(closure.getItem());//Output the total number of items, which is 3.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4.Closure Generator
// Create a closure function that generates unique registration numbers in the following format:
// A-2021_1 // For first call
// A-2021_2 // For second call
// A-2021_3 // For third call
//The function when called should return a generator function,
//which when called each time should generate the next ID. 
//The function should take the start value as an argument.

///Solution:-
// function generateID(start)
// {
// let count = 0;
// //Intialize the count variable with `let` with having the value of `start`.

// return () =>
// //The returned inner function is a closure that generates IDs.
// {
//     count++;
// return `A-2021_${count}`
// //Construct and return the next ID.

// }

// };

// const generateNextID = generateID(2021);
// console.log(generateNextID());//A-2021_1
// console.log(generateNextID());//A-2021_2
// console.log(generateNextID());//A-2021_3

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//  Lexical environement:-
// let a = `a`;
// function foo() {
// let b = 'b';
// function bar() {
// let c = 'c';
// console.log(c); // You can access me here.
// console.log(b); // You can access me too..
// console.log(a); // You can also access me..
// }
// bar();
// }
// foo(); // c b a.

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//Closures Example for revision and understanding:-
function addOne(value1)
{

   return function addTwo(value2)
    {
return value1 + value2 ;
    }
}

let increment = addOne(1);

let foo = increment(2);

console.log(foo); //3
//Code Description:-

//From the above example, we can make the following observations -
// The аddOne() funсtiоn returns its inner funсtiоn addTwo(). 
//By returning а referenсe tо аn inner funсtiоn, а closure is сreаted.

//“vаlue1” is а lосаl variable of аddOne(), аnd а nоn-lосаl variable of addTwo(). 
// Nоn-lосаl vаriаbles refer tо vаriаbles thаt аre neither in the lосаl nоr the glоbаl sсорe.
// “value2” is а lосаl variable of addTwo().


//When аdd(1) is саlled, а closure is created аnd stоred in “inсrement”. 
//In the сlоsure’s referenсing envirоnment, “vаlue1” is bоund tо the vаlue оne. 
//Variables that аre bound are also sаid tо be closed оver.                                        
//This is where the nаme closure соmes frоm.

//When inсrement(2) is саlled, the сlоsure is entered. 
//This mеаns thаt addTwo() is саlled, with the “vаlue1” vаriаble hоlding the vаlue оne.

