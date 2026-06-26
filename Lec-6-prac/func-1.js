"use strict"

/* 1.) Write a function named 'processTeaOrder' that takes another function, 'makeTea' as a parameter and calls it with the argument 'earl grey'. Return result of calling `makeTea`.*/

function makeTea(urOrder){
    return urOrder
}
function processTeaOrder(teFn){
    return teFn('earl grey')
}

let finalRes = processTeaOrder(makeTea)
console.log(finalRes);

/* 2.) Write a function named 'createTeaMaker' that returns another function. The returned function should take one parameter, 'teaType', and return a message like "Making green tea".

Store the returned function in a variable named 'teaMaker' and call it with 'green tea'

*/

const teaMaker = (teaType) =>{
    return teaType
}

const createTeaMaker = (teaFn) => {
    return `Making ${teaFn('green tea')}`
}

let orderType = createTeaMaker(teaMaker)
console.log(orderType);

