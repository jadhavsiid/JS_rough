"use strict"
// getElementById
console.log(document.getElementById('title'));

// console.log(document.getElementById('title').id);

console.log(document.getElementById('title').className);

// getAttribute
console.log(document.getElementById('title').getAttribute('class'));

// setAttribute
document.getElementById('title').setAttribute('style','color: red');
// overwrite
document.getElementById('title').setAttribute('class','test');

document.getElementById('title').setAttribute('class','test heading');

// apply styles using DOM
// let para = document.getElementById('para')
// para.style.backgroundColor = 'hotpink'
// para.style.padding = '1rem'
// para.style.borderRadius = '10px'
// para.style.display = 'inline'


// adding contents in HTML
let mainHead = document.getElementById('title')
console.log(mainHead);

// textContent
console.log(mainHead.textContent);
// innerText
console.log(mainHead.innerText);
// innerHTML
console.log(mainHead.innerHTML);

// getElementsByClassName
console.log(document.getElementsByClassName('heading'));

// document.querySelector
console.log(document.querySelector('h2'));
console.log(document.querySelector('#title'));
console.log(document.querySelector('.heading'));
// para.innerText = 'Hello from DOM'

// document.querySelectorAll

const tempNodeList = document.querySelectorAll('li');

console.log(tempNodeList);

tempNodeList[0].style.color = 'purple'
tempNodeList[2].style.color = 'blue'

// in nodeList we can use only forEach() not map and other iterators since nodelist is not an array
tempNodeList.forEach((item) => item.style.backgroundColor = 'beige')


const tempClassCollection = document.getElementsByClassName('orange')

console.log(tempClassCollection);

const collectionArr = Array.from(tempClassCollection)

console.log(collectionArr);

collectionArr.map((item) => item.innerText = 'Hero')