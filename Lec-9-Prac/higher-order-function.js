"use strict"

const birthYear = (byear) => byear

function ageAfterTenYrs(func, cYear = 2026){
    return `Your current age is : ${cYear - func}`
}

let ageRes = ageAfterTenYrs(birthYear)