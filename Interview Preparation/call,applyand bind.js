//Interview question:-

///.1)call():-
// call() is a predefined method in javascript.
// This method invokes the function by specifying the owner object.
// call accepts arguments.
// call() method allows an object to use the method (function) of another object.


//Object one example:-
let obj = {
    name:"Yash Dandnaik",
    age : 25,
    profession:"Frontend developer",
    // getDetails:function(){
    //     console.log(this)
    //     console.log(this.name); 
    //     console.log(this.age);
    //     console.log(this.profession);
    // }
};
// obj.getDetails();

//What if when function is an independent state:-
let getDetails = function(city,state,country){
    console.log(this)
    console.log(this.name); 
    console.log(this.age);
    console.log(this.profession);
    console.log(city);
    console.log(state);
    console.log(country);
}
// getDetails.call(obj);

//Object two example:-
let objTwo = {
    name:"Siddhi Dandnaik",
    age : 23,
    profession:"Human Resource",   
};
// obj.getDetails.call(objTwo);
// getDetails.call(objTwo)

// When the call() method takes an arguments seperately:-
// getDetails.call(obj,"Pune","Maharastra");
// getDetails.call(objTwo,"Karvenagar","Maharastra");





///.Apply():-
//Apply method is quite similar to the call method however the minor difference is that call method takes arguments seperately and apply method taoes arguments as an array.
getDetails.apply(obj,["Pune","Maharashtra","India"]);
getDetails.apply(objTwo,["Pune","Maharashtra","India"]);