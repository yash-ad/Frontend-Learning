
//setTimeout and closures interview question:-


//1.
// function x(){
//     var i = 1;
// setTimeout(()=>{
// console.log(i);
// },1000)
// console.log("Namaste JavaScript");
// };
// x();


// //2.Using forloop `var`:-
// function y(){
//    for(var i = 1; i <= 5; i++){
//     setTimeout(()=>{
// console.log(i);
//     },i * 1000)
//    }
//    console.log("Namaste-JavaScript");
// }
// y();

//Its logging 6 because of we have declared with a `var` so `var` is in the global scope,Now in this example the javascipt runs the code it looping constantly as the value gets at the end is 6 and in the memory allocation the value of `i is 6`, that is why it constanly prints 6.

//3.Using forloop `let`
// function z(){
// for(let i = 1; i <= 5; i++){
//     setTimeout(()=>{
// console.log("Tik-tik",i);
//     },i * 1000)
// }
// console.log("Come one hurry up!");
// };
// z();


//4.Using forloop `var` to get same output as using `let`:-
function a(){
    for(var i = 1; i <= 5; i++){
    function b(i){
setTimeout(()=>{
console.log(i);
if(i >= 5){
    console.log("Game-over");
}
},i * 1000)
    }
    b(i);
}
console.log("Lets start the game!");
};
a()
