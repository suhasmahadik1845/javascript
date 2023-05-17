
console.log(`**************************** 01 ****************************`);
console.log("Square of numbers");
var square = function (num) {
  var sq = num * num;
  console.log(`square of ${num} is : ${sq} `);
};
square(5);
square(6);
square(25);
square(100);

console.log(` `);
console.log(`**************************** 02 ****************************`);

console.log("Type of function");
console.log(`type of above function is = ${typeof square} `);

console.log(` `);
console.log(`**************************** 03 ****************************`);

var rectangle = function (length, width) {
  var rect = length * width;
  console.log("Area of rectangle");
  console.log(`The area of rectangle of length:499 & width:917 is = ${rect} `);
};
rectangle(499, 917);

console.log(` `);
console.log(`**************************** 04 ****************************`);

console.log("Swap values");
var swapValues = function (valueOne, valueTwo) {
  console.log(`Before Swap:->  ${valueOne} ${valueTwo}`);
  var temp = valueOne;
  valueOne = valueTwo;
  valueTwo = temp;
  console.log(`After Swap:->  ${valueOne} ${valueTwo}`);
};
swapValues("Virat", "Anushka");
console.log(``);
swapValues(1000, 2000);

console.log(` `);
console.log(`**************************** 05 ****************************`);

var stringOperation = function () {
  var givenString = "JS the most popular language of internet";
  console.log(`The Given String is:-${givenString}`);

  var lengthOfString = givenString.length;

  console.log(`A. Total character available in the string= ${lengthOfString}`);
  console.log(`B. character at index 6th = ${givenString.charAt(6)}`);
  console.log(`C. character at index 11th = ${givenString.charAt(11)}`);
  console.log(`D. last character  = ${givenString.charAt(givenString.length - 1)}`);
  console.log(`E. First  character  = ${givenString.charAt(0)}`);
 
  var square = givenString.split(" ");
  console.log(`F. Total number words = ${square.length}`);
  
  var no = square.length;
  console.log(`F. Square  of total number of words = ${no * no}`);
  
};
stringOperation();