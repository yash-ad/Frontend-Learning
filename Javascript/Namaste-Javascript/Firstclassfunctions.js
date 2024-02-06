///.function statement,function declaration and function definition both are the same things.
function x (){
console.log("called x");
};
x();

///.Anonymous functions:-
// function (){

// };
//It will throw an error , Function statement requires a name.

let a = function (){
console.log("I am from Anonymous function");
};
a();
//However we can use anonymous function as a value to a variable it works as a function expression.


///.Function Expression:-
//A function expression means that it assigns a value to a variable, and it acts like a value.

var c = function () {
console.log("Im function expression and assigned to a variable 'c'");
};
c();

///.Named Function expression:-
let d = function xyz(){
console.log("I am named function expression");
};


///.First class functions:-

let firstClassFunction = function(param1){
console.log(param1)
};
firstClassFunction(
    function(){
       
    }
);


let z = function(){
return function xyz(){

}
}
console.log(z());