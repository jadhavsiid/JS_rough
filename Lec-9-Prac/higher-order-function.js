"use strict"

const birthYear = (byear) => byear

function currentAge(func, yearVal, cYear = 2026){
    return `Your current age is : ${cYear - func(yearVal)}`
}

let ageRes = currentAge(birthYear,2001)
console.log(ageRes);

// another higher order eg
const greet = () => `hello world`

function offerGreet(func){

    let funcRes = func()
    console.log(funcRes);
}

offerGreet(greet)

/* Create a function named as annualSal which takes aSalary as a parameter and returns it.

Create a another function monthlyCredit which takes
*/

const annualSal = (aSalary) => aSalary

const monthlyCredit = (salaryFunc, sal, pf ) => {
    return `Your salary credited this month is ₹${Math.round(salaryFunc(sal)/12-pf).toLocaleString('en-IN')}`
}

let salRes = monthlyCredit(annualSal,350000,1200)
console.log(salRes);


// .forEach() 

const greetingsArray = ['Hello','Hola','Namaste','Bonjour','Ciao']

greetingsArray.forEach((iter, index, arr) =>{
    return iter;
})


const randomNumbers = [80, 40, 20, 10]

randomNumbers.forEach(function iterFunc(numIter,index,arr){
    console.log(arr);
})

const numbersArray = [100, 250, 80, 86, 91]

for (const divIter of numbersArray) {
    console.log(divIter/2);
}

const mobDetails = [
    {
        brand: "Apple",
        model: "Iphone",
    },
    {
        brand: "Samsung",
        model: "S25",
    },
    {
        brand: "One Plus",
        model: "Nord CE5",
    }
]
mobDetails.forEach(function(mobItem){
    console.log(mobItem.brand);
})
