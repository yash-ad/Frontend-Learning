//Using loops with arrays in javascript :-

//1.forEach Loop:- 

const nums = [ 1, 2 , 3 , 4 , 5];

nums.forEach((Element) => {

console.log(Element + Element); // with adding + operator the result is 2,4,6,8,10;
console.log(Element * Element); // with multiplying * operator the result is 1,4,9,16,25;
})



//2.Array.from :-

const myName =  "Yash" ;

let  myArr = Array.from(myName);

console.log(myArr); // ['Y', 'a', 's', 'h']



//3.for..Of :-

const fruits = ["Mango","Banana","Apple","Kiwi"];

for(let i of fruits){
    console.log(i); //Mango Banana Apple Kiwi
}


//4.for...In :-

let numBers = [ 101 , 102 , 103 , 104 , 105 ];

for(let i in numBers)
{
    console.log(i); //If I will print only i in the log the output is from index 0 1 2 3 4 which are keys of an array

    console.log(numBers[i]); // now it will print an elements 101 , 102 , 103 , 104 , 105 ;
}






//Below examples:- 

let cars = ["Tata","Toyota","Suzuki","Honda"];
//For..in:-
for( let i in cars)
{
console.log(cars[i]);

}

//forEach :-
cars.forEach((Element) =>
{

console.log(Element);

}
)

//for...Of :-

for(let i of cars)
{

    console.log(i);
}

//Array.From

let arr = Array.from(cars);
console.log(arr);



//forEach loop for practicing:-

const myNums = [ 31 , 03 , 1998 , 4 ];

myNums.forEach((Element) => {
console.log(Element);
 
})

//forOf :-

for( let i of myNums)
{
    console.log(i);
}


//forIn :-

for( let i in myNums)
{
    console.log(myNums[i]);
}