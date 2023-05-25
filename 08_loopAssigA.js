
console.log('***************For Loop Assignment***************');
console.log(' ');

console.log('************************ 01 *************************************');
console.log(' ');

console.log('Find total no of vowels');
console.log('');
var str = "I am very good IT Developer";
let count = 0;
for (let index = 0; index < str.length; index++) {
  var char = str.charAt(index).toLowerCase(); // Convert character to lowercase
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(char)) {
    // console.log(char);
    count++;
  }
}
console.log(`Given String: '${str}'`);
console.log(`Total no of vowels available in given string: ${count}`);

console.log('************************ 02 *************************************');
console.log(' ');

console.log('Sum of cube no from 1-5') ;
var sum = 0;
function sumOfCube() {
    for (let index = 1; index <= 5 ; index++) {
        var cube = index*index*index; //Calculating cube
         sum += cube ; //Adding cube 
        // console.log(sum);
        
    }
    console.log(`Sum of cube of numbers from 1 to 5: ${sum}`);
}
sumOfCube();

console.log('************************ 03 *************************************');
console.log(' ');

console.log('Find odd position char from given string');
console.log('');
function oddPositionedChar(string) {
    var oddChar = '';        // Variable to store the odd-positioned characters
    for (let index = 0; index < string.length; index++) {
        var char = string.charAt(index)
        if (index%2 !=0 && char !=" " ) {
            // console.log(char);
            oddChar += char;  //concatenating the char
        }
    }
    console.log(`Odd positioned char = [${oddChar}]`);
}
console.log(`"Given String: Hard works always pays back alway"`);
oddPositionedChar('Hard works always pays back alway');
console.log('');
console.log(`"Given String: Soon i will be Angular IT Champ"`);
oddPositionedChar('Soon i will be Angular IT Champ');
console.log('_______________________________________________');