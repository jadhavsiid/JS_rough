let score = 102
let bonus = 25

// Arithmatic operations
let totalScore = score + bonus
console.log(totalScore);
let addition = 4 + 5
let subtract = 9 - 3
let mult = 3 * 5
let div = 8 / 2
let reminder = 9 % 2
let expo = 2 ** 3
console.table({addition: addition,subtract: subtract, mult: mult, div: div, reminder: reminder, expo: expo});

let myscore = 21
console.log(myscore++);
console.log(++myscore);

// Comparison Operators
let num1 = 3
let num2 = 3
let num3 = 6

console.log(num1 == num2);
console.log(num1 == num3);
console.log(num1 != num3);
console.log(num1 > num3);
console.log(num1 < num3);

// Logical Operators
/*
(i) && - and
(ii) || - or
(iii) ! - reverse (not)
*/

let isLoggedin = true
let isPaid = false
console.log(isLoggedin && isPaid);

let isEmailUser = true
let isGoogleUser = false
console.log(isEmailUser || isGoogleUser);

// Assignment operators
let score1 = 10 + 11
let numb1 = 10
numb1 += 5
console.log(numb1);


// Operator Precedence
let score2 = 2 * 3 + 2 - 1
console.log(score2);
// Note: Always use paranthesis while dealing with multiple operators.
