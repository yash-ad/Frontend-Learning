console.log("Start");


setTimeout(()=>{
console.log("callback");
},5000);


console.log("End");

//The first program will be logged at start will be printed in the console and then code runs to the third
//-Line where is an asyncchronous function called setTimeout(), it measn that becuase of js is single threaded and synchronous language it will interpret the code line by loine , and it doest wait for any one, it will move fastly to the  next line.
//Now here the log "callback" will be registered to the web APIs and it sets the timer to the 5000 ms whihc is 5 seconds
//and when the tinmer expires it will pushes to the callback where we could say a Task queue , and it will when the callStack will gets empty then it pushes to the callStack via task queue.

//js comes to the third line it will be printed as an End into the consle.however now the callsatck is an mepty state so here the event loops comes into the pisctutre, event loop is like a gate keeper it constantly monitirs and checcks wther the callstack is empty or not and the tasks are availbe in the task queue and when the callstack is mepty it will quick;y pushses to teh callstack.


//Millions of line of code

//Lets use while loop synchronously to use delay and run the code for 10,000 mili seconds which is 10 seconds.

let startDate = new Date().getTime();
// console.log(startDate);

let endDate = startDate;

while(endDate < startDate + 10000){
endDate = new Date().getTime();
};

console.log("While loop expires");