///.CodingNinja Problem solving 
//1.
// Create and Modify Objects
// Write a JavaScript program to:-

//  Create a student object with three properties: name, age, and roll no.
// let student = 
// {
// name   :"Shreyas",
// age    :13,
// rollno :32
// }

//  Create an object address with two properties, City and state.
// let address =
// {
// city:`Pune`,
// state:`Maharashtra`
// };

// Add this object property to the student object.
//student.address = address;
//console.log(student);
//  {
// name   :"Shreyas",
// age    :13,
// rollNo :32,
// address:{city:`Pune`,state:`Maharashtra`}
//  }

// Now delete the roll no property.
//delete student.rollno;

//console.log(student);
//  {
// name   : "Shreyas",
// age    : 13,
// address: {city:`Pune`,state:`Maharashtra`}
//  }






// 2.Create Empty Object
// Which of the following will create an empty object?
//Ans:
// var obj = {}
// obj = new Object()




//3.An Empty Object
// Let’s say that you created an empty object 'obj'? What will the below statements print on the console?
// obj.key1 = "value1";
// console.log(obj.key1);
//Ans: value1.


//4.Find the Output:-
// Consider following code snippet -
// let student = {
//   firstName: "jonathan",
//   lastName: "doe"
// }

// delete student.firstName;
// console.log(student.firstName+ " "+ student.lastName);
// What is the expected output?
//Undefined doe.



//5. Function With Variable Argument
// What is the correct way of declaring a function with variable arguments?
//Ans:-
// function functionName(...args)


// 6.Print on Console
// What will the following code print on the console?
// function abc(arr) {
//     var arr2;
//     for(i in arr) {
//         arr2[i] = i;
//     }
//     return arr2;
// }

// var arr = [12, 56, 48, "hello"];
// console.log(abc(arr)[1]);
// Solution Description
// arr2[i] = i; this line gives a type error because we can’t set properties of undefined.



// //7. Three Objects:-
// // What will the below JavaScript lines print on the console?
// var obj1 = {};
// var obj2 = new Object();
// var obj3 = {};
// console.log(obj1===obj2, obj1 === obj3);
// false false
// Primitives like strings and numbers are compared by their value,
// while objects like arrays and objects are compared by their reference. 
// So, obj3 and obj2 both refer to different instances or different memory locations.
// Similarly for obj1 and obj3.




//8.What is Printed
// What will the below code do -
//  var count = 1;

// function counting() {
//       console.log(count++);
//       if(count == 5) {
//             clearInterval(abc);
//         }
//     }
//     var abc = setInterval(counting, 300);
//     console.log(abc);
// Print numbers from 1 to 4.



//9.Find the Output - III
// Send Feedback
// What will be the output of the following code:
// let list = [4, 5, 6];
// for (let i in list) {
//  console.log(i);  //0 1 2.
// }

// for (let i of list) {
//  console.log(i);  // 4 5 6.
// }

// Solution Description
// Both for..of and for..in statements iterate over the list. 
// The values iterated on are different though, for..in returns a list of keys on the object being iterated, 
// whereas for..of returns a list of values of the numeric properties of the object being iterated.


//10.Guess the output:-
// Find the output of the code:

// setTimeout(function () {
//   console.log("a")
// },20)
// setTimeout(function () {
//   console.log("b")
// })
// console.log("c")

// Solution Description
// c and b will be instantly printed on the console, 
// but ‘a’ will be printed after 20miliseconds due to the setTimeOut() method.





//11.Using decrement which counts start from 10 to 1:-
//Lets do this task from codingNinjas lecture:-
// let secThree = 10;
// function reverseTimerCounter()
// {
// console.log(`Your countdown starts now :`,secThree);
// secThree--;
// if(secThree === 0)
// {
// clearInterval(idThree);
// console.log(`Game Over`);
// }

// };

// let idThree = setInterval(reverseTimerCounter,1000);




// 12.Create Timer:-
// Write a program to print 1 after 1 sec, 2 after 2 sec till 5. 
// Complete the given code to get the desired output as shown in the expected output.

// function timer() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function(num) 
//     {
//       console.log(num);
//       } ,
//       i * 1000,i); // i * 1000 milliseconds delay for each number
//       console.log("Hello ninjas!");
//     }
//   }
//   timer();
  
  
  // code description:-
  
  // We use a for loop to iterate from 1 to 5.
// Inside the loop, we use the setTimeout function, which takes a callback function and a delay (in milliseconds) as its arguments.
// The callback function is defined as an anonymous function that takes one argument num (which is the loop variable i).
// We pass i * 1000 as the delay to setTimeout, which means each number will be printed after a delay of i seconds (since 1 second = 1000 milliseconds).
// The last argument to setTimeout is i, which is the value we want to print. It will be passed to the callback function as the num argument.
// The loop continues to execute, but since the setTimeout function is asynchronous, it will schedule the printing of each number at the appropriate time, allowing the "Hello ninjas!" message to be printed in between.



// 12.Create Timer:-
// Write a program to print 1 after 1 sec, 2 after 2 sec till 6. 
// Complete the given code to get the desired output as shown in the expected output.


// function countTimer()
// {
//   for(let i = 1; i <= 6; i++)
//   {
// setTimeout(function(Num){

// console.log(Num);

// },
// i * 1000,i);
// console.log("Hello ninjas!");
// }
// }
// countTimer();


//Code description:-
//1.Intially we use a forloop to iterate from 1 to 6.
//2.Inside the loop we use setTimeout function ,which takes a callBack function and delay in miliseconds as arguments.
//3.The callBack function is defined as an anonymous function that takes one argument Num , which is the loop variable i.
//4.We pass i*1000 as the delay to setTimeout,which means each number will be printed after a delay of i seconds (since 1 second = 1000 miliseconds).
//5.And the last argument to setTimeout is i,which is the value we want to print. it will be passed to the callBack function as the Num argument.
//6.The loop continues to execute,but since the setTimeout function is asynchronous, it will schedule the printing of each number at the appropriate time.



//13.What will be the output of the following code?

let arr = []
arr.push("hello")
arr.hello = 0 //property hello and the value given is 0.
let value = 0
for(let i = 0;i < 5; i++) {
    value = arr[value]
}
console.log();

// let's break down the code step by step in simple terms:

// We start with an empty array called arr.

// We use the push() method to add the string "hello" to the array. 
//So now, the arr contains one element, which is the string "hello".

// We set a property on the array called hello and give it the value of 0. 
// In JavaScript, arrays are also objects, so we can add properties to them like any other object.

// We create a variable called value and initialize it to 0.

// We enter a loop that will run five times. 
// In each iteration of the loop, 
// we update the value of the value variable. 
// The line value = arr[value] might look a bit confusing, 
// but it means that we are using the value of value as an index to access an element in the arr array.

// After the loop, we log the final value of the value variable to the console.

// Now, let's go through each iteration of the loop:

// Iteration 1: value is 0, so arr[0] gives us the element at index 0 of the array, which is "hello". So, value becomes "hello".

// Iteration 2: value is now "hello", so arr["hello"] is accessing the property "hello" on the array. Since we previously set arr.hello to 0, value becomes 0 again.

// Iteration 3: value is 0, so arr[0] is "hello". value becomes "hello" again.

// Iteration 4: value is "hello", so arr["hello"] is 0. value becomes 0 again.

// Iteration 5: value is 0, so arr[0] is "hello". value becomes "hello" again.

// After the loop, the final value of value is "hello". So when we log value to the console, it will print "hello".





//14. pass by ref
// What would be the output of the following code?
function change1(obj) {
  obj.name = "ninjas"
}
function change2(obj) {
  obj = {name: "changed"}

}

var obj = {name:"coding"}


change1(obj)
change2(obj)
console.log(obj.name)  // ninjas

// Solution Description
// We have two functions defined:

// change1(obj): This function takes an object obj as a parameter and changes the value of its name property to "ninjas".
// change2(obj): This function takes an object obj as a parameter, but instead of modifying the existing object, it creates a new object with a name property set to "changed". However, this new object is local to the function and doesn't affect the original obj outside of the function.
// We declare a variable obj and assign it an object with a name property set to "coding".

// We call the change1(obj) function, which modifies the name property of the obj object to "ninjas".

// We then call the change2(obj) function. Inside change2, a new object with the name property set to "changed" is created and assigned to the obj parameter. However, this assignment only affects the local scope of the function and does not change the original obj object outside the function.

// Finally, we log the name property of the obj object using console.log(obj.name). Since change1 was called before change2, the name property of obj was modified by change1, and the output will be "ninjas".


// 15.copying:-
// What would be the output of the following code?
let d = {h: 2, j: 3}
//console.log(d);
 let e = d
//console.log(e);
let f = {...d}
//console.log(f);
   console.log(e === d)   //true.
   console.log(f === d)  //false

   
// let d = {h: 2, j: 3}: We create an object d with properties h and j.

// let e = d: Here, we assign d to e. Since objects are reference types, this assignment doesn't create a new copy of the object. Instead, e now holds a reference to the same object in memory that d points to.

// let f = {...d}: This is called object spread syntax, which creates a shallow copy of the object d and assigns it to f. A shallow copy means that the top-level properties of d are copied to f, but if the properties themselves are objects or arrays, their references are still shared between d and f.

// Now, let's understand the last two lines of the code:

// console.log(e === d): This checks if e and d are referencing the same object in memory. Since e was assigned the value of d (which is the object itself), e and d point to the same object. Hence, the result is true.

// console.log(f === d): This checks if f and d are referencing the same object in memory. Even though f was created using the object spread syntax, it is still a shallow copy of the original object d. As a result, f and d are two separate objects with the same top-level properties but stored in different memory locations. Hence, the result is false.

// To summarize, e and d refer to the same object, while f is a shallow copy of d, so f and d are different objects in memory





//16.Property Exists:-
// Implement a function propertyExists(obj, path) that takes two arguments - an object and a path (string). 
// It returns ‘False’ if the property is null or it doesn’t exist for that object, otherwise it will return the value of the property for that object.
// Note: Properties can have single character only. So, path can be a string with concatenation of many properties.



function propertyExists(obj,path) {
  // Write logic here
let val = obj;
for (const property of path)
{

  val = val[property]
if(!val) return false

}

return val;
}












