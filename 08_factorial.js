


//5! = 5*4*3*2*1
let factorial = 1;
for (let index = 5; index >= 1; index--){// index = 5
    factorial = factorial * index;
}
console.log(`Factorial of 5: ${factorial}`);

//0! = 1
function factorialNum(num) {
    if(num ==0){
        console.log(`Factorial of 0: 1`);
        return;
    }

    let factorial =1;
    for (let index = num; index >=1; index--) {
        factorial = factorial * index;
    }
    console.log(`factorial of ${num}: ${factorial}`);
}

factorialNum(5);
factorialNum(6);
factorialNum(10);
factorialNum(0);