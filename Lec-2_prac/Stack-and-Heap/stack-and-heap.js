"use strcit"
let name1 = "lemon"
let name2 = name1
name2 = "citrus"
console.log(name2);
console.log(name1);


let userOne = {
    email:"sidjadhav@google.com",
    upiId:"userOne@ab",
}
let userTwo = userOne
userTwo.email = "jadhavsid@google.com"
console.log(userOne.email);
console.log(userTwo.email);