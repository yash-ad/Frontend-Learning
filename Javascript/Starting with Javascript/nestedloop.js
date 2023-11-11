//Javscriptnestedloops

//Note:-You are running multiple nested loops within your javascript code could these nested loops cause performance issues with your code.Correct,the more nested loops there arethe slower your code will run.

//Examples with Nestedloop
//1.
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}
/*0, 0
 0, 1
 0, 2
 0, 3
 0, 4
 0, 5
 0, 6
 0, 7
 0, 8
 0, 9
 1, 0
 1, 1
 1, 2
 1, 3
 1, 4
 1, 5
 1, 6
 1, 7
 1, 8
 1, 9  */
 