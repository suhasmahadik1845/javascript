console.log("********** 01.Two function with no Arguments and no Return type **********");

function fullName(){
    console.log("My Function");
    console.log("My Name");
}
fullName();


console.log("************ 02. Personal Details ************");

function personalDetails(firstName,lastName,collegeName){
    console.log("My Personal Details is");
    console.log("My Name is: ",firstName, lastName);
    console.log("My College Name is: ",collegeName);
}
personalDetails("Suhas","Mahadik","YCM");


console.log("************** 03.Swap Values ***************");

function swapValuesDude(valueOne, valueTwo){ 
    console.log("Before Swap:> ", valueOne, valueTwo);
    var temp = valueOne;
    valueOne = valueTwo; 
    valueTwo = temp;
    console.log("After Swap:> ", valueOne, valueTwo);
}
swapValuesDude("Virat","Anushka");
swapValuesDude(1000,2000);


console.log("************* 04. Add THREE Values ************");

function addThreeValues(a, b, c){
    var result = a + b + c;
     console.log("Addition is :> ",result);
}
addThreeValues(10.23, 600, 40);
addThreeValues(" Hello"," Good"," Morning");