let balance = 200
let newbalance = new Number (200)
console.log(balance);
console.log(newbalance);
console.log(newbalance.valueOf());

console.log(typeof balance);
console.log(typeof newbalance);

// newbalance is an variable holding number 200 which is a primitive type, but since we've created it in form of object it has become complex datatype (non-primitive).

// String Interpolation
let age = 20
let stmt = `My age is: ${age}`
console.log(stmt);
console.log(`My age after 2 years ${age+2}`);