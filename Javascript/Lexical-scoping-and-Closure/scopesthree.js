//Lexical scope or lexical closure or lexical environment-
//Interview prep:-

///1.What is meant by lexical scope/lexical enivornment/lexical closure?
//   First of all what is meant by lexical:-
//Lexical means that the hierarchy sequence,A lexical environment is a data structure , mechanism of javascript that stores the variables and functions that are created or defined  in the current scope
//or its outer scope is known as lexical environment or lexical scope or lexical closure
//and the closures are an ability of functions that remeber the variables and functions and thier refernce even after executed its called closure.

//And every executing function,code and script as a wholein javascript has a related object known as the lexical environment

//1.
let sum = function(a){
console.log(`Hello closure/lexical: ${a}`);
let c = 3;
return function(b){
return a+b+c;
}
}
let result = sum(200);

console.log(result(5)); //208



//Lets create a function as an object and certainly function as an object in Js:-
//2.

let add = function(a,b,c){

    return{
        getSumOne:function(){
return a + b;
        },
        getSumTwo:function(){
return a + b + c;
        }
    }
};
let store = add(3,4,5);

// console.log(store.getSumOne()); //7.
// console.log(store.getSumTwo()); //12.


let storeTwo = add(6,7,8);
console.log(storeTwo.getSumOne()); //13
console.log(storeTwo.getSumTwo()); //21



















