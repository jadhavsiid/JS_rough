"use strict"
document.write('Array Challenges in JS')

/* Challenge-1

Declare an array named teaFlavors that contains the strings `green tea`, `black tea` and `oolong tea`.

Access the first element of the array and store it in a variable named "firstTea"
*/

let teaFlavors = [`green tea`, `black tea`, `ooLong tea`]

let firstTea = teaFlavors[0]
console.log(firstTea);

/* Challenge-2

Declare an array named "cities" that contains the strings `London`, `Tokyo`,`Paris` and `New York`.

Access the third element of the array and store it in a variable named "favoriteCity"
*/

let cities = [`London`,`Tokyo`,`Paris`,'New York']
let favoriteCity = cities[2]
console.log(favoriteCity);

/* Challenge-3

Declare an array named "teaTypes" that contains the strings `herbal tea`,white tea` and `Masala chai`.

Change the second element of an array to `jasmine tea`
*/

let teaTypes = [`herbal tea`,`white tea`,`Masala chai`]
console.log(teaTypes);
teaTypes[1] = 'jasmine tea'
console.log(teaTypes);

/* Challenge-4

Declare an array named "citiesVisited" that contains the strings `Mumbai` and `Sydney`.

Add `Berlin` to the array using the "push" method.
*/

let citiesVisited = [`Mumbai`, `Sydney`]
console.log(citiesVisited);
citiesVisited.push(`berlin`)
console.log(citiesVisited);

/* Challenge-5

You have an array named "teaOrders" that contains the strings `chai`, `iced tea`, `Matcha` and `earl grey`.

Remove the last element of the array using the "pop" method and store it in a variable named as "lastOrder"
*/

let teaOrders = [`chai`, `iced tea`, `Matcha`, `earl grey`]
console.log(teaOrders);
teaOrders.pop()
console.log(teaOrders);


/* Challenge-6

You have an array named "popularTeas" that contains the strings `green tea`, `oolong tea`, and `chai`.

Create a soft copy of this array named 'softCopyTeas'

Concept of Heap Memory
*/

let popularTeas = [`green tea`, `oolong tea`, `chai`]
console.log(`Popular Teas Array: ${popularTeas}`);

let softCopyTeas = popularTeas

console.log(`Soft copy: ${softCopyTeas}`);

popularTeas.pop()
console.log(popularTeas);
console.log(softCopyTeas);

/* Challenge-7

You have an array named "topCities" that contains the strings `Berlin`, `Singapore`, and `New York`.

Create a hard copy of this array named 'hardCopyCities'
*/

let topCities = [`Berlin`, `Singapore`, `New York`]
let hardCopyCities = [...topCities] // way to create a hardcopy of array
console.log('Before Pop');
console.log(topCities);
console.log(hardCopyCities);
topCities.pop()
console.log('After Pop');
console.log(topCities);
console.log(hardCopyCities);

/* Challenge-8

You have two arrays named "europeanCities" that contains the strings `Paris` and `Rome`, and an array "asianCities" that contains the strings `Tokyo` and `Bangkok`.

Merge these two arrays into a new array named "worldCities"

*/

let europeanCities = [`Paris`,`Rome`]
let asianCities = [`Tokyo`,`Bangkok`]

let worldCities = europeanCities.concat(asianCities)

console.log(worldCities);

/* Challenge-9

You have array named "teaMenu" that contains the strings `masala chai`,`oolong tea`, `green tea` and `earl grey`

Find the length of the array and store it in a variable named "menuLength"

*/
let teaMenu = ['masala chai', 'oolong tea','green tea','earl grey']

let menuLength = teaMenu.length
console.log(menuLength);

/* Challenge-10

You have array named "cityBucketList" that contains the strings `kyoto`,`london`, `Cape Town` and `Vancouver`

Check if "London" is in the array and store the result in a variable named "isLondonInList"

*/

let cityBucketList = [`kyoto`,`london`, `Cape Town`, `Vancouver`]
console.log(cityBucketList);

let isLondonInList = cityBucketList.includes('London')
console.log(isLondonInList);

cityBucketList.reverse()
console.log(cityBucketList);

// also refer slice() and splice(), unshift(param), shift(), indexOf(), .join(), Spread operators, .flat(), .from(), .of(),.isArray()

// ============================================================================================================

const cars = ['Volvo','BMW','Audi','Hyundai']
console.log(cars);

const cars2 = new Array('Volvo','BMW','Audi','Hyundai')
console.log(cars2);

const sports = ['football','cricket','basketball','golf','rugby']
console.log(sports[3]);
console.log(sports[1]);
const groceries = []
groceries[0] = "Egg"
groceries[1] = "Milk"
groceries[2] = "Sugar"
groceries[3] = "bread"
console.log(groceries);


const stationary = ['Pencil','Pen','Eraser','Exam Pad']
console.log(stationary);

stationary[2] = 'Sharpener'
console.log(stationary);


const kitchenEquip = ['knife','spatula','stirrer','mixer']
console.log(kitchenEquip.length);


const fruits = ['kiwi','strawberry','watermelon']
console.log(fruits);
fruits.push('muskmelon')
console.log(fruits);

const americanCars = ['Ford','Tesla','GM']
const germanCars = ['Volkswagen','BMV','Audi']

// americanCars.push(germanCars)
// console.log(americanCars);

// const mergedArrays = americanCars.concat(germanCars)
// console.log(mergedArrays);

const mergedArrays = [...americanCars,...germanCars]
console.log(mergedArrays);


const domesticAnimals = ['dog','cat']
const farmAnimals = ['cow','pig','chickens','goat']

const animals = ['lion','zebra', ...domesticAnimals, 'cheetah','panther', ...farmAnimals]
console.log(animals);
animals.pop()
console.log(animals);

let string1 = 'Engineer'
console.log(...string1);


const firstArr = ['Pizza','Pineapple','Pumpkin']
const secondArr = firstArr

secondArr[1] = 'Prawns'

console.log(secondArr);
console.log(firstArr);
