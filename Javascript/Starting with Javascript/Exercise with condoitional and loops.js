/* Exercise 1: Working with conditionals and loops
In this exercise, you will create the code for a for loop, using the counter variable named i starting from 1.

To make the counter increment by 1 on each loop, you will use i++.

The exit condition for the for loop should match the output given below. 

Inside the loop, write an if-else statement, which will check the following conditions:

First, it will check if the value of i is 1. If it is, your code will console log the string "Gold medal".

Next, I will check if the value of i is 2. If it is, your code will console log the string "Silver medal".

Then, your code will check if the value of i is 3. If it is, it will console log the string "Bronze medal".

For all the remaining values of i, your code will console log just the value of i.
*/

for( let i = 1 ; i <= 10 ; i++)
{
    if(i == 1){
        console.log("Gold medal");
    }
    else if(i == 2)
    {

        console.log("Silver medal");
    }
    else if(i == 3)
    {

        console.log("Bronze medal");
    }
else{

    console.log(i);
}

}

//Another example:-

for(let i = 0 ; i <= 10 ; i++)
{
if(i == 0){

    console.log("On your marks");
}

else if( i == 1)
{

    console.log("Get Set");
}
else if( i == 2)
{

    console.log("Go");
}
else{

    console.log("Bhaag milkha bhaag " , i);
}

}


//Using switch statement:-
//1.
for(let i = 1; i <= 10; i++){
switch(i)
{
case 1 :console.log("The first prize is :  Gold-Medal");
break;

case 2 : console.log("The second prize is : Silver-Medal");
break;

case 3 : console.log(" THe third prize is : Bronze-Medal");
break;

default:console.log("The remaining candidates are " , i);

}
}



//2.Bhaag milkha bhaag Example:-

for(let i = 1 ; i <= 5 ; i++){
    switch(i){
        case 1 : console.log("Bhaag");
        break;
        
        case 2 : console.log("Milkha");
        break;

        case 3 : console.log("Bhaag");
        break;

        case 4 : console.log("Bass Tu Bhaag");
        break;

        case 5 : console.log("Milkha");
        

        default:console.log("Ho jungle, ho jungle Aaj shehron se hai tera dangal");
      




    }




}