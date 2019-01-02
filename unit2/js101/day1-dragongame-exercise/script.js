// The Dragon Game:

// 1. Put the dragon on the screen.

// 2. Give the user instructions that they must fight or flee and a button for each.

// 3. Instruct the user that if they choose to fight, they must roll a 9 or higher or 
// they will be burnt to a crisp!

// 4. If they flee, change the image of the dragon to the coward fleeing and mock 
// the user for cowardice!

// 5. If they choose to fight, they must roll the dice. Update the dice to reflect 
// their roll. Display on the screen what they rolled As well as the outcome.

// Bonus

// 6. Using a while loop, keep the game going as long as each character has hit points. Start the dragon at 20 and the hero at 20. Add a roll for the dragon. Subtract the hit points for each after the "fight" (roll). The while loop should terminate when one member of the fight drops below 0.

// Super Bonus

// 7. Create other options within the game. For instance,

// 7a. Allow the user one chance in the while loop to "attack with bravery" which will increase the damage done by 4, but will increase damage by 4. 

// 7b. Allow the user one chance to drink a health potion and increase their health back to 20.

// 7c. Allow the dragon to randomly get distracted by how shiny the hero's armor is and forget to attack.

// 7d. As the hero is more wounded, decreases his rolls so he does less damage.

// BE CREATIVE... THIS IS A CHANCE TO LEARN JAVASCRIPT!

var prompts = document.getElementById("game-prompts");
prompts.innerHTML += "<h2>Welcome to Dragon Game! Will you <strong>fight</strong> or <strong>flee</strong>?</h2>"

var dragon = document.getElementById("dragon-div");
dragon.innerHTML += `
    <img src="./dragon-assets/dragon_2.png"/>
`
var game = document.getElementById("game-buttons"); 

var button1 = document.getElementById("fight-button").addEventListener("click", chooseFight);
var button2 = document.getElementById("flight-button").addEventListener("click", chooseFlee);

var diceBoard = document.getElementById("dice-board");

var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");

var playerHealth = 10;
var dragonHealth = 10;

var gameOn;

function chooseFight(){
    prompts.innerHTML = "<h2>Excellent! You must roll a 9 or higher to defeat the dragon. You lose, you burn.</h2>";
    game.innerHTML = "<button>Roll Dice</button>";
    gameOn = true;
}

function chooseFlee(){
    prompts.innerHTML = "<h2>Disgraceful! Bye for now, coward!</h2>";
    gameOn = false; 
}

// while (gameOn = true) {
//     if 
// }
