
console.log(`*************Array Assignment**************`);
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`-------------------------------------------`);
console.log(`Given Array: ${arrayNumbers}`);
//1. Total number of elements available in array
let totalElements = arrayNumbers.length;
console.log(`1. Total no of elements in array: ${totalElements}`);
console.log(`-------------------------------------------`);

//2. First and last element in given array
console.log(`2. First and Last element in array`);
console.log(`   Fisrt element: ${arrayNumbers[0]}`);
console.log(`   Last element: ${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`-------------------------------------------`);

//3. Third last element using length property
console.log(`3. Third last element: ${arrayNumbers[arrayNumbers.length-3]}`);
console.log(`-------------------------------------------`);

//4. All even numbers available in array
console.log(`4. Even no in array:`);
for (const index in arrayNumbers) {
    if (arrayNumbers[index]%2 == 0) {
        console.log(`   ${arrayNumbers[index]}`);
    }
}
console.log(`-------------------------------------------`);

//5. All odd numbers available in array
console.log(`5. Odd no in array:`);
for (const index in arrayNumbers) {
        if (arrayNumbers[index]%2 !==0) {
            console.log(`   ${arrayNumbers[index]}`);
        }
}
console.log(`-------------------------------------------`);

//6. All even position elements and its sum
console.log(`6. Even position elements and its sum:`);
let evenPositionSum = 0;
for (const index in arrayNumbers) {
      if (index%2 == 0) {
        console.log(`   ${arrayNumbers[index]}`);
        evenPositionSum = evenPositionSum + arrayNumbers[index];
      }  
}
console.log(`Even position element sum: ${evenPositionSum}`);
console.log(`-------------------------------------------`);

//7. All odd position elements and its sum
console.log(`7. Even position elements and its sum:`);
let oddPositionElement = 0;
for (const index in arrayNumbers) {
        if (index%2 !==0) {
            console.log(`   ${arrayNumbers[index]}`);
            oddPositionElement = oddPositionElement + arrayNumbers[index];
        }
}
console.log(`Odd position element sun: ${oddPositionElement}`);
console.log(`-------------------------------------------`);

//8. Sum of all elements of array
let addElements = 0;
for (const index in arrayNumbers) {
        addElements = addElements + arrayNumbers[index];
}
console.log(`8. Sum of all elements: ${addElements}`);
console.log(`-------------------------------------------`);

//9. numbers which are multiple of 5
console.log(`9. Elements which are multiple of 5:`);
for (const index in arrayNumbers) {
        if (arrayNumbers[index]%5 == 0) {
            console.log(`   ${arrayNumbers[index]}`);
        }
}
console.log(`-------------------------------------------`);

//10. is 115 available in given array
console.log(`10. is 115 available in given array: ${arrayNumbers.includes(115)}`);
console.log(`-------------------------------------------`);

//11. is 23 available in given array
console.log(`11. is 23 available in given array: ${arrayNumbers.includes(23)}`);
console.log(`-------------------------------------------`);

//12. insert no 55, 66 before index 3
let arrSplice = arrayNumbers.splice(3, 0, 55, 66);
console.log(`12. Adding 55 & 66 befor index 3:`);
console.log(`   [ ${arrayNumbers} ]`);
// console.log(arrayNumbers);
console.log(`-------------------------------------------`);

//13. Delete 3 elements starting form index 4
let spliceArr = arrayNumbers.splice(4, 3);
console.log(`13. Deleted 3 elements from index 4:`);
console.log(`   [ ${arrayNumbers} ]`);
console.log(`-------------------------------------------`);