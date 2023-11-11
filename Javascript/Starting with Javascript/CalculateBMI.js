
///1:-

//The Body Mass Index (BMI) is the ratio of the weight of a person(in kilograms) to the square of the height(in meters)
//Formula To Calculate(BMI)
//BMI = weight / (height x height);

///Write a JavaScript program that calculates the BMI, and reports the BMI category as per the following table:

// BMI Category	    BMI
// Underweight	    below 18.5
// Healthy	        18.6 to 24.9
// Overweight	    25 to 25.9
// Obese	        30 or greater

// Weight 58kg and height 1.60m
//Result




//First and foremost.
//Lets make a function of calculateBmi:-
function calculateBmi(weight,height)
{
const bmi = weight / (height * height);
return bmi;
}

//Second.
//Write a JavaScript program that calculates the BMI:-

function getBMICategory(bmi)
{
    if(bmi < 18.5)
    {
return "Underweight";

    }

    else if(bmi >= 18.5 && bmi <= 24.9)
{

    return "Healthy";
}

else if(bmi >= 25 && bmi <= 25.9){

    return "Overweight";
}

else{

    return "Obese";
}

}

const weightInKg  =  58;
const heightInM   =  1.60;
const bmiResult   =  calculateBmi(weightInKg,heightInM);
const bmiCategory =  getBMICategory(bmiResult);

//Here is the result:-
console.log(`Your weight is : ${weightInKg} Kg`);

console.log(`Your height is : ${heightInM} M`);

console.log(`Your Bmi result is : ${bmiResult}`);

console.log(`You are : ${bmiCategory}`);

console.log(`Thanks for visting!`);
































































