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