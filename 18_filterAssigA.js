console.log(`************** Filter method assignment************`);
console.log(`Given Array:`);
const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(arrayNumbers);
console.log(`------------------------- 01. --------------------------`);

console.log(`Numbers which are greater than 50`);
const newArray = arrayNumbers.filter((number) => {
    return number>50;
})
console.log(newArray);
console.log(`------------------------ 02. ---------------------------`);

console.log(`Even numbers`);
const evenNum = arrayNumbers.filter((number) => {
    return number%2==0;
})
console.log(evenNum);
console.log(`------------------------ 03. ---------------------------`);

console.log(`Odd numbers`);
const oddNum = arrayNumbers.filter((number) => {
    return number%2!=0;
})
console.log(oddNum);
console.log(`------------------------ 04. ---------------------------`);

console.log(`Numbers which are multiple of 5`);
const multOfFive = arrayNumbers.filter((number) => {
    return number%5==0;
})
console.log(multOfFive);
console.log(`----------------------- 05. ----------------------------`);

console.log(`Numbers which are between 20 & 50`);
const numBetween = arrayNumbers.filter((number) => {
    return number>20 && number <50;
})
console.log(numBetween);
console.log(`---------------------------------------------------`);