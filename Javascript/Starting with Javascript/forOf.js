//forOf:-
//The for...of loop statement creates a loop iterating over iterable objects,
//including built in string,array,array-like objects(eg Arguments or nodelist),
//TypedArray,Map,Set and user defined iterables.


let arrayNums = [1,2,3,4,5,6,7,8,9];


// for(let i = 0; i <=arrayNums.length; i++)
// {


// console.log(arrayNums[i]);

// };


for(let i of arrayNums){

    console.log(i);
}