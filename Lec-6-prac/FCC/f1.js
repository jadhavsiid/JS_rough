"use strict"
// Way-1
// function sayMyName(){
//     console.log("Hisenberg");
// }
// sayMyName()

// Way-2
function sayMyName(){
    return `Hisenberg`
}

let fCall = sayMyName()
console.log(fCall);
console.log(fCall);
console.log(fCall);


// function with single parameter
function iceCreamOrder(iceCreamOrder){
    return `You've ordered ${iceCreamOrder} ice cream !!`
}

const orderRes = iceCreamOrder('chocolate')
console.log(orderRes);

// function with multiple parameter
function foodOrder(order,extra){
    return `You have ordered ${order} with a extra ${extra}.`
}

let orderDetails = foodOrder('burger','slice of cheese')
console.log(orderDetails);

// function with default parameter
function currentAge(birthYear,currentYear = 2026){
    return `Your age is: ${currentYear - birthYear}`
}

let ageDetails = currentAge(2007)
console.log(ageDetails);

/* You're building a small feature for a food delivery app. Write a function named placeOrder that takes two parameters, foodItem and quantity, and returns a string like "Ordering 2 portions of Biryani" when called with "Biryani" and 2.

Call the function with a food item and quantity of your choice
Store the returned result in a variable named myOrder */


function placeOrder(foodItem, quantity){
    return `Ordering ${quantity} portions of ${foodItem}.`
}

let myOrder = placeOrder('Biryani',2)
console.log(myOrder);


// Global scope

let number1 = 20

function additionOfNumber(number2){
    return number1 + number2
}

// console.log(additionOfNumber(40));

// Functional scope

function randomFunction(){
    let randomVariable = 'random'
}

// console.log(randomVariable); // will give Uncaught ReferenceError: randomVariable is not defined

// Block scope
if(true){
    let a = 40
    const b = 60
    var c = 80
}
// console.log(a);
// console.log(b);
console.log(c);

// Scope inside a function
function func1(){
    let var1 = 69

    function func2(){
        let var2 = 43
        console.log(var1);
        console.log(var1 + var2);
    }

    func2()
    // console.log(var2); // ReferenceError: var2 is not defined at func1
}

func1()
// console.log(var1); // ReferenceError: var1 is not defined

// Anonymous function

const anonymousVar = function(){
    return `Hi, I am an Anonymous function`
}

console.log(anonymousVar());


// Function accesibility

aFunction()
function aFunction(){
    console.log(`Hi, I am a function`);
}

// anotherFunction()
const anotherFunction = function(){
    console.log(`Hi, I am another function`);
}

/* You're building a simple booking system for a movie theatre. Create a anonymous function and store it in a varialbe bookSeat that takes one parameter called movieName. Inside this function, create another named function named as generateTicket that returns a message like "Ticket booked for Inception".

Call generateTicket from within bookSeat and return its result
The message in generateTicket should use the movieName parameter passed to bookSeat
Do not call generateTicket outside of bookSeat */

const bookSeat = function(movieName){
    function generateTicket(){
        return `Ticket booked for ${movieName}.`
    }   
    return generateTicket()
}

let movieDet = bookSeat('Inception')
console.log(movieDet);


// Arrow function

const multTwo = (numb1, numb2) => {
    return numb1*numb2
}

// alternatively (implicit return)

// const multTwo = (numb1, numb2) => (numb1*numb2)


console.log(multTwo(5,10));
console.log(multTwo(8,2));
console.log(multTwo(13,7));


// Immediately invoked function expression (IIFE)
(function hello(){
    // named iife
    console.log("Hello");
})();

(() => {
    // unnamed iife
    console.log("Hello Now");
})()

// ((name) => {
//     iife with parameter
//     console.log(`Hello now ${name}`);
// })('sid')


const egFunc = () =>{
    console.log('Arrow Function example')
}
egFunc()

const greetFunc = () => `Greetings of the day`
console.log(greetFunc()); 


const birthdayFn = name => `Happy birthday ${name}.`
console.log(birthdayFn('siddhesh'));












