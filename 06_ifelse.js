function voteEligibility (age) {
    if (age<=0 || age>120 || age==undefined || age==null) {
        console.log(`you are entered Invalid data: ${age}`);
    } else {
        if (age<18) {
            console.log(`age: ${age}-> Not eligible for vote`);
        } else {
            console.log(`age: ${age}-> You are eligible for vote`);
        }
    }
}
console.log('************* ifelse Statement Assig ************');
console.log('-------------------------------------------');
voteEligibility(45);
console.log('-------------------------------------------');
voteEligibility(17);
console.log('-------------------------------------------');
voteEligibility(8);
console.log('-------------------------------------------');
voteEligibility(20);
console.log('-------------------------------------------');
voteEligibility(-10);
console.log('-------------------------------------------');
voteEligibility(200);
console.log('-------------------------------------------');
voteEligibility(0);
console.log('-------------------------------------------');
voteEligibility(undefined);
console.log('-------------------------------------------');
voteEligibility(null);
console.log('____________________________________________');