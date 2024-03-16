//Lets make an array of objects:-

const datas = [
    {
     name:"Yash",
     profession:"Frontend-Developer"
    },
    {
        name:"Rohit",
        profession:"Backend-Developer"
    }
];

//console.log(data);
// [
//     { name: 'Yash', profession: 'Frontend-Developer' },
//     { name: 'Rohit', profession: 'Backend-Developer' }
//   ]
  
function getData(){
setTimeout(()=>{
    let output = "";
datas.forEach((data,index)=>{
output += `<li>${data.name}</li>`
});
document.body.innerHTML = output;
},1000)
}

// function createNewdata(newData){
// setTimeout(()=>{
// datas.push(newData)
// },2000)
// }

// createNewdata({name:"vivek",profession:"UI-UX-Designer"});



///.Use this above problem statement with the callBack function:-

// function createNewdata(newData,callback){
//     setTimeout(()=>{
//     datas.push(newData)
//     callback();
//     },2000)
//     }
    
//     createNewdata({name:"vivek",profession:"UI-UX-Designer"},getData);


///.Same above statement with using promises:-

function createNewdata(newData){
new Promise((resolve,reject)=>{
    setTimeout(()=>{
            datas.push(newData)
            let error = false;
if(!error){
    resolve()
}else{
    reject("There is something missing!")
}},2000)
})
}
// createNewdata({name:"vivek",profession:"UI-UX-Designer"}
// .then(getData)
// .catch(err => console.log(err))
// )

///.Async and await. 
async function start(){
   await createNewdata({name:"vivek",profession:"UI-UX-Designer"}) 
   getData()
}

start();