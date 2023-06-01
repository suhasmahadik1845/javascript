
let person = {
    height: "6feet",
    name: "Bill gates",
    city: "Pune",
    age: 54,
    isMarried: true 
 };
 console.log(`Type of person is ${typeof person}`);
 
 console.log(`------- Accessing object properties----------`);
 // Dot Notation .
 const personName = person.name;
 const personHeight = person["height"];
 console.log(`Person name is : ${personName}`);
 console.log(`Person City is : ${person.city}`);
 
 console.log(`Person Height is : ${person['height']}`);
 
 console.log(`------- Updating object properties----------`);
 person.city = "Mumbai";
 person.isMarried = false;
 console.log(`Person City is : ${person.city}`);
 console.log(`Person married status is : ${person.isMarried}`);
 
 console.log(`------- Adding object properties----------`);
 person.gender = "Male";
 person.state = "MH";
 
 console.log(`------- Deleting object properties----------`);
 delete person.height;
 
 console.log(person);
  console.table(person);

  console.log(`============ Creating an empty object==================`);
 let student = {

 }
 console.log(student);
 student.marks="99%";
 console.log(student);

 const isCityAvailable = "city" in student;
 console.log(`Is City available in student object: ${isCityAvailable}`);
 console.log(`Is marks available in student object: ${"marks" in student}`);