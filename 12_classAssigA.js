console.log(`******************** Vehicle Details ************************************`);
class Vehicle{
    constructor(name, model, colour, transmission, price){
        this.name = name;
        this.model = model;
        this.colour = colour;
        this.transmission = transmission;
        this.price = price;
    }

    showDetails() {
        console.log(``);
        console.log(`Details is;  { Name: ${this.name}, Model: ${this.model}, Colour: ${this.colour}, Transmission: ${this.transmission}, Price: ${this.price} }`);

    }
}

const TATA = new Vehicle("TATA", "Safari", "Blue", "Manual", "16 Lakh");
const MAHINDRA = new Vehicle("MAHINDRA", "Scorpio", "Grey", "Manual", "15 Lakh" );
const TESLA = new Vehicle("TESLA", "S", "White", "Automatic", "95 Lakh");
const HYUNDAI = new Vehicle("HYUNDAI", "Creta", "Maroon", "Automatic", "20 Lakh");
const BMW = new Vehicle("BMW", "Gran", "BLue", "Automatic", "90 Lakh");

const arrayOfVehicle = [TATA, MAHINDRA, TESLA, HYUNDAI, BMW]
for (const element of arrayOfVehicle) {
    element.showDetails();
}


console.log(`===========================================================================================`);

console.log(`******  College Information  *****`);
console.log(`----------------------------------`);
class College {
    constructor(name, location, courses, year){
        this.name = name;
        this.location = location;
        this.courses = courses;
        this.year = year;
    }
}

const clg1 = new College ("Bharti Vidyapeeth", "Sangli", ["MS-ENT", "MD-PSM"], 1996);
const clg2 = new College ("D Y Patil", "Kolhapur", ["Civil", "Computer"], 1998);
const clg3 = new College ("Sihgad College", "Pune", ["Mechanical", "Aerospace"], 2002);
const clg4 = new College ("JSPM College", "Pune", ["Computer", "Business"], 2004);

function traverseObject(clgName) {
    for (const key in clgName) {
        console.log(`${key}: ${clgName[key]}`);
    }
}
console.log("College 1:");
traverseObject(clg1);
console.log(`-----------------------------`);

console.log("College 2:");
traverseObject(clg2);
console.log(`-----------------------------`);

console.log("College 3:");
traverseObject(clg3);
console.log(`-----------------------------`);

console.log("College 4:");
traverseObject(clg4);
