// //Arrays and Objects :-

// // Array:-
// let arr = [1,2,3,4,5];

// console.log(arr); // [1,2,3,4,5];



// console.log(arr["0"]); //1
// console.log(arr["1"]); //2
// console.log(arr["2"]); //3
// console.log(arr["3"]); //4
// console.log(arr["4"]); //5


// //Object:-

// let obj = 
// //Property and value
// {
//  "0" : 1,
//  "1" : 2,
//  "2" : 3,
//  "3" : 4,
//  "4" : 5

// };

// console.log(obj);

// console.log(obj.length); //It will give an undefined.


// console.log(arr.length); //5.

// arr[6] = 6;
// console.log(arr);
// console.log(arr.length);//7.





// //Iterating over array using forIn :-


// console.log(arr); // [1,2,3,4,5,< 1 empty item > , 6];

// console.log(obj); //  {"0" : 1, "1" : 2, "2" : 3,"3" : 4,"4" : 5};


// //Can we add property in an object like we add in an Array,
// //Yes we can.


// obj.prop1 = "demo";

// console.log(obj); //{"0" : 1, "1" : 2, "2" : 3,"3" : 4,"4" : 5, prop1 : "demo"};

// //Because Array is an object.
// arr.prop1 = "demo";
// console.log(arr);


// //Lets findout the array length has been changed or not.

// console.log(arr.length);//7.
// //No its not has been changed , the array has still 7 length.
// //Because we have added property however property is an object so object doesnt count to the length.


// //Using forIn loop:

// for(let i in arr)
// {

//     console.log(i);// 0 1 2 3 4 5 6 prop1
// }








