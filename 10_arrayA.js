
console.log(`***********************************************Array Assignment************************************************`);
console.log(`---------------------------------------------------------------------------------------------------------------`);

const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`   Array: [ ${arrayFruits} ]`);
console.log('');

let fristElement = arrayFruits [0];
console.log(`1. First element in given array: ${fristElement}`);

let lastElement = arrayFruits [arrayFruits.length-1];
console.log(`2. Last element in given array: ${lastElement}`);

arrayFruits.unshift("Papaya");
console.log(`3. Added "Papaya" before "Banana": [ ${arrayFruits} ]`);

arrayFruits.push("Pineapple");
console.log(`4. Insert "Pineapple" at the last position: [ ${arrayFruits} ]`);

arrayFruits.splice(5, 0, "Dragon Fruit")
console.log(`5. Insert element befor water melon: [ ${arrayFruits} ]`);

arrayFruits [2] = "Kiwi";
console.log(`6. Replaced orange with kiwi: [ ${arrayFruits} ]`);

var arrSlice = arrayFruits.slice(1, 4);
console.log(`7. Elements from 1 to 4: [ ${arrSlice} ]`);

var arrSplice = arrayFruits.splice(arrayFruits.length-3);
console.log(`8. Last 3 elements of array: [ ${arrSplice} ]`);
console.log(`---------------------------------------------------------------------------------------------------------------`);