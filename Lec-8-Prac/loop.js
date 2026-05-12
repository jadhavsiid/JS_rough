// ! while and do while loops

/* Write a 'while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum'. */
let initVar = 1 
let sum = 0 
while (initVar <= 5) {
    sum += initVar
    initVar++
}
console.log(sum);

/* Write a 'while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown' */
let startVar = 5
let countdown = new Array()
while (startVar >= 1) {
    countdown.push(startVar)
    startVar--
}
console.log(countdown);

/* Write a 'do-while' loop that prompts a user to enter their favorite tea type until they enter 'stop'. Store each tea type in an array named 'teaCollection' */

// let teaCollection = new Array()
// let userInput
// do {
//     userInput = prompt("Enter your favorite tea type")
//     if(userInput.toLowerCase() !== 'stop'){
//         teaCollection.push(userInput)
//         console.log(teaCollection);
//     }

// } while (userInput.toLowerCase() !== 'stop');


/* Write a 'do-while' loop that adds numbers from 1 to 3 and stores the result in a variable named 'total' */
let starter = 1
let total = 0
do {
    total += starter
    starter++

} while (starter <= 3);
console.log(total);

// ! For loop

/* Write a 'for' loop that multiplies each element in the array '[2,4,6]' by 2 and stores the results in a new array named 'multipliedNumbers'. */

let initArray = [2,4,6]
let multipliedNumbers = []

for(i = 0; i < initArray.length; i++){
    resultant = initArray[i] * 2
    multipliedNumbers.push(resultant)
}
console.log(multipliedNumbers);

/* Write a 'for' loop that lists all the cities in the array '["Paris","New York","Tokyo","London"]' and stores each city in a new array named 'cityList' */


let cityArr = ["Paris","New York","Tokyo","London"]
let cityList = []
for(j = 0; j < cityArr.length; j++){
    cityList.push(cityArr[j])
}
console.log(cityList);
