//Truthy Or Falsy value in JS:-
//1.
 const userEmail = "Yd@gmail.com"

 if(userEmail){

    console.log("Got your email");
 }

 else{

    console.log("Didn't recieved your email");

 }

 //falsy values:-
 //false,0,"Empty-string",-0,null,undefined,NaN,Bigint 0n.

 //Truthy values:-
//"0","false"(Because it includes in a string),"withusing spacein a string",{},[]

 //false == 0 the value is True because false its considered as falsy values which is 0 so 0 == 0 is True.

 //false == "" The value is true

 //0 == "" The value is true.



 //Terniary operator

 // condition ? true : false

 const coffeePrice = 90;

 coffeePrice >= 80 ? console.log("More than 80Rs") : console.log("Less than 80Rs");