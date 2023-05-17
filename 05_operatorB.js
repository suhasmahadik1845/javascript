
console.log(`*********************** 01 ******************************`);
console.log(` `);

console.log(`Find the greatest number`);
greaterNumber = function (num1, num2) {
    var result = num1>=num2? `${num1}`:`${num2}`;
    console.log(`Greater number between (${num1},${num2}) is: ${result}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log(` `);
console.log(`*********************** 02 ******************************`);
console.log(` `);

console.log(`Check Even or Odd number`);
var isEvenOrOddNum = function (num){
   var result = num%2 ==0? `${num} is Even number`:`${num} is Odd number`;
   return result;
}
var result = isEvenOrOddNum (29);
console.log(result);
var result = isEvenOrOddNum (44);
console.log(result);
var result = isEvenOrOddNum (0);
console.log(result);
var result = isEvenOrOddNum (101);
console.log(result);

console.log(` `);
console.log(`*********************** 03 ******************************`);
console.log(` `);

console.log(`Check word length is Even or Odd`);
var wordLength = function (word){
    var result = word.length%2 == 0? `"${word}" has even word length`: `"${word}" has odd word length`;
    return result;
}
var word1 = wordLength("JavaScript");
console.log(word1);
var word2 = wordLength("Developer");
console.log(word2);
var word3 = wordLength("Google");
console.log(word3);
