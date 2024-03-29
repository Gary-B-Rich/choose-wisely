// script.js for choose-wisely


// initialize variables
let pageNumber=0;
let waiting=0;
const bigTitle = document.getElementById("bigTitle");
const smallTitle = document.getElementById("smallTitle");
const text = document.getElementById("text");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

// arrays for each div text
const bigTitleArray=[`Choose Your Own Fate`,`One`,`Two`,`Three`,`Four`,`Five`,`Six`,`Seven`,`Eight`,
`Nine`,`Ten`,`Eleven`,`Twelve`,`Thirteen`,`Fourteen`,`Fifteen`,`Sixteen`];

const smallTitleArray=[`By Gary B. Rich`,`Your Story Begins`,`Staying put`,`Foot it`,`Pathological`,
`Cabin in the Woods`,`Knock knock who's there`,`Nope Out`,`Unlocked`,`Peek a Boo`,`Recue Me`,`Ready Set GO`,
`Yackity Yack`,`High Spirits`,`Don't Knock It`,`Just You Wait`,`Road to Ruin`];

const textArray=[`Play now?`,`It is an early summer evening, just past nightfall.  \
Stars fill the sky, as a small crescent moon offers little light.\n
You are driving through a remote area with only the radio to keep you company.  \
An unexpected flat tire and no spare leaves you stranded in the middle of nowhere.\n
You try your cell phone, but there's no service.\n
By your estimation the next gas station is about 10 miles up the road.\n
Will you wait in the car and hope someone comes along, or will you start walking?`,//end
`You decide to wait in the car and hope someone comes along.
90 minutes pass, and not one single car approaches.\n
You check your phone again, and there's still no service.\n
Another 30 minutes pass.  Do you want to keep waiting?`,//end
`You lock the car and start walking down the road in the dark.  \
Both sides are lined with dense forest.\n
After what feels like about an hour, you come across a dirt path leading into the woods.\n
You can't see where the path leads, but you notice a distant light flickering in that direction.\n
Do you want to stay on the main road, or do you want to see if the path leads to someone who can help?`,//end
`Leaving the main road, you start walking down the dirt path into the deep woods.
Trees have overgrown the sides, and branches scratch your face and arms in the dark.\n
As you continue on the winding path, the shape of a small building begins to form.
You realize the flickering light is coming from the window of a small cabin.\n
Do you want to approach the cabin, or do you decide to quietly go back to the main road?`,//end
`You quietly walk up to the cabin until you're standing just outside the door.
The only sounds you hear are the crickets chirping.  Other than that, everything seems quiet.\n
The immediate area around the cabin gives the impression that someone is currently living here.
Around the side of the cabin, light is still flickering in the only window.\n
Do you want to try looking in the window, or do you want to knock on the door?`,//end
`You loudly knock on the door several times, and wait.\n
You still don't hear anything, and nobody answers.\n\n
Do you want to try opening the door, or would you rather just go back to the main road?`,//end
`Nobody seems to be home, so you turn around and start heading back to the main road.\n
About 50 yards from the cabin you step in a bear trap that you didn't see in the dim moonlight.\n
You try to free yourself, but the trap is firmly lodged in your broken leg.\n
Nobody finds you in time.`,//end
`The door isn't locked and opens easily.  You hesitantly walk inside.\n
The flickering light is coming from a burning oil lamp.  Other than the
lamp, there doesn't appear to be any signs of anyone around.  But why would
someone light a lamp, and then leave?  Strange.`,//end
`You decide to creep up to the window, and take a look inside.\n
There's a large person - who would best be described as a mountain man
sitting at a makeshift table.  Sitting on the table are several pistols,
and the man appears to be cleaning a shotgun.  He suddenly notices you,
quickly swaps the shotgun for two of the pistols, and runs in the direction of the door.\n
Do you want to try to reason with him, or run for it?`,//end
`You decide to wait in the car and hope that somebody shows up.
After about 45 minutes you notice another vehicle's headlights in your rear view mirror.
As luck would have it, the vehicle turns out to be a police officer.\n
The officer radios for a tow truck, and after about another hour you're back in civization.`,//end
`You try to make a run for it, but not even the fastest Olymplic sprinter can outrun a bullet.`,//end
`He turns out to be a friendly fellow who is more than happy to help you get your flat tire repaired.  
He even has a spare that fits your vehicle.  
\nAfter only 20 minutes from looking in the window, \
your tire is changed and you are happily on your way.`,//end
`Headlights suddenly appear far up the road behind you.
After a minute or two, an old pick up truck pulls up and rolls to a stop.
The driver offers you a ride to the gas station, but he seems extremely intoxicated.\n
Do you take him up on his offer, or do you decline?`,//end
`You wait in the car for a little while, when suddenly out of nowhere somebody knocks on the window.\n  
Startled, you reluctatly roll the window down.  The stranger seems confused, and asks if he can get a ride.  \
You inform him about the flat tire, and he seems even more confused.  He then gets angry, produces a pistol, \
and shoots you dead.  \n
Your body is found the next morning.`,//end
`You continue to wait in the car.  You do nothing else but wait in the car.\n
In fact, you wait in the car for so long that you eventually get bored and die.`,//end
`You decide to 'nope out', and continue down the main road.  
After a while you check your phone.  It's been another another, and there's still no reception.  \
You notice the battery has lost a fair amount of charge.\n
Putting the phone away you suddenly notice that there's a house in the distace.  \
It was hard to see, because there isn't a single light on anywhere.  \
Either everyone is asleep, or nobody is home.\n
Do you want to try ringing the doorbell, or just continue walking on the road?`];

const button1Array=[`Play`,`Wait`,`Wait`,`Road`, `Cabin`,`Look`,`Door`,`Play`,`*8*`,`Talk`,`Play`,`Play`,`Play`,`Ride`,`Play`,`Play`,`Bell`];

const button2Array=[`Play`,`Walk`,`Walk`,`Path`, `Road`,`Door`,`Road`,`Again`,`*8*`,`Run!`,`Again`,`Again`,`Again`,`Pass`,`Again`,`Again`,`Walk`];

// render all text in the dom at pageload

pageNumber=0;
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
            pageNumber=specialEvent();
            break;
        case 2:
            waiting++;
            pageNumber=specialEvent();
            break;
        case 3:
            pageNumber=16;
            break;
        case 4:
            pageNumber=5;
            break;
        case 5:
            pageNumber=9;
            break;
        case 6:
            pageNumber=8;
            break;
        case 7:
            pageNumber=1;
            break;
        case 8:
            pageNumber=undefined;
            break;
        case 9:
            pageNumber=12;
            break;
        case 10:
            pageNumber=1;
            break;
        case 11:
            pageNumber=1;
            break;
        case 12:
            pageNumber=1;
            break;
        case 13:
            pageNumber=undefined;
            break;
        case 14:
            pageNumber=1;
            break;
        case 15:
            waiting--;
            pageNumber=1;
            break;

    }
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
            pageNumber=16;
            break;
        case 5:
            pageNumber=6;
            break;
        case 6:
            pageNumber=7;
            break;
        case 7:
            pageNumber=1;
            break;
        case 8:
            pageNumber=undefined;
            break;
        case 9:
            pageNumber=11;
            break;
        case 10:
            pageNumber=1;
            break;
        case 11:
            pageNumber=1;
            break;
        case 12:
            pageNumber=1;
            break;
        case 13:
            pageNumber=undefined;
            break;
        case 14:
            pageNumber=1;
            break;
        case 15:
            waiting--;
            pageNumber=1;
            break;

    }
    updatePage();
});


// changes all text in the dom
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
   
};

// function for Special roll
function specialEvent() {
    random = Math.floor(Math.random()*3) + 1
    //random=2;
    switch(random) {
        case 1:
            return 10;
            break;
        case 2:
            if(waiting<1){
                return 2;
                break;
            }
            else {
                return 15;
                break;
            };
        case 3:
            return 14;
            break;
    
    };
    return 0;
} 

// console.log each array for current page
function currentArrayLog() {
    //console.clear();
    console.log(`Page num: ${pageNumber}`)
    /*console.log(`Big: ${bigTitleArray[pageNumber]}`);
    console.log(`Small: ${smallTitleArray[pageNumber]}`);
    if(textArray[pageNumber]===undefined) {
        console.log("Text: undefined")
    } else {
        let shorterText=textArray[pageNumber].slice(0,25);
        console.log(`Text: ${shorterText}`);
    }
    console.log(`One: ${button1Array[pageNumber]}`);
    console.log(`Two: ${button2Array[pageNumber]}`);
    */  
};