//Map, Filter & Reduce in JavaScript | JavaScript :-
  

//001.Map() method:-
//Map () Transfroms every element in an array individually to creates a new array
//1.Addition all the values of an array:-
let solve_Addition = [ 24 , 48 , 56 ];

let arr_One = solve_Addition.map((value,index) => {

 return value + 1
}
)
console.log(arr_One); // [25, 49, 57]


//2.Multiply all the values of an array:-

let solve_Multiply = [ 2 , 4 , 6 , 8 ];

let arr_Two = solve_Multiply.map((value)=>{


    return value * 10
})

console.log(arr_Two); // [20, 40, 60, 80]


//3.subtraction of all the values

let solve_Subtraction = [ 1 , 2 , 3 , 4 , 5];

let arr_Three = solve_Subtraction.map((value)=>{
console.log(value);
 return value - 1

})
console.log(arr_Three); //  [0, 1, 2, 3, 4]


//Map() example:-

const arry = [1,2,3,4,5];

const result = arry.map((value)=>{
return value * 2

})

console.log(result); //(5) [2, 4, 6, 8, 10]
//Map() Array function =  it transforms individually all element of an array to create a new array and it doesnot change an original array. 





//002.Filter() Method :-
//Filter removes an elements that are not required which is not necessary while creating a new array.and only includes which are needed.

//4. Lets findout the numbers that are lesser than 10 :-
let numbers = [ 99 , 70 , 40 , 20 , 30  , 5 , 4 , 50];

let createUsingFilter = numbers.filter((value)=>{

console.log(value);
return value < 10;
 

})

console.log(createUsingFilter ); //  [5, 4] There are only two numbers found that are lesser than 10;





//003.Reduce() Method :- 

//1.Addition by using reduce method :- 
let Arr = [ 1 , 2 , 3 , 4 , 5 , 5 , 4 , 3 , 2 , 1 ]; //Ofcourse we can repeat the values in an array.
//Here we can also add a function hence function can be used as a variable in javascript;

const reduce_Func = (value_1,value_2) => {

    return value_1 + value_2

}

let arr_Five = Arr.reduce (reduce_Func)

console.log(arr_Five); //And it returns a single value which is 30 addition of an elements.


//2.Multiply by using reduce method :-

let newArr2 = [ 10 , 20 , 30 , 40 , 50 , 60 ];

let arr_Six = newArr2.reduce((value_1,value_2)=>{
return value_1 * value_2

})

console.log(arr_Six); // And it returns a single value which is 720000000 Multiplication of an elements. 


//3. Subtraction by using reduce method :-

let newArr3 = [ 101 , 405 , 303 , 505 , 339 , 447 ];

const reduce_Function = (value_1,value_2) =>
{

    return value_1 - value_2
}

let reduce_Array = newArr3.reduce(reduce_Function);

console.log(reduce_Array); //  And it returns a single value which is -1898 Subtraction of an elements. 


