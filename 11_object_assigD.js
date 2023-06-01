


console.log(`****************************************************Object Assignment*********************************************************`);
console.log(`------------------------------------------------------------------------------------------------------------------------------`);
let professor = {
    name: "Ankit Tiwari",
    age: 23,
    subject: "JavaScript",
    salary: "5lpa",
    location: "Mumbai",
    degrees: {
        engineering: "CSC",
        PHD: "Adv Computing",
        diploma: "Mech"
    },
    certificates: ['Hacker Rank Participation', 'Certificate in IFE course', 'Certificate in Adv Programming'],
    value: function(){
        let profDegree = `Engineering: ${this.degrees.engineering}, PHD: ${this.degrees.PHD}, Diploma: ${this.degrees.diploma}`;
        return profDegree;
    }
}
console.log("Profeesor object with properties:",  professor);
console.log(`------------------------------------------------------------------------------------------------------------------------------`);

console.log(`Concating all degress`);
let allDegrees = professor.value(); 
console.log(`Professor degrees are: ${allDegrees}`);
console.log(`------------------------------------------------------------------------------------------------------------------------------`);

console.log(`Adding new property Total Experience`);
professor.totalExperience = "14 years";
console.log(`Total Experience: ${professor.totalExperience}`);
console.log(`------------------------------------------------------------------------------------------------------------------------------`);

console.log(`Modifying Property Value`);
professor.name = "Sujata More"; //Update the name of professor
console.log(professor);
console.log(`------------------------------------------------------------------------------------------------------------------------------`);

console.log(`Added new certificate in array`);
professor.certificates.push("Oracle Certified") //Added certificate in certificate array
console.log(professor.certificates);
console.log(`------------------------------------------------------------------------------------------------------------------------------`);

//Last element of array certificate
let lastElement = professor.certificates[professor.certificates.length-1];
console.log(`Last element of array certificate: ${lastElement}`);

