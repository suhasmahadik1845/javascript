console.log(`---------------------Map Method Assign---------------------`);
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Given array: ${arrayNumbers}`);
console.log(`-----------------------------------------------------------`);

console.log(`1. Add 10 into each element of array`);
const newArray = [];
arrayNumbers.map((number) => {
    let add = number + 10;
    newArray.push(add);
})
console.log(newArray);
console.log(`-----------------------------------------------------------`);

console.log(`2. Square each array element`);
let newArray2 = [];
arrayNumbers.map((number) => {
    let square = number * number;
    newArray2.push(square);
})
console.log(newArray2);
console.log(`-----------------------------------------------------------`);

console.log(`3. Add the indexx value into its corresponding element`);
let newArray3 = [];
arrayNumbers.map((number, index) => {
    newArray3.push(number+index)
})
console.log(newArray3);
console.log(`-----------------------------------------------------------`);