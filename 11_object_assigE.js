


let sbiBank = {
    bankName: "SBI Bank",
    location: "CSMT",
    accountNo: 545545226523 ,
    ifsc: "SBI24515",
    interestRate: "7.8%",

    showDetails: function(){
        console.log(`Bank: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
    }
}

let axisBank = {
    bankName: "HDFC Bank",
    location: "Lalbag",
    accountNo: 01752752523 ,
    ifsc: "HDfC24515",
    interestRate: "5.8%",

    showDetails: function(){
        console.log(`Bank: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
    }
}

let hdfcBank = {
    bankName: "Axis Bank",
    location: "Talegaon",
    accountNo: 954545226523 ,
    ifsc: "AXIS24515",
    interestRate: "9.8%",

    showDetails: function(){
        console.log(`Bank: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
    }
}

let yesBank = {
    bankName: "YES Bank",
    location: "Katraj",
    accountNo: 245545226523 ,
    ifsc: "YES24515",
    interestRate: "6.8%",

    showDetails: function(){
        console.log(`Bank: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`);
    }
}
console.log(`***************************************Bank Details**************************************************`);
console.log(`-----------------------------------------------------------------------------------------------------`);
sbiBank.showDetails();
console.log(`-----------------------------------------------------------------------------------------------------`);
axisBank.showDetails();
console.log(`-----------------------------------------------------------------------------------------------------`);
hdfcBank.showDetails();
console.log(`-----------------------------------------------------------------------------------------------------`);
yesBank.showDetails();
