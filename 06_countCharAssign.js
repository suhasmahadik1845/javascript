console.log(`***************To count total char 'a' & 'A'*********************`);

 function countCharA(str) {
    var count = 0;
    for (let index = 0; index < str.length; index++) {
        var char = str.charAt(index);
        if (char == 'a' || char == "A") {
        count++;
        }
    }
    return count;
 }
console.log(`Given String: "I AM learning JavaScript, The langiage of Internet"`);
 var string1 = countCharA("I AM learning JavaScript, The langiage of Internet");
 console.log(`Total count of 'a' & 'A' in given string: ${string1}`);

console.log("");

 console.log(`Given String: "My favourite movie is LAggAn"`);
 var string2 = countCharA("My favourite movie is LAggAn")
 console.log(`Total count of 'a' & 'A' in given string: ${string2}`);
 
 console.log(`-----------------------------------------------------------------`);
 