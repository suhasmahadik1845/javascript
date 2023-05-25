
var arrayOfRollNumber = [67, 56, 78, 90, 60, 40];
console.log(`Type of array: ${typeof arrayOfRollNumber}`);

let lengthOfArray = arrayOfRollNumber.length;
console.log(`length of array: ${lengthOfArray}`);

//Accessing array element
const zeroIndexValue = arrayOfRollNumber[0];
//zeroIndexValue = 45; //can not change the const value
console.log(`Zero index value: ${zeroIndexValue}`);

//Accessing array element 90
const thirdIndexValue = arrayOfRollNumber[3];
console.log(`Third index value: ${thirdIndexValue}`);

//Accessing last element
let arrayLength = arrayOfRollNumber.length;
const lastElement = arrayOfRollNumber[arrayLength-1];
console.log(`Last element: ${lastElement}`);

//Adding element in the last position
arrayOfRollNumber.push(75);
arrayOfRollNumber.push(32);
arrayOfRollNumber.push(42, 64);
console.log(arrayOfRollNumber);

//Adding element in first position
arrayOfRollNumber.unshift(50);
console.log(arrayOfRollNumber);

//Removing last element
arrayOfRollNumber.pop();
console.log(arrayOfRollNumber);

//Removing first element
arrayOfRollNumber.shift();
console.log(arrayOfRollNumber);
console.log('');


var arrayOfRollNumber = [67, 56, 78, 90, 60, 90, 40];

//Update array element
console.log(`Updating the array value`);
arrayOfRollNumber[0] = 888;
console.log(arrayOfRollNumber);

//update the last element 40 with 77
arrayOfRollNumber[arrayOfRollNumber.length-1] = 77;
console.log(arrayOfRollNumber);
console.log('');

console.log('Slice');
var arrayOfRollNumber = [67, 56, 78, 90, 60, 90, 40];
const sliceOfArray = arrayOfRollNumber.slice(3);
console.log(sliceOfArray);

const sliceArr = arrayOfRollNumber.slice(2, 5);
console.log(sliceArr);
console.log('');

console.log(`"Splice"`);
var arrayOfRollNumber = [67, 56, 78, 90, 60, 90, 40];
const splicedArr = arrayOfRollNumber.splice(3);
console.log(splicedArr);

var arrayOfRollNumber = [67, 56, 78, 90, 60, 90, 40];
const arrSpliced = arrayOfRollNumber.splice(2,5);
console.log(arrSpliced);
console.log(arrayOfRollNumber);

//Splice for insertion
var arrayOfRollNumber = [67, 56, 78, 90, 60, 90, 40];
arrayOfRollNumber.splice(2, 0, 666, 444);
console.log(arrayOfRollNumber);

//Splice for insertion by replacing elements
var arrayOfRollNumber = [67, 56, 78, 90, 60, 90, 40];
arrayOfRollNumber.splice(1, 1, 99, 88, 66, 77);
console.log(arrayOfRollNumber);

//Splice for insertion by replacing elements
var arrayOfRollNumber = [67, 56, 78, 90, 60, 90, 40];
arrayOfRollNumber.splice(2, 2, 111, 22, 333);
console.log(arrayOfRollNumber );


var array = ["Anil", "Siya", "Sunil", "Jenny"];
array.splice(2, 0, "Ram");
console.log(array);

array.splice(1, 1);//removing siya from index 1 from array array
console.log(array);

array.splice(1, 2, "Bill", "Stew")// adding two element by removing two element
console.log(array);

array.splice(1, 0, "Bill", "Stew")// adding two element by without removing element
console.log(array);

console.log(array.slice(array.length-2));//last two element


var arrayName = ["Anil", "Siya", "Ram", "Sunil", "Jenny"];
// let firstElement = arrayName[0];
// console.log(firstElement);
for (let index = 0; index < arrayName.length; index++) {
    let element = arrayName[index];
    // console.log(element);
    if (element.startsWith("S")) {
        console.log(element);
    }
}

console.log("");
console.log("====Traversing Array====");

var arrayName = ["Anil", "Siya", "Ram", "Sunil", "Jenny"];
for (let index = 0; index < arrayName.length; index++) {
    const element = arrayName[index];
    console.log(element);
}

console.log("---------------------For in loop-------------------");
for (const index in arrayName) {
    console.log(arrayName[index]);
}

console.log("---------------------For of loop-------------------");
for (const element of arrayName) {
    console.log(element);
}

console.log(`//WAP to get even index element`);
var arrayName = ["Anil", "Siya", "Ram", "Sunil", "Jenny"];
for (const index in arrayName) {
        if (index%2==0) {
          console.log(`${arrayName[index]}`);  
        }
}

console.log(`-----------Join---------------`);
let names = arrayName.join(", ");
console.log(names);

const arrayBoys = ["Anil", "Ram", "Sunil"];
let arrayGirl = ["Siya", "Jenny"];

let combineArray = arrayBoys + arrayGirl;
console.log(combineArray);

let concatArray = arrayBoys.concat(arrayGirl);
console.log(concatArray);

console.log(`---------Resize an array----------`);
var arrayName = ["Anil", "Siya", "Ram", "Sunil", "Jenny"];
arrayName.length = 3;
console.log(arrayName);