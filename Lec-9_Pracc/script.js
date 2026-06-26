"use strict"
// alert('Connected')

//  <!-- Example 1: Accessing DOM Elements -->
let changeBtn = document.getElementById('changeTextButton').addEventListener('click', function () {
    let changedPara = document.getElementById('myParagraph');
    console.log(changedPara);
    changedPara.textContent = 'Paragraph is changed';
});
console.log(changeBtn);

// <!-- Example 2: Traversing the DOM -->

let highlightBtn = document.getElementById('highlightFirstCity').addEventListener('click',function(){
    let cityList = document.getElementById('citiesList')
    console.log(cityList);
    cityList.firstElementChild.classList.add("highlight")
})

// <!-- Example 3: Manipulating DOM Elements -->
