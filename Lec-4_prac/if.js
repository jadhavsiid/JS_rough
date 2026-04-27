// Check if a number is greater than another numbers
let num1 = 20
let num2 = 40

if (num1 < num2){
    console.log(`${num2} is greater than ${num1}`);
}
else{
        console.log(`${num1} is less than ${num2}`);
}

// Check if a string is equal to another string
let username = 'Hero'
let anotherUsername = 'Superhero'
if(username == anotherUsername){
    console.log("Error !! Usernames are matching");
}
else{
    console.log("You can proceed with this username");
}

// Check if a variable is a number or not

let score = 44

if(typeof score === 'number'){
    console.log("variable is of number type");
}
else{
    console.log("variable is not of number type");
}

// Check if a boolean value is a true or false

let boolVar = false

if(typeof boolVar === 'boolean'){
    if(boolVar == false){
        console.log("The value of a boolean variable is false");
    }
    else{
        console.log("The value of a boolean variable is true");
    }
}
else{
    console.log("Variable is not of boolean type");
}

// Check whether an array is empty or not

let arr = ["item"]

console.log(arr.length);

if(arr.length == 0){
    console.log("Array is empty");
}
else{
    console.log("Array is NOT empty");
}

// ============================================================================================
/* Write a simple JavaScript program to check whether the person is eligible to drive or not.

Create 2 variables to store a person's Age and the Country which he's living in

If the person's age is greater than or equal to 16 and country is USA , print "You're eligible to drive !!"

else print "You're not eligible to drive !!" */

let personAge = 18
let personCountry = "usa"

if(personAge >= 16 && personCountry.toUpperCase() === 'USA'){
    console.log("You're eligible to drive !!");
}
else{
    console.log("You're not eligible to drive !!");
}
// else if example

/* Imagine a home automation tool which automatically turns on Heater, Fan or Air Conditioner based on sensing the current temperature of the house.

The conditions to be followed are:

If current temperature is below 18°C, then "Turn the Heater on"

If current temperature is between 18°C and 25°C (inclusive, then "Turn the Fan on"

If current temperature is above 25°C, then "Turn the AC on" */

let currentTempInDegCel = 17

if (currentTempInDegCel < 18){
    console.log("Turn the Heater on");
}
else if(currentTempInDegCel >= 18 && currentTempInDegCel <= 25){
    console.log("Turn the Fan on");
}
else if(currentTempInDegCel > 25){
    console.log("Turn the AC on");
}

let health = 'sick'
if(health.toLowerCase() === 'sick'){
    console.log('Go to doctor');
}
else{
    console.log("Enjoy at home");
}

console.log((health.toLowerCase() === 'sick') ? "Go to doctor" : "Enjoy at home");

let Daynum = parseFloat(prompt("Enter a number"))
console.log(Daynum);


switch(Daynum){
    case 1:
        console.log("It's Sunday");
        break;
    case 2:
        console.log("It's Monday");
        break;
    case 3:
        console.log("It's Tuesday");
        break;
    case 4:
        console.log("It's Wednesday");
        break;
    case 5:
        console.log("It's Thursday");
        break;
    case 6:
        console.log("It's Friday");
        break;
    case 7:
        console.log("It's Saturday");
        break;
    default:
        console.log("Invalid input");    
}

let Stringnum = "69.99"
console.log(Stringnum);
console.log(typeof Stringnum);
console.log(parseFloat(Stringnum));
console.log(typeof Number(Stringnum));