

// setTimeout(()=>{
// console.log("Timer");
// },1000)


// function x(y) {
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y")
// });


//Creating an eventlistener in js:-
// let count = 0;
// document.getElementById("clickMe")
// .addEventListener('click',function(){
// console.log("Button clicked",++count);
// });


//Closures along with eventlisteners:-
function attachEventListener(){
    let count = 0;
    document.getElementById("clickMe").addEventListener('click',function xyz(){
        console.log("Button clicked",count++);
    })
};

attachEventListener();


// now here the event handler is function xyz() is a callback function.