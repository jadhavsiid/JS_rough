"use strcit"

function greet(name){
    console.log(`Hello ${name}`);
}
greet("Siddhesh")

/* 1.) Write a function named 'makeTea' that takes one parameter as 'typeOfTea', and returns a string like "Making green Tea" when called with "Green Tea", store the result in variable named "teaOrder". */

function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("Green Tea")
console.log(teaOrder);

/* 2.)Create a function named 'orderTea' that takes one parameter as 'teaType'. Inside this function, create another function named 'confirmOrder' that returns a message like "Order Confirmed for chai", call 'confirmOrder' from within 'orderTea' and return the result */


function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for ${teaType}`;
    }

    return confirmOrder()
}

let oderTea = orderTea("chai")
console.log(oderTea);

/* 
3.) Write an arrow function named 'calculateTotal' that takes two parameters: 'price' and 'quantity'. The function should return the total cost by multiplying the 'price; and 'quantity'. 
Store the result in a variable named 'totalCost' */

const calculateTotal = (price, quantity) =>{
    return price*quantity
}
// Alternate
// const calculateTotal = (price, quantity) => price*quantity

let totalCost = calculateTotal(50,2)
console.log(totalCost);

// "this" context
