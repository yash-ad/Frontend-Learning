//Let and Closures:-

//1.Using Var:-
//Global Scope:-
// for (var i = 1;  i <= 5; i++) 
// {
//  setTimeout(function(){

//     console.log(i);
//  },1000);
 
// } // 6 6 6 6 6 6

//1.You have a loop that goes from 1 to 5. 
//During each iteration, it sets up a timeout to log a value.
//The setTimeout function is used to schedule a task to run after a certain amount of time 
//(in this case, 1000 milliseconds or 1 second). 
//It takes two arguments: a function to execute and the delay time.

//Inside the loop, a function is defined for each iteration. 
//This function logs the current value of i to the console.

//The loop runs very quickly and sets up the timeouts almost simultaneously for each iteration.
//After the loop finishes, 
//the setTimeout functions start to execute their respective tasks,
//but they all share the same i variable from the loop.

//Since the setTimeout functions run after the loop finishes, 
//they all see the final value of i, which is 6.
//So, each of the console.log(i) statements inside the setTimeout functions outputs 6, 
//because they all refer to the same i variable.
//In simpler terms, the loop sets up multiple timeouts, 
//but by the time they execute, the loop has already finished, 
//and they all use the last value of i, which is 6. 
//This is why you see 6 6 6 6 6 in the output.

///////////////////////////////////////////////////////////////////////////////////////////////////////

//2.Using Let:-
//Block-Scope:-
// for (let i = 1; i <= 5; i++) 
// {
//  setTimeout(function()
//  {

//     console.log(i);
//  },1000);
 
// }; // 1 2 3 4 5
//By using let, each iteration of the loop creates a new block-scoped variable i, 
//preserving its value for the corresponding setTimeout function. 
//This will give you the output 1 2 3 4 5.

/////////////////////////////////////////////////////////////////////////////////////////////////

///.Problems and their solutions:-

//1.var in Loop
// What will the following code print in console?
// for(var a = 1; a < 5; a++)
// {
// setTimeout(function()
// {
// console.log(a)
// }
// , 1000);
// } //5 5 5 5 (4 times executed);


//2.let in Loop
// What will the following code print in console?
// for(let a = 1; a < 5; a++)
// {
//     setTimeout(function()
//     {
//     console.log(a)}
//     , 1000);
// } // 1 2 3 4 

///////////////////////////////////////////////////////////////////////

//What is the expected output?
//Using while loop:-
// function makeArmy() 
// {
//     let shooters = []; //2.The "shooters" array is an array of functions.
//     let i = 0;
//     while (i < 10) {
//       let shooter = function() {
//         console.log( i ); 
//       };
//       shooters.push(shooter);
//       i++;
//     }
//     return shooters;
//   }
//   let army = makeArmy();//1.When you call (invoke) makeArmy(),the while loop runs, and when the loop ends, the final value of i becomes 10.
//   army[0](); //3.When you call makeArmy[0 th position in an array]();, it runs the the function that logs the value of i 10.
//   army[5](); //4.Similarly for makeArmy[5 th position in an array](); it runs the function that logs the value of i 10.

  //Explanation: 
//   The ‘shooters’ array is an array of functions. 
//   When you call makeArmy(), the while loop runs, 
//   and when the loop ends, the final value of i becomes 10. 
//   When you call makeArmy[0](), 
//   it runs the function that logs the value of i 10, 
//   similarly for makeArmy[5]().


///////////////////////////// //////////////////////////    /////////////////////////////
// What is the expected output?
//Using forLoop:-

// function makeArmy() {
//     let shooters = [];
//     for(let i = 0; i < 10; i++) {
//       let shooter = function() {
//         console.log( i );
//       };
//       shooters.push(shooter);
//     }
//     return shooters;    
//   }
//   let army = makeArmy();
//   army[0]();
//   army[7]();






/////////////////////////////////////////////////////////////////////////////////////////////////

//IIFE:-
// Send Feedback
// What will the following code snippet print in console?
let Sequence = (function sequenceIIFE() {
    let current = 0;
    return {
        getCurrentValue: function() {
            return current;
        },  
        getNextValue: function() {
            current = current + 1;
            return current;
        }
   };
}());
console.log(Sequence.getNextValue()); //1
console.log(Sequence.getNextValue()); //2
console.log(Sequence.getCurrentValue());//2.


////////////////////////////////////////////////////////////////////////////////////////////////////////

// What is the Output
// Send Feedback
// What will the following code print in the console?
// let people = function(person, age)
//  { 
//         this.person = person; 
//         this.age = age; 
//         this.info = function() 
//         { 
//             console.log(this);  
//            setTimeout(() => 
//            {  
//             console.log(this.person + " is " + this.age + " years old"); 
//            }, 3000); 
//         } 
//     }  
// let person1 = new people('John', 21); //Will create a new people object ('John', 21);
// person1.info() //call its constructor function,which assigns of value of person and age to the object and define the function `info`.

//John is 21 years old

//The statement ‘let person1 = new People('John', 21);’ 
//will create a new People object and call it’s constructor function. 
//Which assigns value of person and age to the object and define the function info. 
//The statement ‘person1.info();’ will invoke the function info of the person1 object. 
//In function info ‘console.log(this); ’ this keyword refers to an object, 
//that object which is executing the current bit of javascript code. 
//After 3000ms setTieout() will print John is 21 years old.


//////////////////////////////////////////////////////////////////////////////////

const myDetails = function(name,age)
{

    this.name = name;
    this.age = age;
    this.info = function(){

        console.log(this);

        setTimeout(()=>
        {
console.log(`Hello My name is ${this.name} and ${this.age} years old!`);

        },1000)
    }
};

let person1 = new myDetails("Yash",25);
person1.info();
