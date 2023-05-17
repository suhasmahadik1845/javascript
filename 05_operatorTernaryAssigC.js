
console.log(` `);
console.log(`*********************** 01 ******************************`);
console.log(` `);

console.log("Male Marriage Eligibilty");
console.log(` `);
function maleMarrigeEligibility (gender, age, boyName){
    var result = (gender=="Male" && age>=21)? `Hey ${boyName} you are eligible for Marriage`:`${boyName} you are not eligible for Marriage`;
    return result;
}
var boy1 = maleMarrigeEligibility("Male",25,"Billgates");
console.log(boy1);
var boy2 = maleMarrigeEligibility("Male",17,"Stew Jobs");
console.log(boy2);

console.log(` `);
console.log(`*********************** 02 ******************************`);
console.log(` `);

console.log("Female Marriage Eligibilty");
console.log(` `);
function femaleMarriageEligibility (gender,age,girlName){
    var result = (gender=="Female" && age>=18)?`Hey ${girlName} you are eligible for Marriage`:`${girlName} you are not eligible for Marriage`;
    return result;
}
var girl1 = femaleMarriageEligibility ("Female",16,"Jenifer");
console.log(girl1);
var girl2 = femaleMarriageEligibility ("Female",27,"Malinda Gates");
console.log(girl2);
