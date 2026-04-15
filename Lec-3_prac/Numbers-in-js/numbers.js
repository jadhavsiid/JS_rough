const score = 400
console.log(score);
// Number Methods
console.log(typeof score.toString());
console.log(score.toString().length);
console.log(typeof(score));

const piNum = 3.141592
console.log(piNum.toFixed(2));

const othNum = 125.6953
console.log(othNum.toPrecision(3));

const fewHundereds = 500000;
console.log(fewHundereds.toLocaleString('en-IN'));

// ------------ Maths in JS ----------------------
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(6.8));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(10,20,100,6));
console.log(Math.max(10,20,100,6));

console.log(Math.random()); // always random value b/w 0 to 1

console.log(Math.round((Math.random()*10)+1));

// To generate a random number between a given range
const min = 25
const max = 50

console.log(Math.round(Math.random() * (max - min + 1) + min));





