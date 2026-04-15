let myDate = new Date ()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let mycreatedDate = new Date(2025, 7, 17, 17, 3)
console.log(mycreatedDate);
// When you declare date in form of an Array like above your starting month is 0 (Jan)
let setDate = new Date("2026-08-17")
console.log(setDate);
// When you declate date in form of "yyyy-mm-dd" your starting month is 1 (Jan)

let indDate = new Date ("08-17-2027")
console.log(indDate);

