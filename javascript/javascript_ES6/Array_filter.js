
const data = [10,20,30,40]

const newdata = data.filter(element => {
    return element>20
})
console.log(newdata);


const emp = [
    {
    name: 'Dear',
    salary: '20000',
    department: 'programer'
    },
    {
        name: 'zaza',
        salary: '500',
        department: 'programer'
    },
    {
        name: 'dada',
        salary: '9000',
        department: 'hr'
    },
]

console.log(emp);
const newemp = emp.filter(element => {
    return element.department == 'programer'
})
console.log(newemp);

const newemp2 = emp.filter(element => {
    return element.department == 'programer'
}).filter(element => {
    return element.salary >1000
})
console.log(newemp2);