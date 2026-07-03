"use strict";

const birthYear = (byear) => byear;

function currentAge(func, yearVal, cYear = 2026) {
  return `Your current age is : ${cYear - func(yearVal)}`;
}

let ageRes = currentAge(birthYear, 2001);
console.log(ageRes);

// another higher order eg
const greet = () => `hello world`;

function offerGreet(func) {
  let funcRes = func();
  console.log(funcRes);
}

offerGreet(greet);

/* Create a function named as annualSal which takes aSalary as a parameter and returns it.

Create a another function monthlyCredit which takes
*/

const annualSal = (aSalary) => aSalary;

const monthlyCredit = (salaryFunc, sal, pf) => {
  return `Your salary credited this month is ₹${Math.round(salaryFunc(sal) / 12 - pf).toLocaleString("en-IN")}`;
};

let salRes = monthlyCredit(annualSal, 350000, 1200);
console.log(salRes);

// .forEach()

const greetingsArray = ["Hello", "Hola", "Namaste", "Bonjour", "Ciao"];

greetingsArray.forEach((iter) => {
  console.log(iter);
});

const randomNumbers = [80, 40, 20, 10];

randomNumbers.forEach(function iterFunc(numIter, index, arr) {
  console.log(arr);
});

const mobDetails = [
  {
    brand: "Apple",
    model: "Iphone",
  },
  {
    brand: "Samsung",
    model: "S25",
  },
  {
    brand: "One Plus",
    model: "Nord CE5",
  },
];
mobDetails.forEach(function (mobItem) {
  console.log(mobItem.brand);
});

// .filter()
const numArr = [36, 41, 2, 99, 6, 4, 66, 1];

// numArr.forEach((num) =>{
//     console.log(num);
// })

let numArrFilter = numArr.filter((num) => num < 10);
console.log(numArrFilter);

numArrFilter = numArr.filter((num) => num > 10);
console.log(numArrFilter);

const mobileApp = [
  {
    appName: "Whatsapp",
    launched: 2009,
    "recent version": "2.26.24.81",
  },
  {
    appName: "Snapchat",
    launched: 2011,
    "recent version": "14.12.0.46",
  },
  {
    appName: "Instagram",
    launched: 2010,
    "recent version": "436.0.0.41",
  },
  {
    appName: "Facebook",
    launched: 2004,
    "recent version": "576.0.0",
  },
  {
    appName: "Telegram",
    launched: 2013,
    "recent version": "12.8.3",
  },
];

let filteringOnLaunch = mobileApp.filter((data) => data.launched < 2010);
console.log(filteringOnLaunch);

// map()
const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let numPlusTen = numberss.map((num) => num + 10);
console.log(numberss);
console.log(numPlusTen);

// map(), filter() chaining

const fewNums = [1, 2, 3, 4, 5];

let fewNumsChaining = fewNums
  .map((num) => num * 10)
  .map((num) => num + 5)
  .filter((num) => num % 3 == 0);

console.log(fewNumsChaining);

// reduce()

const randNums = [5, 7, 2, 1];

let randomSum = randNums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(randomSum);

let diffRandomSum = randNums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100);
console.log(diffRandomSum);

const shoppingCart = [
  {
    item: "T-Shirts",
    price: 899,
  },
  {
    item: "Watch",
    price: 599,
  },
  {
    item: "Power bank",
    price: 2200,
  },
];

let checkOut = shoppingCart.reduce(
  (accumulator, shoppingItems) => accumulator + shoppingItems.price,
  0,
);
console.log(checkOut);

// .findIndex()

const jumbledNums = [420, 365, 961, 85, 123, 66];

let jumbledOp = jumbledNums.findIndex((num) => num < 100);
console.log(jumbledOp);

// .some()
let checkNum = jumbledNums.some((num) => num % 2 == 0);
console.log(checkNum);

/* You're building a simple movie watchlist feature. You have an array of movies a user has saved to watch later, and you want to display them in the console in a readable format — no filtering, no transforming, just looping through and doing something with each item.
Here's your data:
javascriptconst watchlist = [
  { title: "Inception", genre: "Sci-Fi", watched: false },
  { title: "The Dark Knight", genre: "Action", watched: true },
  { title: "Interstellar", genre: "Sci-Fi", watched: false },
  { title: "Parasite", genre: "Thriller", watched: true },
  { title: "Dune", genre: "Sci-Fi", watched: false }
];

Use .forEach() to loop through the watchlist and log each movie's title and genre in this format: "Inception - Sci-Fi"
Modify your .forEach() to also print a status alongside each movie — if watched is true, add "✅ Watched", otherwise add "⏳ Pending". Example output: "Inception - Sci-Fi - ⏳ Pending"
Bonus: Inside the same .forEach(), keep a count of how many movies are still pending (not watched yet) and log the total count after the loop finishes. */

const watchList = [
  { title: "Inception", genre: "Sci-Fi", watched: false },
  { title: "The Dark Knight", genre: "Action", watched: true },
  { title: "Interstellar", genre: "Sci-Fi", watched: false },
  { title: "Parasite", genre: "Thriller", watched: true },
  { title: "Dune", genre: "Sci-Fi", watched: false },
];

let pendigCount = 0

let titleAndFormat = watchList.forEach((movies) => {
  if(movies.watched == true){
      console.log(`${movies.title} - ${movies.genre} ✅ Watched `);
  }
  else{
    console.log(`${movies.title} - ${movies.genre} ⏳ Pending`);
    pendigCount+=1
  }
})

console.log(`No. of movies remaining to watch: ${pendigCount}`);


/* You're working on a basic task manager for a dev team. The team has a list of tasks logged in the system, and you need to pull out specific subsets of tasks depending on what someone wants to view — that's exactly what .filter() is for.
Here's your data:
const tasks = [
  { id: 1, title: "Fix login bug", status: "done", priority: "high" },
  { id: 2, title: "Write unit tests", status: "pending", priority: "medium" },
  { id: 3, title: "Update README", status: "pending", priority: "low" },
  { id: 4, title: "Deploy to staging", status: "done", priority: "high" },
  { id: 5, title: "Code review PR #12", status: "pending", priority: "high" },
  { id: 6, title: "Fix CSS on mobile", status: "done", priority: "medium" }
];

Use .filter() to get all tasks where status is "pending" and log the result.
Use .filter() to get all tasks where priority is "high" and log the result.
Bonus: Chain both conditions together in a single .filter() call — tasks that are both "pending" AND "high" priority. These would be the most urgent ones to tackle.
 */

const tasks = [
  { id: 1, title: "Fix login bug", status: "done", priority: "high" },
  { id: 2, title: "Write unit tests", status: "pending", priority: "medium" },
  { id: 3, title: "Update README", status: "pending", priority: "low" },
  { id: 4, title: "Deploy to staging", status: "done", priority: "high" },
  { id: 5, title: "Code review PR #12", status: "pending", priority: "high" },
  { id: 6, title: "Fix CSS on mobile", status: "done", priority: "medium" }
];

let pendingTask = tasks.filter((task) => task.status == "pending")
console.log(pendingTask);

let highPriority = tasks.filter((task) => task.priority == "high")
console.log(highPriority);

let pendingAndHigh = tasks
                         .filter((task) => task.priority == "high")
                         .filter((task) => task.status == "pending")
                         
console.log(pendingAndHigh);

/* You're building a small feature for a developer portfolio site. You have a list of projects stored as raw data objects, and you need to transform them into different shapes depending on what the UI needs to display — that's exactly the job of .map().
Here's your data:
javascriptconst projects = [
  { title: "weather app", tech: "JavaScript", stars: 12 },
  { title: "portfolio site", tech: "HTML/CSS", stars: 34 },
  { title: "chat bot", tech: "Python", stars: 8 },
  { title: "expense tracker", tech: "React", stars: 21 },
  { title: "url shortener", tech: "Node.js", stars: 5 }
];

Use .map() to return a new array of just the project titles, but with every title converted to Title Case (e.g. "weather app" → "Weather App"). Log the result.
Use .map() to return a new array of strings in this format: "weather app — Built with JavaScript". Log the result.
Use .map() to return a new array of objects where each object has just two properties — title (in Title Case) and a new property popular which is true if the project has more than 10 stars, and false otherwise. */








/* You're building the checkout page for a small e-commerce app. You have a list of items in the user's cart, and you need to calculate a few summary numbers to display in the order summary — tallying up values from a whole list into a single result is exactly what .reduce() is built for.
Here's your data:
javascriptconst cart = [
  { name: "Mechanical Keyboard", price: 80, quantity: 1 },
  { name: "USB Hub", price: 25, quantity: 2 },
  { name: "Mousepad", price: 15, quantity: 3 },
  { name: "Webcam", price: 60, quantity: 1 },
  { name: "LED Desk Lamp", price: 20, quantity: 2 }
];

Use .reduce() to calculate the total price of the entire cart. Keep in mind each item has a price and a quantity, so the cost per item is price × quantity. Log the final total.
Use .reduce() to calculate the total number of items in the cart (sum of all quantities). Log the result.
Use .reduce() to find the most expensive item (by unit price) in the cart and log just that item's object. */