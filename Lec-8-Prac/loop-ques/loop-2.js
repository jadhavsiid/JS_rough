"use strict"

/* 1.) Write a 'for' loop that loops through the array ['green tea','black tea','chai','oolong tea'] and stops the loop when it finds "chai". Store all teas before "chai" in a new array named 'selectedTeas'. */

const teaTypes = ['green tea','black tea','chai','oolong tea']

const selectedTeas = []

for (let teaIndex = 0; teaIndex < teaTypes.length; teaIndex++) {
    let teaStorage = teaTypes[teaIndex]
    if (teaStorage.toLowerCase() === 'chai') {
        break
    } 
    else {
        selectedTeas.push(teaStorage)
    } 
    console.log(selectedTeas);  
}

/* 2.) Write a 'for' loop that loops through the array ['London','New York','Paris','Berlin'] and skips "Paris". Store other cities in a new array named 'visitedCities' */

const ogCities = ['London','New York','Paris','Berlin']
const visitedCities = new Array()

for (let ogCityIndex = 0; ogCityIndex < ogCities.length; ogCityIndex++) {
    const eachCity = ogCities[ogCityIndex];

    if (eachCity.toLowerCase() === 'paris') {
        continue    
    }
    visitedCities.push(eachCity)
    console.log(visitedCities);
    
}

/* 3.) Write a 'for-of' loop that loops through the array [1,2,3,4,5] and stops when the number '4' is found. Store numbers before '4' in an array named 'smallNumbers'. */

const numArr = [1,2,3,4,5]
const smallNumbers = []

for (const numbs of numArr) {
    if(numbs === 4){
        break
    }
    smallNumbers.push(numbs)
}
console.log(smallNumbers);

/* 4.) Write a 'for-of' loop that loops through the array ['chai','green tea','herbal tea','black tea'] and skips "herbal tea". Store the other teas in an array named 'preferredTeas'. */

const availTeas = ['chai','green tea','herbal tea','black tea']

const preferredTeas = new Array()

for (const chosenTeas of availTeas) {
    if(chosenTeas.toLowerCase() === 'herbal tea'){
        continue
    }
    preferredTeas.push(chosenTeas)
    
}
console.log(preferredTeas);

