// console.log("sanity check"); 
const freshDeck = createDeck();
let theDeck = freshDeck.slice();
let playerHand = [];
let dealerHand = [];
gameOn = true;

//blackjack deal function
$('.deal-button').click(()=>{
    gameOn = true;
    // console.log("user clicked deal button");
    //need deck
    theDeck = freshDeck.slice();
    //now we have a deck, so we need to shuffle it
    shuffleDeck(theDeck);
    let topCard = theDeck.shift(); //shift pulls the first element off of the array and returns it 
    playerHand.push(topCard); //put top card in player hand array
    placeCard('player', 1, playerHand[0]);
    topCard = theDeck.shift();
    dealerHand.push(topCard); //put next card in dealer hand array
    placeCard('dealer', 1, dealerHand[0]);
    topCard = theDeck.shift();
    playerHand.push(topCard);
    placeCard('player', 2, playerHand[1]);
    topCard = theDeck.shift();
    dealerHand.push(topCard);
    placeCard('dealer', 2, dealerHand[1]);
    calculateTotal(playerHand,'player');
    calculateTotal(dealerHand,'dealer');
    document.querySelector('.deal-button').style.display = "none";
    document.querySelector('.hit-button').style.display = "inline-block";
    document.querySelector('.stand-button').style.display = "inline-block";
    document.querySelector('.reset-button').style.display = "inline-block";


})

$('.hit-button').click(()=>{
    const topCard = theDeck.shift();
    playerHand.push(topCard);
    placeCard('player', playerHand.length, topCard);
    calculateTotal(playerHand, 'player');
})

$('.stand-button').click(()=>{
    let dealersTotal = calculateTotal(dealerHand, 'dealer');
    while (dealersTotal < 17){
        const topCard = theDeck.shift();
        dealerHand.push(topCard);
        placeCard('dealer', dealerHand.length, topCard);
        dealersTotal = calculateTotal(dealerHand, 'dealer');
    }
    checkWin();
})

function checkWin(){
    const playerTotal = calculateTotal(playerHand, 'player');
    const dealersTotal = calculateTotal(dealerHand, 'dealer');
    if (playerTotal > 21 && dealersTotal < 21){
        gameOn = false;
        playerHand = [];
        dealerHand = [];
        return console.log("Player Loses");
    } else if (dealersTotal > 21 && playerHand < 21){
        gameOn = false;
        playerHand = [];
        dealerHand = [];
        return console.log("Dealer Loses");
    } else if (dealersTotal > 21 && playerTotal > 21){
        gameOn = false;
        playerHand = [];
        dealerHand = [];
        return console.log("Dealer and Player Both Lose");    
    } else if (dealersTotal === playerTotal){
        gameOn = false;
        playerHand = [];
        dealerHand = [];
        return console.log("Tie Game");  
    } else if (playerTotal <= 21 && playerTotal > dealersTotal){
        gameOn = false;
        playerHand = [];
        dealerHand = [];
        return console.log("Player Wins");
    } else if (dealersTotal <= 21 && dealersTotal > playerHand){
        gameOn = false;
        playerHand = [];
        dealerHand = [];
        return console.log("Dealer Wins")
    }
}

function calculateTotal(hand, who){
    //purpose:
    //--find number and return it
    //--update the DOM with the number for correct hand
    let handTotal = 0;
    //init ace funtion
    let hasAce = false; 
    let numAces = 0;
    //loop through hand
    hand.forEach((card, i)=>{
        // console.log(card);
        //copy everything in the string, except or the last char
        let thisCardsValue = card.slice(0, -1);
        if(thisCardsValue > 10){
            thisCardsValue = 10; 
        }else if(thisCardsValue == 1){
            numAces ++; 
            hasAce = true;
            // thisCardsValue = 11;
        }
        handTotal += Number(thisCardsValue);
    })
    if (hasAce & handTotal <= 10){
        handTotal += 10; 
    }
    // console.log(handTotal);
    const classSelector = `.${who}-total`;
    $(classSelector).html(handTotal);
    return handTotal
}

function placeCard(who, where, what){
    // who = option 1: 'player', option 2: 'dealer'
    // where = option 1–6
    // what = 1h-13h, 1s-13s, 1d-13d, 1c-13c
    const classSelector = `.${who}-cards .card-${where}`;
    $(classSelector).html(`<img src="./cards/${what}.png"/>`)
}

function createDeck(){
    let newDeck=[]; //local variable--only accessible by this function 
    // card = suit letter + value
    const suits = ['h','s','d','c'];
    //outer loop for each suit
    // for (let s = 0; s < suits.length; s++){
    // }

    //alt loop method: forEach
    //forEach loop gets 2 args:
    //--1.what to call this element in loop
    //--2.index loop is on
    suits.forEach((s, index)=>{
        //inner loop for card value
        for (let c = 1; c <= 13; c++){
            newDeck.push(`${c}${s}`)
        }
    })
    // console.log(newDeck);
    return newDeck;
}

function shuffleDeck(aDeckToBeShuffled){
    for(let i = 0; i < 100000; i++){
        let rand1 = Math.floor(Math.random() * 52);
        let rand2 = Math.floor(Math.random() * 52);
        let card1Defender = aDeckToBeShuffled[rand1];
        aDeckToBeShuffled[rand1] = aDeckToBeShuffled[rand2];
        aDeckToBeShuffled[rand2] = card1Defender;
    }
    // console.log(aDeckToBeShuffled)
}