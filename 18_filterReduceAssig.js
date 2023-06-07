console.log(`*****************  Filter and Reduce ******************`);
console.log(`-------------------------------------------------------`);
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];


console.log(`1. Employees from 'wipro' company`);
const wipro = arrayEmps.filter((employee) => {
    return employee.emp_company == "Wipro";
})

const wiproEmp = wipro.map((employee) => {
    return employee.emp_name;
})
console.log(wiproEmp);
console.log(`-------------------------------------------------------`);

console.log(`2. Employees from 'IT' or 'HR'`);
const empItHr = arrayEmps.filter((employee) => {
    return employee.emp_dept == "IT" ||employee.emp_dept == "HR";
})

const deptItHr = empItHr.map((employee) => {
    return employee.emp_name;
})
console.log(deptItHr);
console.log(`-------------------------------------------------------`);

console.log(`3. Employees whose emp id's are greater than 50`);
const empId = arrayEmps.filter((employee) => {
    return employee.emp_id > 50;
})
const idEmp = empId.map((employee) => {
    return employee.emp_name;
})
console.log(idEmp);
console.log(`-------------------------------------------------------`);

console.log(`4. Employees whose name starts with 'A' or 'V'`);
const startName = arrayEmps.filter((employee) => {
    return employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V")|| employee.emp_name.startsWith("M");
})
const nameStart = startName.map((employee) => {
    return employee.emp_name;
})
console.log(nameStart);
console.log(`-------------------------------------------------------`);

console.log(`5. Average salary of all employee`);
const avgSalary = arrayEmps.map((employee) => {
    return employee.emp_salary;
})
const sumSalary = avgSalary.reduce((runningTotal, value) => {
    return runningTotal+value
})
let salaryAvg = sumSalary / avgSalary.length;
console.log(`   ${salaryAvg}`);
console.log(`-------------------------------------------------------`);

console.log("6. Average salary of 'IT' department");
const itEmployees = arrayEmps.filter((employee) => {
    return employee.emp_dept === "IT";
});
const itSalaries = itEmployees.map((employee) =>{ 
    return employee.emp_salary
});
const sumItSalary = itSalaries.reduce((runningTotal, value) => {
    return runningTotal + value;
});
const avgItSalary = sumItSalary / itSalaries.length;
console.log(`   ${avgItSalary}`);
console.log(`-------------------------------------------------------`);
