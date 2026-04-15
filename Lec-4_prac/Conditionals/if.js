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