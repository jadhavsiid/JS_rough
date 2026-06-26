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
// Oject New Keywoard
// const person = new Object({
//     firtName: "John",
//     lastName: "Doe",
//     age: 18,
//     sex: "male"
// console.log(person);
// });

// Create Object and add properties later
const person = {}
console.log(person);
// person.firstName = "John"
// person.lastName = "Doe"
person.age = 18
person.sex = "male"
person["person email"] = 'person@gmail.com'
console.log(person);

delete person.sex;
console.log(person);

console.log("age" in person);
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
// Object.freeze(JsUser)
JsUser.location = "Banglore"
console.log(JsUser["location"]);

// adding functions to objects (Chai aur Code YT video)

JsUser.sayMyName = function(){
    console.log('Hello Js user');
}
console.log(JsUser.sayMyName());

JsUser.sayMyName2 = function(){
    console.log(`Hello Js user ${this["name"]}`);
}
console.log(JsUser.sayMyName2());

// const newSym = Symbol('symbolNew')
const car = {
    type: "Ferrari",
    model: "420 GTB",
    "car color": "Red",
    weight: "1,720kg",
    // [newSym]: "my new symbol"
}

console.log(car.type);
console.log(car.weight);
// console.log(car.car color);
console.log(car["car color"]);
// console.log(typeof car[newSym]);


const movieObj = {
    "movie name": "Interstellar",
    "IMDB ratings": 8.7,
    "Released Year": 2014,
    "Streaming Platform": "Amazon Prime"
}
// console.log(movieObj);
console.log(movieObj["Streaming Platform"]);
movieObj["Streaming Platform"] = "Netflix"
console.log(movieObj["Streaming Platform"]);
// Object.freeze(movieObj)
// movieObj["Released Year"] = 2016
// console.log(movieObj["Released Year"]);

console.log(Object.isFrozen(movieObj));

movieObj.watched = function(){
    console.log(`You've finished watching ${this["movie name"]}`);
}
console.log(movieObj.watched());


// this

const personDet = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    // hellofunc: function(){
    //     console.log(`Weclome ${this.firstName} ${this.lastName}`);
    // }
    hellofunc: () =>{
        console.log(`Weclome ${this.firstName} ${this.lastName}`);
    }
}
console.log(personDet.hellofunc());

console.log(this);

// function f1(){
//     console.log(this);
// }
// f1()
// const f2 = function(){
//     console.log(this);
// }
// f2()

// const f3 = () =>{
//     console.log(this);
// }
// f3()

console.log(Object.keys(movieObj));
console.log(Object.values(movieObj));
console.log(Object.entries(movieObj));

const objec1 = {1: "apple", 2: "banana"}
const objec2 = {3: "orange", 4: "mango"}
// const objec3 = {objec1, objec2}


const objec3 = {...objec1, ...objec2}
console.log(objec3);


const socialMed = '{
    "userName": "harryMg",
    "userId": "plt1001",
    "data" = {
        photo: "photoData",
        reels: "reelData"
    }
}';

const socailObj = JSON.parse(socialMed)
console.log(socailObj);



