//Revisiting old concepts - Scopes :-

// //1.Example:-
// var a = 10; //Globally

// function outer()  // outer is a global scope.
// {
// var a = 20;
// var b = 40;       // With in a function that's why its a function scope.
// console.log(a,b);  //20 40
// }
// console.log(a,b);  
// //Variables defined in a function scope is not accessible outside of the scope.
// // b is not defined because , var a is globally but whereas b is  not defined.
// outer();  



//2.Example:-
// var b = 50;

// function outerFn()
// {
// var a = 100;
// var b = 60;

// function innerFn()
// {

// var a = 1000;
// console.log("InnerFn",a,b); //1000 60.
// }

// innerFn();

// console.log("OuterFn",a,b); //100 60.
// }
// outerFn();

// console.log("Im Global"); //Im Global.


//3.What will the following code print in the console?
// var a = 10;
// function foo()
// {
// var a = 20;
// console.log(a); //20 2nd
// console.log(window.a);  //10 3rd   
// }
// console.log(a); // 10 first  
// window.foo();


//4.Local Scope
//What will the following code print in the console?
// function foo(a){
// a = 20;
// console.log(a);
// }
// foo(10);    
// console.log(a); //20 Error: a is not defined

//function foo(a) is a function declaration that takes a parameter a.
//Inside the foo function, the value of a is changed to 20 and then printed using console.log(a). 
//This will print 20 in the console.
//foo(10) is called with the argument 10,
//which means the parameter a within the foo function will take the value of 10 initially, 
//but it's then changed to 20 within the function.
//The next line console.log(a) outside the foo function is trying to print the value of a variable named a in the current scope.
//However, there's no variable named a declared in the global scope. 
//This will also result in an error, similar to the previous response:


//5.What is Output
// Consider the following code snippet.
// var h = 10;
// console.log(h);  //10
// var h =20;
// console.log(h); //20


//6.What is the Expected Output
//What will the following code print in console?

//var a = 10; declares a variable `a` with a value of 10.
var a = 10;

//var b; declares a variable b without assigning a value, so it's undefined.
var b;

// The outer function is defined. Inside it:
function outer() //Parent

{
//var b = 30; declares a variable `b` with a value of 30,
//within the scope of the outer function.   
    var b = 30;

//function inner(a) defines the inner function with a parameter `a`.
    function inner(a) //Child
    {
      
//var a = 30; declares a new variable `a` with a value of 30 within the scope of the inner function.
    var a = 30;

//prints the values of a and b, post-incrementing both variables. 
//This will print 30 30 (for a and b respectively).
console.log(a++ ,b++) //30 30
    };

//console.log(a, ++b); within the outer function prints the value of a and pre-increments the value of b. 
        console.log(a, ++b); //10,31

// inner(a); is called with `a` as an argument 
// (a is 10 at this point). 
// Inside the inner function, a is re-declared as 30, 
// but this doesn't affect the value of `a` from the outer scope.
        inner(a);
};
// outer(); is called, executing the outer function and 
// producing the console.log outputs mentioned above.       
outer();

// Finally, console.log(a++, b++); 
// Outside the outer function prints the values of a and b, 
// post-incrementing both. This will print 10 .
console.log(a++,b++);


//7.What is the Expected Output
// What will the following code print in console?
//Code explanation:-

//1.var a defines with a value of 10.
var a = 10; //Grandparent

//2.Outer function is defined.
function outer() //Parent
{
 //3.var `a` defines with a value of 10 within the  scope of outer function.   
    var a = 20;

//4. var `b` defines with a value of 30 within the scope of outer function.   
    var b = 30;

//5. Inside the Inner function is defined.
    function inner(a) //Child
    {
//6. var `a` defines with a value of 30 within the scope of inner function.        
        var a = 30;
//7.Prints the value of  `a` and `b` which is post-incrementing both variables:       
        console.log(a++ ,b++) //  30 30.
        }
//8.Within the outer funcion , prints the value of `a` from the outer function is 20 and the value of `b` from the outer function which is pre-Incrementing  that means the value of b is 30 and pre means addition with one = 31;     
    console.log(a, ++b); // 20 31.

 //9.inner(a) function is called as an argument `a`, now the value of `a` is 20 because of outer function,
 // the inside an innner function the `a` is redeclared as the value of 30,but this doesnt affect the value fo `a` from the outer scope.   
    inner(a);
}
//10.outer is called,executing the `outer function.
outer();

//11.Finally the execution is console.log(a++); which is an outside the outer function, now prints the value of`a` and then post-increments it this will print 10.
console.log(a++); // 10.




//1.Setting the Stage:
//We start with a variable `a` that has a value of 10.

//2.Outer Function:
// we enter the outer function.
// Inside the outer function:
// A new variable a is created with a value of 20, but this doesn't affect the outer a.
// A variable b is created with a value of 30.
// We print the value of the inner a (which is 20) and increment the inner b by 1, making it 31.


//3.Inner Function:
//we enter the inner function called from within outer.
// Inside the inner function:
// A new variable a is created with a value of 30, but this doesn't affect the outer a.
// We print the value of the inner a (which is 30) and the value of the inner b (which is 30), and then increment both by 1. So, we print 30 30.








