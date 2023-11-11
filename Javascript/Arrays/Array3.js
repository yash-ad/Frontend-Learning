//Array methods:-

//Example Movie theatre line :-

//1.
const theatreLine = ["Yash","Siddhi","Aai","Papa" ,"MyFamily"];
console.log(theatreLine);//["Yash","Siddhi","Aai","Papa" ,"MyFamily"];

//Push(): Method adds a new element at  the end of the array.
theatreLine.push("GrandMother");
theatreLine.push("GrandFather");
theatreLine.push("Uncle");
theatreLine.push("Aunt");
theatreLine.push("Satwik");
theatreLine.push("Didu");

console.log(theatreLine);//["Yash","Siddhi","Aai","Papa" ,"MyFamily","GrandMother","GrandFather","Uncle","Aunt","Satwik","Didu"];




//pop(): //Removes the element at the end of an array.
theatreLine.pop();
console.log(theatreLine);//["Yash","Siddhi","Aai","Papa" ,"MyFamily","GrandMother","GrandFather","Uncle","Aunt","Satwik"]
theatreLine.pop();
theatreLine.pop();
theatreLine.pop();
console.log(theatreLine);//["Yash","Siddhi","Aai","Papa" ,"MyFamily","GrandMother","GrandFather"]



//Shift(): Removes the first element of an array.
theatreLine.shift();
console.log(theatreLine);//["Siddhi","Aai","Papa" ,"MyFamily","GrandMother","GrandFather"]



//unShift(): Adds a new element at thebeginning of an array:-
theatreLine.unshift("Satwik");
console.log(theatreLine);//["Satwik","Siddhi","Aai","Papa" ,"MyFamily","GrandMother","GrandFather"].


//Splice(): startindex and deletecount:
theatreLine.splice(1,1); //startindex 1 and no elemnts to remove 1.
console.log(theatreLine);//["Satwik","Aai","Papa" ,"MyFamily","GrandMother","GrandFather"]

theatreLine.splice(3,1,"Didu");
console.log(theatreLine)//["Satwik","Aai","Papa" ,"Didu","GrandMother","GrandFather"]




const theatreLineTwo = ["Kaka","Kaku"];

    console.log(theatreLine.concat(theatreLineTwo));//["Satwik","Aai","Papa" ,"Didu","GrandMother","GrandFather","Kaka","Kaku"]



    console.log(theatreLine.reverse());


    console.log(theatreLine.indexOf("Didu")); //2


    console.log(theatreLine.indexOf("Kumar")); //-1 that means its not exist.
























