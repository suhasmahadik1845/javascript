console.log(`**************Object Cloning & Traversing Assign*******************`);
console.log(`-------------------------------------------------------------------`);
console.log(`1. Create object bankSbi`);
let bankSbi = {
    bankName: "SBI Bank",
    location: "Lower Parel",
    accountNo: 545545226523 ,
    ifsc: "SBI28015",
}
console.table(bankSbi);
console.log(`-------------------------------------------------------------------`);

console.log(`2. Create object bankLocation`);
let bankLocation = {
    street: "CST Road",
    city: "Mumbai",
    pin: 400013
}
console.table(bankLocation);
console.log(`-------------------------------------------------------------------`);

let cloneObject = Object.assign(bankSbi, bankLocation);
console.log(`3. Clone object bankSbi and bankLocation`);
console.table(bankSbi);
console.log(`-------------------------------------------------------------------`);

console.log(`4. Create object rateOfInterest`);
let rateOfInterest = {
    homeLoneInterest: 6.8,
    personalLoneInterest: 7.2,
    duelinterest: 8.4
}
console.table(rateOfInterest);
console.log(`-------------------------------------------------------------------`);

let sbiDetails = {

}
console.log(`5. Merge object bankSbi, bankLocation and rateOfInterest in sbiDetails`);
let mergeObject = Object.assign(sbiDetails, bankSbi, bankLocation, rateOfInterest);
console.table(sbiDetails);
console.log(`-------------------------------------------------------------------`);


console.log(`6. Traversing merge object sbiDetails`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key}, ${value}`);
    } 
}
