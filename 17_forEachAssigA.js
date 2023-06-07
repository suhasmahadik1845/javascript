const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`Given Array: [${arrayNumbers}]`);
console.log(`-----------------------------------------------`);

console.log(`1. Log the array element with it's index`);
arrayNumbers.forEach((element, index) => {
    console.log(`   Index: ${index}, Element: ${element}`);
})
console.log(`-----------------------------------------------`);

console.log(`2. Find the positive numbers`);
arrayNumbers.forEach((number) => {
    if (number > 0) {
        console.log(`   ${number}`);
    }
})
console.log(`-----------------------------------------------`);

console.log(`3. Find negative numbers and add into new array`);
let negativeNum = [];
arrayNumbers.forEach((number) => {
    if (number <0) {
        negativeNum.push(number); //Adding numbers to the array using push
    }
})
console.log(`   ${negativeNum}`);
console.log(`-----------------------------------------------`);

console.log(`4. Find even numbers`);
arrayNumbers.forEach((number) => {
    if (number%2 == 0) {
        console.log(`   ${number}`);
    }
})
console.log(`-----------------------------------------------`);

console.log(`5. Sum of all element`);
let sum = 0;
arrayNumbers.forEach((number) => {
    sum = sum + number;
})
console.log(`   ${sum}`);
console.log(`-----------------------------------------------`);

console.log(`6. Even indexed array value`);
arrayNumbers.forEach((number, index) => {
    if (index%2 == 0) {
        console.log(`   ${number}`);
    }
})
console.log(`-----------------------------------------------`);