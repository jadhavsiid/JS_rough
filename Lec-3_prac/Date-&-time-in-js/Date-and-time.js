"use strict"
// date in js

let myDate = new Date()
console.log(myDate);
console.log(typeof myDate);

// Converting date to strings
console.log(myDate.toString());
console.log(typeof myDate.toString());

// converting to toDateString()
console.log(myDate.toDateString());

// converting to toISOSString()
console.log(myDate.toISOString());

// converting to toJSON()
console.log(myDate.toJSON());

// converting to toLocaleString()
console.log(myDate.toLocaleString());

// converting to toLocaleDateString()
console.log(myDate.toLocaleDateString());

// converting to toLocaleTimeString()
console.log(myDate.toLocaleTimeString());


// let myCreatedDate = new Date(2026, 0, 1)
// let myCreatedDate = new Date(2026, 7, 17, 21, 30)
// let myCreatedDate = new Date(2026, 7, 17, 21, 30)
// let myCreatedDate = new Date("2027-02-05")
let myCreatedDate = new Date("04-15-2026")
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); // values in mili seconds

console.log(myCreatedDate.getTime());
console.log(Math.round(Date.now()/1000));

// ------------------------------------------------------------------------------------

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1 );
console.log(newDate.getDay());

// newDate.toLocaleString('default', {
//     weekday: "long"
// }) read toLocaleString() in depth

