"use strict"

const mysym = Symbol("Key1")
console.log(mysym);
// object literals
const JsUser = {
    name: 'Siddhesh',
    "full name": "Siddhesh Jadhav",
    age: 24,
    location: 'Mumbai',
    email: 'sidjadhav@gmail.com',
    isloggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
    // Storing symbol in object
    [mysym]: "mykey1"
}
// Dot notation and square notation 
console.log(JsUser.location);
console.log(JsUser["location"]); // alternate method to acces elements of an object.
console.log(JsUser["full name"]); // alternate method to acces elements of an object.

// Accessing the symbol in an particular object
console.log(JsUser[mysym]);

// Changing the values of an elements of an object
JsUser.email = "siidjadhav@anthropic.co.in"
console.log(JsUser["email"]);

// How to not let any value of an object change
Object.freeze(JsUser)
JsUser.location = "Banglore"
console.log(JsUser["location"]);

// adding functions to objects (Chai aur Code YT video)