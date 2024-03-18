//Lets create a higher orderfunction in javascript:-

// function x(){
//     console.log("Namaste Higher order function");
// };


// function y(x){
//     x(); //here `x` is behaving like a callback function.
// }
// y(x) //Here y is a higherorder function.



///.What is a higher order function in js:-
// Higherorder function is a  function in javascript that operates on other functions either by taking them as an arguments or by returning them are called higheroder functions.
// Higherorder functions are a result of function being first class citizens of javascript.


//Lets take an example of Higher order function in js:-

const radius = [1,2,3,4,5];
// console.log(radius);

//Lets calculate the area of radius:-
//The formula is Circle: Area = πr^2 :-
// IN javscript the formula of area of radius is Math.PI*radius*radius;
const area = (radius)=>{
    return Math.PI * radius * radius;
}

//Lets calculate the Diameter of radius:-
//The formula is Circle: Diameter = 2 * radius :-
// IN javscript the formula of area of radius is Math.PI*radius*radius;
const diameter = (radius)=>{
return  2 * radius;
}

//Lets calculate the Circumference of radius:-
// The formula of Circle: Circumference of radius is 2 * Math.PI > radius;
const circumference = (radius)=>{
return 2 * Math.PI * radius
};





// Now by using the 'Radius` Array we want to calculate using the ` calculateOperation` function  Area,Diameter and Circumference:-
//Lets calculate:-
const calculateOperation = (array,logic)=>{
const output = [];
for(let i = 0; i <= array.length; i++ ){
    output.push(logic(array[i]));
}
return output;
}
// console.log(calculateOperation(radius,area)); //Calculating for the area of a radius.
// console.log(calculateOperation(radius,diameter)); //calculating for the diameter.
// console.log(calculateOperation(radius,circumference));
//Similarly we can write the code using map:- simplu reducing lines of code and result in a one single line:-
console.log(radius.map(area)); //Indeed , the answer is similar nothing change into it.





//Example Two:-

const radiusTwo = [5,6,7,8];


const areaTwo = (logic)=>{
return Math.PI*logic*logic
};


const diameterTwo = (logic)=>{
    return 2 * logic;
};

const circumferenceTwo = (logic)=>{
    return 2 * Math.PI * logic
}

//lets get an above output simply using Map() to iterate over an array and returns a new array ;-
console.log(radiusTwo.map(areaTwo));
console.log(radiusTwo.map(diameterTwo));
console.log(radiusTwo.map(circumferenceTwo));



