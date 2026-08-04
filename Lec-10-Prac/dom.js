"use strict"


let heading1 = document.getElementById('head')
console.log(heading1);

console.log(heading1.getAttribute('class'));

heading1.setAttribute('class','new imp')
console.log(heading1.getAttribute('class'));
