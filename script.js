// script.js for choose-wisely



let pageNumber = 4;
let x = pageNumber;

// initialize variables
const bigTitle = document.getElementById("bigTitle");
const smallTitle = document.getElementById("smallTitle");
const text = document.getElementById("text");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

// arrays for each div text
const bigTitleArray=[`Choose Your Own Fate`,`1`,`2`,`3`];
const smallTitleArray=[`By Gary B. Rich`,`Your Story Begins`,`Staying put`,`Foot it`];
const textArray=[`Play now?`,`It is an early summer evening, just past nightfall.
Stars fill the sky, as a small crescent moon offers little light.\n
You are driving through a remote area with only the radio to keep you company.
An unexpected flat tire and no spare leaves you stranded in the middle of nowhere.\n
You try your cell phone, but there's no service.\n
By your estimation the next gas station is about 10 miles up the road.\n
Will you wait in the car and hope someone comes along, or will you start walking?`,
`You decide to wait in the car and hope someone comes along.\n
90 minutes pass, and not one single car approaches.\n
You check your phone again, and there's still no service.
Half of the battery life has already been drained since you broke down.
(Searching for a signal always causes it to die quickly.)
Deciding to save the battery, you power your phone off.\n
Another 30 minutes pass.  Do you want to keep waiting?`,`You lock the car and start walking down the road in the dark.
Both sides are lined with dense forest.\n
After what feels like about an hour, you come across a dirt path leading into the woods.\n
You can't see where the path leads, but you notice a distant light flickering in that direction.\n
Do you want to stay on the main road, or do you want to see if the path leads to someone who can help?`];
const button1Array=[`Play`,`Wait`,`Wait`,`Road`];
const button2Array=[`Play`,`Walk`,`Walk`,`Path`];

// render all text in the dom at pageload
updatePage();

// add functions to buttons
button1.addEventListener("click", ()=> {
    console.log("clicked button1");
    x++;
    pageNumber=x;
    //pageNumber++;
    updatePage();
});
button2.addEventListener("click", ()=> {
    console.log("clicked button2");
    //pageNumber=x;
    updatePage();
});

// changes all text in the dom to pageNumber
function updatePage() {
    /* filter bigTitle for only page 0 
    if(pageNumber===0) {
        bigTitle.innerText=bigTitleArray[0];
    } else {
        bigTitle.innerText=bigTitleArray[1];
    } */
    bigTitle.innerText = bigTitleArray[pageNumber];
    smallTitle.innerText = smallTitleArray[pageNumber];
    text.innerText = textArray[pageNumber];
    button1.innerText = button1Array[pageNumber];
    button2.innerText = button2Array[pageNumber];
    window.scrollTo(0,0);
    currentArrayLog();
}

// console.log each array for current page
function currentArrayLog() {
    console.log(bigTitleArray[pageNumber]);
    console.log(smallTitleArray[pageNumber]);
    console.log(textArray[pageNumber]);
    console.log(button1Array[pageNumber]);
    console.log(button2Array[pageNumber]);
};