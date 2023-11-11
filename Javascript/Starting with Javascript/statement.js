///Conditional (control flow) If-Else
//1.
if(-1)
{

    console.log("true")
}
else{
    console.log("false")

}
//In JavaScript, any nonzero number is considered truthy. Therefore, -1 is truthy, and the code inside the if block will be executed. The output will be: True

//2.
 const temperature = 51;

if(temperature < 50){

    console.log(`The temperature is less than 50 ${temperature}`)
}
else{

    console.log(`The temperature is greater than 50`);
}

//3.
const carPrice = 6;

if(carPrice === 5){

    console.log(`Toyota car is available at rupees ${carPrice}`);
}
else{

    console.log(`Other cars are available at rupees ${carPrice}`);
}

//4 Block scope example :-
const gameScore = 200;

if(gameScore < 100){
    let power = "Fly";
console.log(`The power is ${power}`);
console.log(`The score is ${gameScore}`);

}
else{
    console.log(`The score is ${gameScore}`);

}





/// Nesting Conditional (control flow) If-Else-else-if-else statements:-
const balance = 1000;

if(balance < 500){

console.log(`less than 500`);
}
else if(balance < 850){

    console.log(`less than 850`);  
}
else if ( balance < 950){
    console.log(`less than 950`);  

}
else if(balance < 1050){
    console.log(`less than 1050`);   //This line will be executed


}
else{
    console.log(`less than 1080`);  


}







//Examples
//-------------------------------------------------------------------
//If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":

let time = 8;

if(time < 10 ){

    console.log(`Good Morning Javascript`);
}
else if(time < 20){

    console.log(`Good Day Javascript`);  
}
else{
    console.log(`Good Evening Javascript`);  


}

//
/*Complete the following steps to create: Are You Old Enough? 
Declare a variable age using the let keyword and set it to the number 11.

Add an if statement that checks if the value of the age variable is greater than or equal to the number 65. Inside the if block, console.log the sentence: "You get your income from your pension".

Add an "else if",  where you'll check if the value of the age is less than 65 and greater than or equal to 18. Inside this "else if" block, type "console.log" and then "Each month you get a salary".

Add another "else if", and this time check if the value of the age is under 18. Inside the "else if" block, "type console.log" and then "You get an allowance".

Add an "else" statement to capture any other value. Inside the block, type "console.log" and then "The value of the age variable is not numerical".

Try adjusting the age and executing the program to see how it will affect the output.*///
 
let age = 66;

 if(age >= 65){

    console.log("You get your income from your pension");
}
else if(age < 65 && age >= 18){

    console.log("Each month you get a salary");
}
else if(age < 18){
    console.log("You get an allowance");


}
else{

    console.log("The value of the age variable is not numerical");
}