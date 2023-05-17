function stringHandsOn() {

    var givenString = "    Hey you are doing good, keep it up   ";

    console.log("****************************** 01 *************************************");
    console.log("Given String");
    console.log(`Given String = ${givenString}`);
  
    console.log('');
    console.log("****************************** 02 *************************************");

    var lengthOfString = givenString.length;
    console.log("Lenth of string");
    console.log(`Length of  String is= ${lengthOfString}`);

    console.log('');
    console.log("****************************** 03 *************************************");
  
    var trimmedgivenString = givenString.trim();
    console.log("Removing extra spaces");
    console.log(`After Trim givenString is:- ${trimmedgivenString}`);
    console.log(`Lenght Trim givenString is:- ${trimmedgivenString.length}`);

    console.log('');
    console.log("****************************** 04 *************************************");
  
    console.log("Total number of extra spaces");
    console.log(`Total number extra spaces :- ${givenString.length - trimmedgivenString.length}`);

    console.log('');
    console.log("****************************** 05 *************************************");
  
    console.log("After trim first and last char of givem string");
    trimmedgivenString.charAt(0);
    console.log(`first  character  :- ${trimmedgivenString.charAt(0)}`);
    const last = trimmedgivenString.charAt(trimmedgivenString.length - 1);
    console.log(`Last  character  :- ${last}`);
     /////////////////////////////////////////////////////////////////////////////
    var trimmedgivenString = givenString.trim();
    var resultSplit = trimmedgivenString.split(" ");

    console.log('');
    console.log("****************************** 06 *************************************");

    console.log("Total number of words in given string");
    console.log(`the count of total words available in the string :- ${resultSplit.length}`);

    console.log('');
    console.log("****************************** 07 *************************************");
  
    var indexOfgood = trimmedgivenString.indexOf("good");
    console.log("Index of good");
    console.log(`The index of word "good" :- ${indexOfgood}`);

    console.log('');
    console.log("****************************** 08 *************************************");
    
    var result = trimmedgivenString.endsWith("up");
    console.log("Is string ends with up");
    console.log(`The istring ends with word “up” :-   ${result}`);

    console.log('');
    console.log("****************************** 09 *************************************");
    
    var result1 = trimmedgivenString.startsWith("Hey");
    console.log("Is string start with Hey");
    console.log(`The istring Starts with word “Hey” :-   ${result1}`);
    
   }
  stringHandsOn();