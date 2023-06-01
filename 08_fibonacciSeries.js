
console.log("");
let n1 = 0;
let n2 = 1;
let count = 15;
let fibSeries = "";
fibSeries = fibSeries + n1 +", "+n2;
for (let index = 2; index < count; index++) {
    let next = n1 + n2;
    fibSeries = fibSeries + ", " + next;
    n1 = n2;
    n2 = next;
}

console.log(`The Fibonacci series: `);
console.log(`[ ${fibSeries} ]`);
console.log("");


