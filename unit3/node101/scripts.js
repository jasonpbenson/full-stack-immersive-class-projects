// add a ready listener to the whole DOM

$(document).ready(()=>{
    console.log("sanity check")
    
    $("button").click(function(){
        console.log($(this));
        let gridSize = $(this).attr("diff");
        console.log(gridSize);
        let cards = [];
        //monsters start at 1 so start i at 1
        //every time through we push 2 mosnters
        //bc we need 2 to play the game
        for (let i = 1; i <= (gridSize/2); i++){
            let monsterNumber = i;
            if (i < 10){
                monsterNumber = "0"+i
            }
            cards.push(`<img src="./images/monsters-${monsterNumber}.png"/>`)
            cards.push(`<img src="./images/monsters-${monsterNumber}.png"/>`)
        }
        cards = shuffleDeck(cards);
        // console.log(cards);
        let memoryHTML = "";
        cards.forEach((card)=>{
            memoryHTML += `
                <div class="card col-sm-3">
                    <div class="card-holder">
                        <div class="card-front">${card}</div>
                        <div class="card-back"></div>
                    </div>
                </div>
            `
        })
        console.log(memoryHTML);
        $(".mem-game").html(memoryHTML);
        $(".card-holder").click(function(){
            $(this).addClass("flip");
            let cardsUp = $(".flip");
            // if cardsUp has 2 customElements, then this is the second card
            if (cardsUp.length == 2){
                const card1 = cardsUp[0];
                const card2 = cardsUp[1];
                if (card1.innerHTML == card2.innerHTML){
                    //cards match!
                    //remove flip
                    cardsUp.removeClass("flip"); 
                    cardsUp.addClass("matched");
                }else{
                    //js will flip card too quicly, so we need to set a timeout
                    setTimeout(()=>{
                        cardsUp.removeClass("flip");
                    }, 2000);
                }
            }else{
                //do nothing
            }
        })
    });
});

function shuffleDeck(aDeckToBeShuffled){
for(let i = 0; i < 100000; i++){
    let rand1 = Math.floor(Math.random() * aDeckToBeShuffled.length);
    let rand2 = Math.floor(Math.random() * aDeckToBeShuffled.length);
    let card1Defender = aDeckToBeShuffled[rand1];
    aDeckToBeShuffled[rand1] = aDeckToBeShuffled[rand2];
    aDeckToBeShuffled[rand2] = card1Defender;
    }
    return aDeckToBeShuffled;
}