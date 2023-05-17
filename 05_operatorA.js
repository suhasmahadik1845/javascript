console.log("#--------------- Operator Assignment ---------------#");

console.log('');
console.log("********************* 01 *************************");

console.log("Length of string and its square");
function squareOfWordLength(str){
    var strLength = str.length;
    console.log(`Length of "${str}" is: ${strLength}`);
    var sqLength = strLength * strLength;
    return strLength * strLength;
    // console.log(`Square of string lenth ${strLength} is: ${sqLength}`);
}
/*squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");*/

var sqLength1 = squareOfWordLength ("javaScript");
console.log(`Square of string length is ${sqLength1}`);

console.log('');
var sqLength2 = squareOfWordLength("Google Chrome");
console.log(`Square of string length is ${sqLength2}`);

console.log('');
var sqLength3 = squareOfWordLength("Developer Smart");
console.log(`Square of string length is ${sqLength3}`);

console.log('');
console.log("********************* 02 *************************");

console.log("Division and Multiplication operator");

function operators(){
    var str = "I am Angular Developer";

    console.log(`Given String: ${str}`);
    
    var strLength = str.length;
    var strSplit = str.split(" ");
    var result1 = strLength/strSplit.length;
    var result2 = strLength*strSplit.length;
    console.log(`Total no of words in string: ${strSplit.length}`);

    console.log('');

    console.log(`String length / Total no of words: ${result1}`);
    console.log(`String length * Total no of words: ${result2}`);
    

}
operators();