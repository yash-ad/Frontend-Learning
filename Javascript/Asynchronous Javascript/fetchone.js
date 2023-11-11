//Fetch():-
 //The Fetch is an API modern interface, 
 //it allows to make HTTP requests to servers from web browsers.
 //The fetch() method is available in the global scope,
 // that commands the web browsers to send a request to a URL.
 //And the fetch() method returns a promise that resolves to a response request.
//The fetch() requires only one parameter which is the URL of the resource.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 //JSON():-
  //JSON stands for Javascript object notation, 
  //Json is a format of storing and transporting data,
  //It is often used to when data is sent  from a server to a webpage.
  // It is a lighweight data interchange format.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  //To get the actual data, we need to call methods of the response object text() or json().


///.Lets take an example:-

//  async function getAllUsers()
//  {
// const response = await fetch('https://randomuser.me/api/')
// const data = response.json();
// console.log(data);
//  }

//  getAllUsers();  
     //This will not work

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 //Lets wrap into a try catch:-

//   async function getAllUsers()
//  {
// try {
//     const response = await fetch('https://randomuser.me/api/');
// const data = await response.json();
// console.log(data);
// } catch (error) {
//     console.log(`Error`,error);
// } }

// getAllUsers();
   //OUTPUT:-
// {
//     results: [
//       {
//         gender: 'male',
//         name: [Object],
//         location: [Object],
//         email: 'randy.fields@example.com',
//         login: [Object],
//         dob: [Object],
//         registered: [Object],
//         phone: '017683 33641',
//         cell: '07423 694491',
//         id: [Object],
//         picture: [Object],
//         nat: 'GB'
//       }
//     ],
//     info: { seed: '95df1d89ea1fbf17', results: 1, page: 1, version: '1.4' }
//   }
  
    //Lets make this above  with `then catch` :-


    fetch(`https://randomuser.me/api/`) //Http request to a server from web browser using Url
    //Here is fetch is directly returning promise that resolves to a response object.
    .then((response)=>{
return response.json()
    })
    //Chainable (Thenable):-
    //for handling .then
    .then((data)=>{
console.log(data);
    })
    .catch((error)=>{
console.log(error);
    })

    //In this above example the `fetch()` is already so we dont need to call(Invoked). 
    //Output will get automatically.

    //Output:-
    // {
    //     results: [
    //       {
    //         gender: 'male',
    //         name: [Object],
    //         location: [Object],
    //         email: 'lazar.karadzic@example.com',
    //         login: [Object],
    //         dob: [Object],
    //         registered: [Object],
    //         phone: '018-7427-626',
    //         cell: '068-7929-625',
    //         id: [Object],
    //         picture: [Object],
    //         nat: 'RS'
    //       }
    //     ],
    //     info: { seed: 'cdeab076c757bfd9', results: 1, page: 1, version: '1.4' }
    //   }
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetch(`https://randomuser.me/api/`)
.then((getResponse)=>
{
 return getResponse.json()
})
.then((data)=>{
console.log(data);
})
.catch((error)=>{
console.log(error);
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///.Now you know fetch() in js:-
 //1.XMLHttprequest -> Internet exlporer 1998.
 //2.March 3 2022 -> The fetch() API established to nodejs.
 //3.The fetch() is a global method,starts the process of fetching a resource from the network.
 //4.A fetch() promise does not reject on Http errors,instead a `then()` handler must check and give response only.


 //1] Fetch() -> Microtask queue.
 //2] Microtask is specially for fetch().
 //3] Microtask queue is a fast and high priority queue.
 //4] Fetch() is a promise object.


 //.fetch(`URL`,{Object});
  //fetch() task is divided into two parts.
  //1.Web browsers/Native node -> Web browser based API or node based API-> Network request-> Right or wrong.
  //2.Variables/Data to reserve space in a memory -> onfulfilled(Resolve),onRejection(Reject)
