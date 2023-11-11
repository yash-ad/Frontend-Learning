//Array is a collection of data.
//[square bracket] is called literal.
//It has become a common practice to declare arrays using const and always declare with const
//In the square bracket we called elements likewise it could be string , number or boolean etc.


//Array in javascript can be of mixed data types.
const myArray = ["Y","A","S","H","R","A","J",true,false,31,1998,function myName(){console.log("Yashraj Dandnaik");}]; 
console.log(myArray);


//You can access elements of an array using indices.0,1,2 etc.
console.log(myArray[6]); 

//Array properties:- You can find the length of an element using length property.
console.log(myArray.length); 

/*Arrays are Not Constants
The keyword const is a little misleading.

It does NOT define a constant array. It defines a constant reference to an array.

Because of this, we can still change the elements of a constant array.*/
//Example is below:-
const arr = myArray;

arr[10] = "God";
console.log(myArray);
console.log(arr);





////Ex.2

const fruits = ["Apple","Mango","Banana","Strawberry","Pineapple","Banana"];
console.log(fruits);

////Common Array methods with examples:-


///1.Indexof() :- This method represents as searches an element of an array and returns its position.
//In this above example here you can see in the fruits section there are two bananas element on which the postions are 2 & 5 however javascript will identify only first element to access it. 
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Pineapple"));

//In this below example here you can see in the fruits section cherry is not present as an element
//And if element is not present the output will get -1.
console.log(fruits.indexOf("Cherry")); //-1



///2.Includes() :- This method represents as checks if an array contains a specified element,with the help of boolean value it returns either True or False.
console.log(fruits.includes("Banana"));//True,yes it is available and its represents as an element. 
console.log(fruits.includes("Chikoo"));//False,No its not since absence of an element.


///3.Push() :- This method represents adds a new element to the end of an array and returns the new length of an array.
console.log(fruits.push("Kiwi"));
console.log(fruits.push("Papaya"));
console.log(fruits);



///4.Unshift():- This method represents adds a new element to the beginning of an array and returns the new length of an array.
console.log(fruits.unshift("Mango"));
console.log(fruits.unshift("DragonFruit"));
console.log(fruits);



///5.Pop() :- This method shows as removes the last element of an array and returns the removed element.
console.log(fruits.pop());
console.log(fruits.pop());




///5.Shift() :- This method shows as removes the first element of an array and returns the removed element or length.
console.log(fruits.shift());
console.log(fruits.shift());



///6.Sorts() :- This method shows as sort the elements alphabetically in strings and in ascending order.
console.log(fruits.sort());



///7.Slice() :- This method shows as select the part of an array and returns a new array,The slice() method returns selected elements in an array, as a new array.The slice() method selects from a given start, up to a (not inclusive) given end.The slice() method does not change the original array.
console.log(fruits);
const subArray_1 = fruits.slice(2,5) //Inclusive starting element and exclusive end element.
console.log(subArray_1);//Banana,Mango,Pineapple



///8.Join() :- This method represents as returns an array as string.

const arry_1 = fruits.join();
console.log(fruits);
console.log(arry_1);
console.log(typeof arry_1); //String



///9.Splice() :-The splice() method adds and/or removes array elements,This method overwrites the original array.
console.log(fruits);
const subArray_2 = fruits.splice(1,2);
console.log(subArray_2); 


//Examples for an array:-
//1:-

const studentMarks = [70 , 50 , 55 , 85 , 65 , 90 , 95];
console.log(studentMarks);
console.log(studentMarks[0]); //70
console.log(studentMarks[1]); //50
console.log(studentMarks[2]); //55
console.log(studentMarks[3]); //85
console.log(studentMarks[4]); //65
console.log(studentMarks[5]); //90
console.log(studentMarks[6]); //95
console.log(studentMarks[7]); //Undefined the index 7 does not exist.
studentMarks[7] = 100; //Added value
console.log(studentMarks[7]); //Here the output has been changed undefined to index 7 is 100;

console.log("The length of studentmarks is ",studentMarks.length); //.length property.
studentMarks[0] = 80; //Changing the value of an array.
console.log(studentMarks); //
console.log(typeof studentMarks); //Object.

//Lets make a quiz forLoop with the help of an array:-
//Incrementation
for(let i = 0; i < studentMarks.length; i++)
{

    console.log(studentMarks[i]); //Total elements
    console.log(i); //Total length
}



//Decrementation
for(let i = 8; i >= 0; i--)
{

    console.log(i);
}





//Arryas are mutable.
//Arrays can be changed.

//Strings are immutable
//Strings cannnot be changed.

//An array is not a primtive type its an object and it returns as an object and the type of operator is Object.

//Arrays can hold many values under in a single name.



//Most important quiz for interview find the differenece between Slice & Splice :-
//1.
const numbers = [0 , 1 , 2 , 3 , 4 ,5 ]; //Original Array
console.log(numbers);


const array_One = numbers.slice(1,3); //Using slice
console.log(array_One); // 1,2.


const array_Two = numbers.splice(1,3); //Using splice
console.log("Guess whats the output is :-",numbers); //0,4,5
console.log(array_Two); // 1,2,3.Deleted values 

//2.Here you will get a difference between slice and splice:-
const vegetables = ["Spinach","Cabbage","Tomato","Potatao","Onion","Carrot","Capsicum"]
console.log(vegetables); //Original array.

const veggies_1 = vegetables.slice(1,3); //Using slice:- This method shows as select the part of an array and returns a new array.
console.log(veggies_1);//On the index 1 & 2 is Cabbage and tomato , in this example inclusive is 1 and exclusive is 2 which before an ending element.


const veggies_2 = vegetables.splice(1,3) //Using splice:- This method can be used to add / or remove elements to an array.
console.log(vegetables); // So here is the difference the remaining part element of an array.
console.log(veggies_2);// On the index 1 , 2 & 3 is Cabbage , tomato and potato


const greetings = ["Hi","Hello","Namaste","Namaskar","Ramram"];
console.log(greetings);

greetings[5] = "Hola";
console.log(greetings);
console.log(greetings.length); //To check the length of an element
console.log(greetings.indexOf("Namaste")); //Returns the index of value or an element
console.log(greetings.includes("Teamo")); //Boolean value True or False.
console.log(greetings.shift()); //Removes the first element of an array.
console.log(greetings.push("Hey")); //Add new element to the end of an array.
console.log(greetings.unshift("Selamat")); //Add new element to the start of an array.
console.log(greetings);
console.log(greetings.pop()); // That means opposite of push , Removes the last element of an array and returns it.
console.log(greetings.sort()); //Sort the elements alphabetically with an in ascending order.
console.log(greetings.slice(2,5));//Select the part of an array and returns a new array with inclusive and exclusive.
console.log(greetings.splice(1,3));//This method add / or removes element from the array
console.log(greetings.join());
console.log(greetings);
console.log(greetings[0]);
console.log(greetings[1]);
console.log(greetings[2]);


  
//Most important quiz for interview what is the length of an array?
//2.
greetings[40] = "Moshi-Moshi"
console.log(greetings); // So here the total length is 41.


//3.Guess the output

const arr_ = ["A","B","C","D","E"];

delete arr_[1];
console.log(arr_.length); //5
console.log(arr_); //The ouput is empty or undefined of postion 1 in the console,here the length will be of an original array is same.



//Js interview question for an array:-

const cars = ["Tata","Mahindra","Hyundai","Suzuki"];
cars.length = 4;
 let carResult = cars[3];
 console.log(`Here is the result of cars is ${carResult}`);// using Template literal for better use and it works sos very well.
 // Here the answer is in array length is always starts from 1 and array index start from 0.










































