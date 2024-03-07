// script.js for choose-wisely

let pageNumber=1;

const bigTitleArray=[`Choose Your Own Fate`,``];
const smallTitleArray=[`By Gary B. Rich`,`Your Story Begins`];
const textArray=[`Play now?`,`It is an early summer evening, just past nightfall.
Stars fill the sky, as a small crescent moon offers little light.\n
You are driving through a remote area with only the radio to keep you company.
An unexpected flat tire and no spare leaves you stranded in the middle of nowhere.\n
You try your cell phone, but there's no service.\n
By your estimation the next gas station is about 10 miles up the road.\n
Will you wait in the car and hope someone comes along, or will you start walking?`];
const button1Array=[`Play`,`Wait`];
const button2Array=[`Play`,`Walk`];

const bigTitle = document.getElementById("bigTitle");
bigTitle.innerText = bigTitleArray[pageNumber];

const smallTitle = document.getElementById("smallTitle");
smallTitle.innerText = smallTitleArray[pageNumber];

const text = document.getElementById("text");
text.innerText = textArray[pageNumber];

const button1 = document.getElementById("button1");
button1.addEventListener("click", ()=> {
    console.log("clicked button1");
});
button1.innerText = button1Array[pageNumber];

const button2 = document.getElementById("button2");
button2.addEventListener("click", ()=> {
    console.log("clicked button2");
});
button2.innerText = button2Array[pageNumber];


console.log(bigTitleArray[pageNumber]);
console.log(smallTitleArray[pageNumber]);
console.log(textArray[pageNumber]);
console.log(button1Array[pageNumber]);
console.log(button2Array[pageNumber]);