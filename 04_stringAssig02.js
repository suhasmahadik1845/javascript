
console.log('');

console.log("************************** 01 **************************");

function stringHandsOn() {
    console.log(" Given String");
    var givenString = "     Hey you are doing good, keep it up       ";
    console.log("Given a String: ",givenString);

    console.log('');
    console.log("************************** 02 **************************");

    console.log(" Calculate length of string");
    var stringLength = givenString.length;
    console.log("Total number of char in given string:",stringLength);

    console.log("");
    console.log("************************** 03 **************************");

    console.log(" Removing extra spaces from string");
    var trimString = givenString.trim();
    console.log("Length of string after removing extra spaces:",trimString.length);

    console.log('');
    console.log("************************** 04 **************************");

    console.log(" Calculate removed extra spaces from string");
    var removedSpaces = (stringLength)-(trimString.length);
    console.log("Count of removed spaces from given string:", removedSpaces);

    console.log('');
    console.log("************************** 05 **************************");

    console.log(" Fisrt and Last Char after trim");
    var firstChar = trimString.charAt(0);
    var lastChar = trimString.charAt(trimString.length-1);
    console.log("Frist and last char of string aftre removing extra spaces:", firstChar, lastChar);
   
}
stringHandsOn();
