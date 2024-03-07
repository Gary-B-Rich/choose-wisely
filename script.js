// script.js for choose-wisely

let pageNumber=0;

const bigTitleArray=[`Choose Your Own Fate`];
const smallTitleArray=[`By Gary B. Rich`];
const textArray=[`Play Now?`];
const button1Array=[`Play`];
const button2Array=[`Play`];

const button1 = document.getElementById("button1");
button1.addEventListener("click", ()=> {
    console.log("clicked button1");
});

const button2 = document.getElementById("button2");
button2.addEventListener("click", ()=> {
    console.log("clicked button2");
});

let x=0;
console.log(bigTitleArray[x]);
console.log(smallTitleArray[x]);
console.log(textArray[x]);
console.log(button1Array[x]);
console.log(button2Array[x]);