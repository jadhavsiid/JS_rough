"use strcit"


function greet(name){
    console.log(`Hello ${name}`);
}
greet("Siddhesh")

/* 1.) Write a function named 'makeTea' that takes one parameter as 'typeOfTea', and returns a string like "Making green Tea" when called with "Green Tea", store the result in variable named "teaOrder". */

function makeTea(typeOfTea){
    let teaOrder =`Making ${typeOfTea}`;
    console.log(teaOrder);
}

makeTea("Green Tea")

/* 2.)Create a function named 'orderTea' that takes one parameter as 'teaType'. Inside this function, create another function named 'confirmOrder' that returns a message like "Order Confirmed for chai", call 'confirmOrder' from within 'orderTea' and return the result */


function orderTea(teaType){
    function confirmOrder(){
        console.log(`Order confirmed for ${teaType}`);
    }

    confirmOrder()
}

orderTea("chai")