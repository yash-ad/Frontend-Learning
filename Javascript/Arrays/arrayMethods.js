//Array Methods

//1.toString():- Converts an array to a string of comma seperated values;


const nums = [1,2,3,4,5,6];

let resultOne = nums.toString();
console.log(resultOne); //1,2,3,4,5,6 //typeOf string;



//2.Join():- Joins all the array elements using a seperator;


let resultTwo = nums.join("-");
console.log(resultTwo); //1-2-3-4-5-6 //typeOf string;


//3.pop():- Removes the last element of an array and returns the removed element.

let resultThree = nums.pop();

console.log(resultThree);//6 returns the removed element
console.log(nums);//[1, 2, 3, 4, 5]

//4.Push():- Adds a new element at the end of an array and it modifies the original array with an argument , returns the new array

let resultFour = nums.push(9); 
//Added new element to the end of an array.
console.log(resultFour,nums);// 6 , [1, 2, 3, 4, 5, 9]
 //the length and elements of an array


//5.Shift():- Removes the first element of an array and returns it.

let resultFive = nums.shift();
console.log(resultFive,nums); // 1 , [2, 3, 4, 5, 9]


//6.Unshift():- Adds element to the beginning of an array and returns new length

let resultSix = nums.unshift(100); //Added element 100
console.log(resultSix,nums);     // 6 (Returns new length) , [100, 2, 3, 4, 5, 9] (Added element to the beginning of an array)


//7.Delete():- Delete is an operator its not a method,Array elements can be deleted using the delete operator.

const bikeNames = ["Yamaha","Honda","Suzuki","TVS","Revolt"];

delete bikeNames[1]; //(5) ['Yamaha', empty, 'Suzuki', 'TVS', 'Revolt']
console.log(bikeNames);  //Because of its not a method so the length will remain same instead of absence value(Empty)


//8.Concat():- Used to join arrays to the given array and returns a new array however does not change an existing array.

const alphabets = ["A","B","C","D"];
const moreAlphabets = ["E","F","G","H"];

let mergeThem = alphabets.concat(moreAlphabets);
console.log(mergeThem); //(8) ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
console.log(alphabets); //Original array does not change     //(4) ['A', 'B', 'C', 'D']
console.log(moreAlphabets);//Original array does not change  //(4) ['E', 'F', 'G', 'H']



//9.Sort() :- This method is used to sort an array alphabetically,however we can sort the elements in an ascending order or descending order with the help of Compare function

const numbers = [100,300,600,351,998];
let sortIt = numbers.sort();
console.log(numbers); //(5) [100, 300, 351, 600, 998]


//Lets use compare function to get the result as an ascending order or a descending order;


//Using compare function
let  compareFn = (a, b)=>{
    
    return a - b ;
}

let Numbers =[100,300,600,351,998,1001,152,134,155,109];

Numbers.sort(compareFn);
console.log(Numbers); // with an ascending order.
                            // [100, 109, 134, 152, 155, 300, 351, 600, 998, 1001]




//10.Reverse():- The reverse () method reverses the order of the elements in an array. and the reverse () method overwrites the original array.


const reverseLetters = ["E","S","R","E","V","E","R"];

let ouTput = reverseLetters.reverse();

console.log(ouTput); //(7) ['R', 'E', 'V', 'E', 'R', 'S', 'E']



//11.Splice :- This method is used to add new items to an array however in splice it modifies the array, we can use an arguments to add the elements , no of elements to remove and elements to be added.

//Four arguments of splice are 1.Position to add , 2.NO of elements to remove , 3 and 4th is elements to be added.

const numBers = [ 1, 2 , 3 , 4 , 5 , 6 , 7 , 8 ,9 , 10 ];

let deletedValues = numBers.splice(3,4,1001,1002,1003,1004);

console.log(numBers); // (9) [1, 2, 3, 1001, 1002, 1003, 1004, 8, 9, 10]
 // 1.Added position to  index 3. 
 // 2.No of elements to remove. 
 // 3 & 4 th Elements to be added.

//Lets findout the deleted values of splice:-

console.log(deletedValues); // (4) [4, 5, 6, 7]


//12.Slice() :- This method slices out a piece from an array and it doesnot modify the original array hence it creates a new array.

let fruits = ["Guava","Apple","Banana","Kiwi","Dragonfruit"];

let sliceIt = fruits.slice(2,5); //In an arguments the values are inclusive and exclusive starting  and  before ending  of the index.
console.log(sliceIt);//['Banana', 'Kiwi', 'Dragonfruit'] starting from 2 index and here the 5th index is not available so 4th index value before ending exclusive is mentioned.























