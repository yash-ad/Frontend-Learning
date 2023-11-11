// The Fibonacci Exercise

// Create a 'fibonacciSeries' function that takes a number N as a parameter and checks if it is a member of the Fibonacci series or not.
// Return true if the number is a member of the Fibonacci series, else return false.
// Fibonacci Series is defined by the recurrence
//   F(n) = F(n-1) + F(n-2)
// where F(0) = 0 and F(1) = 1
// Sample Input :
// finbonacciSeries(5)
// Sample Output :

// true

// Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:
function fibonacciSeries(N)  //Where n is the number of items in the sequence.
{
    if (N < 0){

        return false;
    }

    if (N === 0 ||N === 1){

        return true;
    }

    let a = 0;

    let b = 1;

    while (b <= N){
        if (b === N){
            return true;
        }

        const nextFibonacci = a + b;
        
        a = b;

        b = nextFibonacci;
    }

return false;

}


// Test the function with sample input
const result = fibonacciSeries(5);
console.log(result); // Output: true
