//How are objects stored:-


//1.
// let obj =
// {

// num : 10

// };

// console.log(obj); // {num:10};



// An object  can be stored in a variable:-

let objTwo = obj;


// objTwo["num"] = 100;

// console.log(objTwo);


// objTwo["Word"] = "Y";

// console.log(objTwo);

// console.log(obj); 

//An object is reference to the variable and an object is stored in a variable.
//Its all about memory storage in javascript and its referring as well.



//Compare between two objects:-
// console.log(obj === objTwo); //Thats True.


///.Iterating Over Objects with different examples:-

let bikeDetails =
{
name:"BMW",

price:"2lakh",

year:2023
};

console.log(bikeDetails); //{name:"BMW",price:"2lakh",year:2023};




//Using forIn loop:-
//1.

for(let prop in bikeDetails)
{
console.log(prop,bikeDetails[prop]);

}; 

//name : BMW
//price : 2lakh
//year : 2023.



//2.
//let keys = Object.keys(bikeDetails);

//name : BMW
//price : 2lakh
//year : 2023.


//3.
 let keys = Object.getOwnPropertyNames(bikeDetails);
 
 //name : BMW
//price : 2lakh
//year : 2023.
//All are above examples will get same results.











 









