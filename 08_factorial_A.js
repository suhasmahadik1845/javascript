


console.log(`******************Factorial of Numbers*********************`);
function factorialOfNum(num) {
    
    if (num == undefined || typeof num !== "number" || isNaN(num) || num == null) {
        console.log(`You are entered invalid data, Please enter valid data`);
        return;
    }

    let factorial = 1;
    for (let index = num; index >=1; index--){
        factorial = factorial * index;
    }
    console.log(`Factorial of ${num} is: ${factorial}`);
}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);
console.log(`-----------------------------------------------------------`);