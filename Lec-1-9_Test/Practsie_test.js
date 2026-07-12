"use strict"

/* Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number". */

// function stringToNumber(input){
//     if (typeof input === 'string') {
//         Number(input)
//     }
//     else{
//         return `Not a number`
//     }
// }

// let result1 = stringToNumber('10')
// console.log(result1);

// /* Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc. */

// function flipBoolean(input) {
//     Boolean(input)
//     console.log(!input);
// }
// flipBoolean(-0)

// /* Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!" */

// function whatAmI(input) {
//     return `I'm a ${typeof input}`
// }
// let result2 = whatAmI('siddhesh')
// console.log(result2);

// /* Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's value is falsey. */

// function isItTruthy(input){
//     if(input == true || input == "false" || input == "0" || input == [] || input == {} || input === 1)
//     {
//         return `It's truthy`
//     }
//     else{
//         return `It's falsy`
//     }
// }

// let result3 = isItTruthy(0)
// console.log(result3);

// /* Write a function filterNumbers() that returns only numbers from a mixed array into a new array */

// const mixedArr = ["hello",'hola',63,'merci',96,25,'ciao']

// let filterNumbers = (arr) =>{
//     return arr.filter((elem) =>{
//         return typeof elem === 'number'
//     })
// }
// let result4 = filterNumbers(mixedArr)
// console.log(result4);

// /* Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4 */

// let printMultiplicationTable = (num) =>{
//     for(let i = num; i<= num; i++){
//         for(let j = 1; j<=10; j++){
//             console.log(`${i} * ${j} = ${i*j}`);
//         }
//     }
// }
// printMultiplicationTable(2)

// /* Write a function squareNumbers(arr) using map() and arrow functions */
// const normalArr = [2,3,4,5]

// let result5 = normalArr.map((iter) => iter*iter)
// console.log(result5);



/* Question 1

Create an array of at least 4 employee objects, each with properties: name, baseSalary, performanceRating (a number from 1–5), and a method called getBonus that uses this to calculate a bonus based on the rating (you decide the logic — e.g. higher rating means higher bonus percentage), using if / else if or a ternary operator.
Write a separate function named calculateFinalPay that takes an employee object and an optional taxDeduction parameter with a default value, and returns the final payable amount (base salary + bonus − tax deduction).
Write an arrow function named formatPayslip that takes a name and an amount, and returns a readable string using template literals and a number method to format the amount nicely (e.g. with commas or fixed decimals).
Use .map() on the employee array to generate a new array of formatted payslip strings for all employees.
Use .filter() to get only the employees whose final pay exceeds a certain threshold.
Use .reduce() to calculate the total payroll expense for the company.
Once all employees are processed, freeze each employee object using Object.freeze() and verify with Object.isFrozen() that changes to baseSalary no longer take effect.*/


const employee = [
    {
        name: "John",
        baseSalary: 30000,
        PerformanceRating: 3,
        getBonus: function(){
            if(this.PerformanceRating > 2){
                return 2 * this.baseSalary
            }
            else{
                return this.baseSalary
            }
        }
    },
    {
        name: "Rose",
        baseSalary: 50000,
        PerformanceRating: 4,
        getBonus: function(){
            if(this.PerformanceRating > 2){
                return 2 * this.baseSalary
            }
            else{
                return this.baseSalary
            }
        }
    },
    {
        name: "Sam",
        baseSalary: 80000,
        PerformanceRating: 5,
        getBonus: function(){
            if(this.PerformanceRating > 2){
                return 2 * this.baseSalary
            }
            else{
                return this.baseSalary
            }
        }
    },
    {
        name: "Lisa",
        baseSalary: 20000,
        PerformanceRating: 2,
        getBonus: function(){
            if(this.PerformanceRating > 2){
                return 2 * this.baseSalary
            }
            else{
                return this.baseSalary
            }
        }
    }
]

function calculateFinalPay(employee, taxDeduction = 5000){
    return employee.baseSalary + employee.getBonus() - taxDeduction
}

const formatPayslip = (employee_name, emplyee_base_sal,finalAmount) =>{
    return `Employee Name: ${employee_name} 
    Employee Base Salary: ${Math.round(emplyee_base_sal).toLocaleString("en-IN")} 
    Employee final pay with bonus: ${Math.round(finalAmount).toLocaleString("en-IN")} `

}

let payWithBonus = employee.forEach((item) =>{
    console.log(formatPayslip(item.name, item.baseSalary, calculateFinalPay(item)));
})

console.log(payWithBonus);

let paycrossingLimit = employee.filter((item) => calculateFinalPay(item) > 100000)
console.log(paycrossingLimit);

let totalCost = employee.reduce((acc,currentVal) => {
    return Math.round(acc + calculateFinalPay(currentVal))
}, 0)
console.log(totalCost.toLocaleString("en-IN"));