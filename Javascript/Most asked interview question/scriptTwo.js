// //Lexical scope example:-

// //1.
// let a = 10;
// let outerFunc = function(){
// let b = 20;
// console.log("a and b is accessible:outer",a , b); //10,20;

// let innerFunc = function(){
// let c = 30;
// console.log("a , b and c is accessible:inner",a,b,c); //10,20,30;
// }
// innerFunc();
// return;
// };
// outerFunc();
// console.log("only 'a' is accessible (global scope)",a); //10;


// //JavaScript Coding Interview Questions:-

// //2.Guess the outputs of the following codes:-
// //code 1:-
// function func1(){
//     setTimeout(()=>{
//       console.log(x);
//       console.log(y);
//     },3000);
  
//     let x = 2;
//     let y = 12;
//   }
//   func1();

//   ///.Code 1 solution:-
// //The output will be 2 and 12 ,even though 'let' variables are not hoisted because of async nature of javascript,and hence javascript is single threaded and first precedence is for sychronous code,
// //the complete function code runs (let x = 2 and let y = 12) before the asychronous operation of setTimeout functions thats why it accessible for both x and y.


// //code 2:-
// function func2(){
//     for(var i = 0; i < 3; i++){
//       setTimeout(()=> console.log(i),2000);
//   }
//   }
//   func2(); // 3 3 3 ;
//  ///.Code 2 solution:-
// //The output will 3 three times,since variable declared with the 'var' does not have a block scope and also in  the for loop the variable 'i' is incremented first and then checked it.


// //if with the 'let' keyword the sequence order will be 0,1,2; respectively  and it delays with 2 seconds.

// //code 3 :-
// (function(){
//     setTimeout(()=> console.log(1),2000);
//     console.log(2);
//     setTimeout(()=> console.log(3),0);
//     console.log(4);
//   })();
// ///.Code 3 solution:-
// //The output will be in the sequence of order 2,4,3,1;
// //The code explanation is javascript is running the code line by line , it starts with the first line there is a setTimeout function which is an asyncchronous operation or behavior , it registers to the callback function for 2000ms .
// // Then it moves to the second line of code which is a synchronous it will quickly log to the console of printing the value of 2;
// // Moving ahead to the third line of code which is an again asynchronous code, registers to the callback function with 0 seconds;
// // finally javascript will move the last line of code which is a console.log and it will quicky log to the console
// //the callback functions are waiting for executing in the task queue the first will execute console.log(3);becasue it has 0 miliseconds
// //then with the console log of 2000 which will log to the console at after 2000 miliseconds.


// //2.Guess the outputs of the following codes:-
// // Code 1:
// let x= {}, y = {name:"Ronny"},z = {name:"John"};
// x[y] = {name:"Vivek"};
// x[z] = {name:"Akki"};
// console.log(x[y]);

// ///.The code 1 solution will be  { name: 'Akki' },since Adding Objects as properties of another objects shpuld be done carfeully
// //Writing x[y] = {name:”Vivek”} , is same as writing x[‘object Object’] = {name:”Vivek”} 
// //While setting a property of an object, javascript coerces the parameter into a string.
// //Therefore, since y is an object, it will be converted to ‘object Object’.


// // Code 2:
// function runFunc(){
//     console.log("1" + 1); //"11"
//     console.log("A" - 1); //NaN
//     console.log(2 + "-2" + "2");2-22
//     console.log("Hello" - "World" + 78);//NaN
//     console.log("Hello"+ "78");//Hello78
//   }
//   runFunc();

//   // Code 3:
// let p = 0;
// let q = false;
// console.log((p == q)); //True - It checks for only for value using 'Equality opeator'.
// console.log((p === q)); //False - It checks both value and type using 'Strict equality operator';




// // 3. Guess the output of the following code:
// var k = 23;

// (function(){
//   var k = 43;
//   (function random(){
//     k++;
//     console.log(k);
//     var k = 21;
//   })();
// })(); 

// // Output is NaN.
// // random() function has functional scope since k is declared and hoisted in the functional scope.

// //.Rewriting the random function will give a better idea about the output:-
// function random(){
//     var x; // x is hoisted , because it is declared not intialized.
//     x++; // x is not a number since it is not initialized yet.
//     console.log(x); // Outputs NaN
//     x = 21; // Initialization of x
//   }


///4. Guess the outputs of the following code:
// Code 1

// let hero = {
//     powerLevel: 99,
//     getPower(){
//       return this.powerLevel;
//     }
//   }
  
//   let getPower = hero.getPower;
  
//   let hero2 = {powerLevel:42};
//   console.log(getPower());
//   console.log(getPower.apply(hero2));




//     // Code 2
//     const a = function(){
//         console.log(this);
      
//         const b = {
//           func1: function(){
//             console.log(this);
//           }  
//         }
      
//         const c = {
//           func2: ()=>{
//             console.log(this);
//           }
//         }
      
//         b.func1();
//         c.func2();
//       }
//       a();
      


        // Code 3
  
//   const b = {
//     name:"Vivek",
//     f: function(){
//       var self = this;
//       console.log(this.name); //vivek
//       (function(){
//         console.log(this.name); //undefined
//         console.log(self.name); //vivek
//       })();
//     }
//   }
//   b.f();



//   5. Guess the outputs of the following code:-

// Code 1

// (function(a){
//     return (function(){
//       console.log(a);
//       a = 23;
//     })()
//   })(45); //45

  //Even though `a` is defined in the outer function, due to the closure the inner functions have access to it.



// Code 2:-
// Each time bigFunc is called, an array of size 700 is being created,
// Modify the code so that we don't create the same array again and again

// function bigFunc(element){
//     let newArray = new Array(700).fill('♥');
//     return newArray[element];
//   }
  
//   console.log(bigFunc(599)); // Array is created
//   console.log(bigFunc(670)); // Array is created again


  //This code can be modfifed using closures:-


//   function bigFunc(){
//     let newArray = new Array(700).fill('♥');

//     return (element)=> newArray[element];
//   }

//   let getElement = bigFunc();

//   getElement(599)
//   getElement(670)



  // Code 3
// The following code outputs 2 and 2 after waiting for one second
// Modify the code to output 0 and 1 after one second.

// function randomFunc(){
//     for(var i = 0; i < 2; i++){
//       setTimeout(()=> console.log(i),1000);
//     }
//   }
//   randomFunc();
// 2 2;



//The minor change is to use `let` instead of `var` keyword ,since variable declared with the 'var' does not have a block scope and also in  the for loop the variable 'i' is incremented first and then checked it.
function randomFunc(){
    for(let i = 0; i < 2; i++){
        setTimeout(()=> console.log(i),1000)
    }
}

randomFunc();
//0 1;


// 7. Implement a function that returns an updated array with r right rotations on an array of integers a .
// Example:

// Given the following array: [2,3,4,5,7]
// Perform 3 right rotations:
// First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]

// return [4,5,7,2,3]

// Answer:

function rotateRight(arr,rotations){
  if(rotations == 0) return arr;
  for(let i = 0; i < rotations;i++){
    let element = arr.pop();
    arr.unshift(element);
  }
  return arr;
}
rotateRight([2, 3, 4, 5, 7], 3); // Return [4,5,7,2,3]
rotateRight([44, 1, 22, 111], 5); // Returns [111,44,1,22]   



// 8. Write the code for dynamically inserting new components.
{/* <html> 
<head> 
<title>inserting new components dynamically</title> 
<script type="text/javascript"> 
function addPara (){
    let para = document.createElement('p');

    let text = document.createTextNode('This is the other  node');

    para.appendChild(text);

    document.getElementById('parent1').appendChild(para);
}
</script> 
</head> 
<body> <p id="parent1">firstP<p> </body> 
</html>

 */}


// 9. Write the code given If two strings are anagrams of one another, then return true.

var firstWord = "Deepak";
var secondWord = "Aman";

isAnagram(wordOne, wordTwo); // true

function isAnagram(one, two) {
  //Change both words to lowercase for case insensitivity..
  var a = one.toLowerCase();
  var b = two.toLowerCase();

  // Sort the strings, then combine the array to a string. Examine the outcomes.
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}

// 10. Write the code to find the vowels
const findVowels = str => {
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
      count++
    }
  }
  return count
}





