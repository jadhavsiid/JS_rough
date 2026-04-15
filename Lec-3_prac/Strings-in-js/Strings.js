// String Concatenation
let str1 = "Hello"
let str2 = "World"
let concatStr = str1 + " " + str2
console.log(concatStr);

let age = 20
let stmt = "My age is: "
console.log(stmt + age); // not a good practise

// String Interpolation
let score = 80
console.log(`My score in examination is ${score} out of 100`);

let currentAge = 25
console.log(`My Current age is: ${currentAge}`);

// String Methods (Never changes the og string)

let gameName = 'thanos'
console.log(gameName.length);
console.log(gameName.toUpperCase());
// console.log(gameName);
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('n'));

console.log(gameName.substring(1,-3));
console.log(gameName.slice(0,4));
console.log(gameName.slice(0,-4));


let anotherName = "   thanos    "
console.log(anotherName);
console.log(anotherName.trim());


let url = "https://siddhesh.com/Siddhesh%20Jadhav"

console.log(url.replace('%20','-'));
console.log(url.includes('Siddhesh'));

let anotherUrl = "https://globalSearch.com/Search"
console.log(anotherUrl.includes('global'));

let RandomSentence = 'Use Claude, Gemini or Gemini'
console.log(RandomSentence.replace('Gemini', 'ChatGPT'));
console.log(RandomSentence.replace(/Gemini/g, 'ChatGPT'));

let ideTool = 'I Love ANTIGRAVITY'
console.log(ideTool);
console.log(ideTool.replace(/antigravity/i,'VSCode'));