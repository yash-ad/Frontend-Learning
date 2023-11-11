//Example 1 :-

for ( let i = 0 ; i <= 3 ; i++)
{

    console.log("This is line",i);



}

//Example 2 :-

for ( let i = 0 ; i <= 10 ; i++)
{


    console.log("Yashraj-Dandnaik", i );
}


//Example 3 :-

for ( let index = 1 ; index < 10 ; index++)
{

    console.log(index);
}


//Example 4 :-
//Table of 2 in mathematics
let number = 2;
for ( let inde_x = 1; inde_x <= 20 ; inde_x++ )
{

    console.log(` ${number} * ${inde_x} = ${number * inde_x}`);
}

//Example 5 :-
//Table of 5 in mathematics
let table5 = 5;
for(let indeX = 1 ; indeX <= 10 ; indeX++)
{

    console.log(`${table5} * ${indeX} = ${table5 * indeX}`);
}
console.log("Im outside of loop table 5 is completed");

//Intialization

//Condition :- Either True or False , whether if its true Will work inside the loop OR false Exit from thr loop

//Iteration :- Either increment or decrement ++ , -- ;



//Decrement example:-

for(let i = 10 ; i >= 0 ; i--)
{

    console.log(i);
}

/*Task 1 
Write a "for" loop that will perform exactly the same repetitive code as this:*/

for(let i = 1;i<=5;i++)
{
console.log(i);

}
console.log("Counting Completed!");

/* Task 2 
Write a "for" loop that will perform exactly the same repetitive code as this: */

for(let i = 5 ; i >= 1 ; i--)
{

    console.log(i);
}
console.log("Countdown finished");


//Fun exercise

let cubes = "ABCDEF";

for(let i = 0 ; i < cubes.length ; i++){

    console.log(cubes[i]);
}
/* The code itself should be mostly familiar, except for the cubes.length and the cubes[i] syntax.

Without getting into too many details, here are both code snippets explained as simple as possible.

The cubes.length returns a number. Since cubes is a string of characters the cubes.length gives me the length of the string saved in the variable.*/

/*for(let i = 0; i < 5 ; i++){
console.log(cubes[i]})
}*/


/*The second piece of code that's new here is the cubes[i] snippet.

This simply targets each individual letter in the loop, based on the current value of the i variable.

In other words, cubes[i], when i is equal to 0, is: A.

Then, cubes[i], when i is equal to 1, is: B.

Then, cubes [i],when i is equal to 2, is : C.
And so on.

This goes on for as many loops my for loop runs - and this is determined by the cubes.length value.

It's also very versatile, since, if I, for example, decided to change the length of the cubes string, I would not have to update the condition of i < cubes.length, because it gets automatically updated when I change the length of the cubes string.*/
