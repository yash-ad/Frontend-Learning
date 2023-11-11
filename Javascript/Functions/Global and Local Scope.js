//Global and local scope in javascript:-
//Block scope variables are called a slocal variables.
//Scope examples:-

//let   a = 10;
//const b = 20;
//var   c = 30;

//console.log(a); //10
//console.log(b); //20
//console.log(c); //30

var c = 300;
let a = 100;
{
    let   a = 10;
    console.log(`Inner Value which is block scope :${a}`); //10 let a in block scope and let a in global scope and local scope ,their values are totally different and independent from each other.

    const b = 20;
    var   c = 30;  
}                   //Curly braces is known as scope.



//console.log(a);  // a is not defined because its an outer scope
//console.log(b);  // b is not defined because its an outer scope
console.log(c)     //30 because its a global variable , best practice is to avoid var keyword.

console.log(`Outer Value which is Global scope :${a}`); // 100   let a in block scope and let a in global scope and local scope , their values are totally different and independent from each other.




//Scope level and mini hoisting in javascript:-
//NestedScope :-



function fnOne() {
const userName = "Yash";


    function fnTwo(){

     const webSite = "LinkedIn"
     console.log(webSite);
      console.log(userName);
    }

    //console.log(webSite); //website is not defined ,It will caught an error because we have accessed outer of a scope.so we cant accessed rest of executions since execution starts line by line.

    fnTwo(); // LinkedIn and Yash 
}

fnOne();


//Using If statement for condition (Control flow) :-

if(true)
{

    const myName = "Yash";

    if(myName === "Yash")
    {
      const contactSite = " LinkedIn";
      console.log(myName + contactSite); //Yash LinkedIn
      
    }
//console.log(contactSite); //contactSite is not defined , it will caught an error.


}
//console.log(myName); //myName is not defined , it will caught an error.






