// script.js for choose-wisely



let pageNumber = 0;
let x = pageNumber;

// initialize variables
const bigTitle = document.getElementById("bigTitle");
const smallTitle = document.getElementById("smallTitle");
const text = document.getElementById("text");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

// arrays for each div text
const bigTitleArray=[`Choose Your Own Fate`,`One`,`Two`,`Three`,`Four`,`Five`,`Six`,`Seven`];
const smallTitleArray=[`By Gary B. Rich`,`Your Story Begins`,`Staying put`,`Foot it`,`Pathological`,
`Cabin in the Woods`,`Knock knock who's there`,`Nope Out`];
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
Do you want to stay on the main road, or do you want to see if the path leads to someone who can help?`,
`Leaving the main road, you start walking down the dirt path into the deep woods.
Trees have overgrown the sides, and branches scratch your face and arms in the dark.\n
As you continue on the winding path, the shape of a small building begins to form.
You realize the flickering light is coming from the window of a small cabin.\n
Do you want to approach the cabin, or do you decide to quietly go back to the main road?`,
`You quietly walk up to the cabin until you're standing just outside the door.
The only sounds you hear are the crickets chirping.  Other than that, everything seems quiet.\n
The immediate area around the cabin gives the impression that someone is currently living here.
Around the side of the cabin, light is still flickering in the only window.\n
Do you want to try looking in the window, or do you want to knock on the door?`,
`You loudly knock on the door several times, and wait.\n
You still don't hear anything, and nobody answers.\n\n
Do you want to try opening the door, or would you rather just go back to the main road?`,
`Nobody seems to be home, so you turn around and start heading back to the main road.\n
About 50 yards from the cabin you step in a bear trap that you didn't see in the dim moonlight.\n
You try to free yourself, but the trap is firmly lodged in your broken leg.<br>
\n
Nobody finds you in time.`];
const button1Array=[`Play`,`Wait`,`Wait`,`Road`, `Cabin`,`Window`,`Door`,`Play`];
const button2Array=[`Play`,`Walk`,`Walk`,`Path`, `Road`,`Door`,`Road`,`Again`];

// render all text in the dom at pageload
updatePage();

// add functions to buttons

// BUTTON 1
button1.addEventListener("click", ()=> {
    console.log("clicked button1");
    switch(pageNumber) {
        case 0:
            pageNumber=1;
            break;
        case 1:
            pageNumber=2;
            break;
        case 2:
            pageNumber=undefined;
            break;
        case 3:
            pageNumber=undefined;
            break;
        case 4:
            pageNumber=5;
            break;
    }

    //button clicks one page down from current page ***
 /*    x--;
    if(x<0){
        x=1;
    }
    pageNumber=x; */
    //************************************************** 
    
    updatePage();
});


// BUTTON 2
button2.addEventListener("click", ()=> {
    console.log("clicked button2");
    switch(pageNumber) {
        case 0:
            pageNumber=1;
            break;
        case 1:
            pageNumber=3;
            break;
        case 2:
            pageNumber=3;
            break;
        case 3:
            pageNumber=4;
            break;
        case 4:
            pageNumber=undefined;
        case 5:
            pageNumber=6;
            break;
        case 6:
            pageNumber=7;
    }
    
    //button clicks one page up from current page ****
   /*  x++;
    pageNumber=x; */
    //************************************************

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
   ;
}

// console.log each array for current page
function currentArrayLog() {
    console.clear();
    console.log(`Page num: ${pageNumber}`)
    console.log(`Big: ${bigTitleArray[pageNumber]}`);
    console.log(`Small: ${smallTitleArray[pageNumber]}`);
    if(textArray[pageNumber]===undefined) {
        console.log("Text: undefined")
    } else {
        let shorterText=textArray[pageNumber].slice(0,25);
        console.log(`Text: ${shorterText}`);
    }
    console.log(`One: ${button1Array[pageNumber]}`);
    console.log(`Two: ${button2Array[pageNumber]}`);   
};