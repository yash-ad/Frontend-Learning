//Functions with objects and array in javascript


///1.addToCart example using function and spread operator:-

function addToCart(val1,val2,...setValue) //Rest and spread operator.
{

return setValue;

}

const getValue = addToCart(200,400,500,600,700,800,900);
console.log(getValue); //(7) [200, 400, 500, 600, 700, 800, 900]

//Js interview checkout:- 

//function addToCart(val1,val2,...setValue) //Rest and spread operator.
//{

    //return setValue;
    
    //}
    
    //const getValue = addToCart(200,400,500,600,700,800,900);
    //console.log(getValue); //(5) [500, 600, 700, 800, 900] //Remaining values
    


///2.Lets create an object using function:-

const user = 
{
 userName : "Yashraj",
 userId : 31984
}


function getUser(anyObject){




console.log(`The user details are : ${anyObject.userName} & ${anyObject.userId}`); //{userName: 'Yashraj', userId: 31984}
}

getUser(user);//The user details are : Yashraj & 31984




///3.Lets create an array using function:-

const productPrice = [199,299,399,499,599];

function healthCareProduct(getStuff)
{

 return getStuff[1];



}

console.log(healthCareProduct(productPrice)); //299
























