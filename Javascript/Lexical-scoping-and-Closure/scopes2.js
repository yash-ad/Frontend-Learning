//IIFE :-
//(Immdeiately Invoke Function Expression):-

//1.What will the following statements print in the console?
// var a = (function(){
//     return typeof arguments;
//  })();
//  console.log(a);

 //The output will be,
 //An arguements is an inbuilt object in javascript which is accesible only inside functions.
 //It contains information about the arguments passed to the function. 



 //Accesibility of variables declaring using var , let :-
 //1.
 {
   //  var a = 10;
    //console.log(a);
 }

//  console.log(a);
 //Variables declared using var can be accessed outide the blovk level scope.


//2.
 {
   // let b = 30;
   //console.log(b);
 }

//  console.log(b); //An error will be thrown if you try accessing them, outside the block-level scope.

 //Variables dclared using let cannot be accessed outide the block-level scope. and it can be accessed only within the scope.


///Note-If a variable is declared using `let`,then it can only be declared once:-
//For example :-

//3.
// let c = 4;
// console.log(c);
//let c = 5; // This will throw an error because ‘c’,can not be declared again.

//4.
// let d = 3;
// console.log(d);
//d = 4; //This will not throw an error as ‘d’ can be defined again, 
//although it can’t be re-declared.


//But:-

//5.
// var b = 40;
// console.log(b);
// var b = 50;
//This will not throw an error because,‘b’ can be declared again.

//6.
// var h = 3;
// console.log(h);
// h = 4;
//This will not throw an error as ‘h’ can be defined again as well.

//Look at the following code and identify which variables can be accessed in which scope (global, function, block-level)? (multiple options correct)

//Function Scope:
// a: This variable is declared with the var keyword (var a = 10;). 
// It has function-level scope, meaning it can be accessed within the whole script.
// b: This variable is declared using the let keyword (let b = 20;). 
//It is also within the block scope where it's declared.
{
  var a = 10 ; 
  let b = 20 ; 
}

//Global Scope:
//c: This variable is assigned a value in the global scope (c = 30). 
//It can be accessed from anywhere in the code.
c = 30 ;


// Block-Level Scope:
if(c===30){
// d: This variable is declared within the if block using the let keyword (let d = 50;). 
//It can be accessed only within the if block where it is defined.   
    let d = 50 ;
    console.log(d) ;
}
else{
     var e = 20;
     console.log(e) ;
}


//Remember that `var `declarations are hoisted to the top of their containing function or script, 
// so even though `a` is declared within a block, it is actually function-scoped. 
//However, let and const declarations have block-level scope, which is why `b`/ is only accessible within the block in which it is define.
