
console.log("**************** Ternary Operator and Function *****************");
console.log('');

console.log("TCS interview eligibilty -> ");
function tcsInterviewEligibility(gradScore, hscScore, sscScore, candidateName) {
    var result = (gradScore>=70 || hscScore>=80 || sscScore>90)?`   Congrates ${candidateName} you are eligible for TCS interview`:
    `   ${candidateName} unfortunately you are not eligible for interview`;
    console.log(result);
}

tcsInterviewEligibility(80,86,90, "Suhas");
tcsInterviewEligibility(70,65,55, "Vivek");
tcsInterviewEligibility(60,79,88, "Nikhil");
