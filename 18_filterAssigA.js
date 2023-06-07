console.log(`************** Filter method assignment************`);
console.log(`Given Array:`);
const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(arrayNumbers);
console.log(`---------------------------------------------------`);

console.log(`1. Numbers which are greater than 50`);
const newArray = arrayNumbers.filter((number) => {
    return number>50;
})
console.log(newArray);
console.log(`---------------------------------------------------`);

console.log(`2. Even numbers`);
const evenNum = arrayNumbers.filter((number) => {
    return number%2==0;
})
console.log(evenNum);
console.log(`---------------------------------------------------`);

console.log(`3. Odd numbers`);
const oddNum = arrayNumbers.filter((number) => {
    return number%2!=0;
})
console.log(oddNum);
console.log(`---------------------------------------------------`);

console.log(`4. Numbers which are multiple of 5`);
const multOfFive = arrayNumbers.filter((number) => {
    return number%5==0;
})
console.log(multOfFive);
console.log(`---------------------------------------------------`);

console.log(`5. Numbers which are between 20 & 50`);
const numBetween = arrayNumbers.filter((number) => {
    return number>20 && number <50;
})
console.log(numBetween);
console.log(`---------------------------------------------------`);