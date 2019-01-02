// console.log("sanity check");

//––––GLOBALS–––––
//init game as player 1's turn
let whosTurn = 1;
let gameOn = true; 
//make an array for each player, and push each new square to the appropriate array
let player1Squares = [];
let player2Squares = [];

let gameResetButton = document.querySelector("#game-reset");

//array of winning combos

const winningCombos = [
    ['A1', 'B1', 'C1'],
    ['A2', 'B2', 'C2'],
    ['A3', 'B3', 'C3'],
    ['A1', 'A2', 'A3'],
    ['B1', 'B2', 'B3'],
    ['C1', 'C2', 'C3'],
    ['A1', 'B2', 'C3'],
    ['C1', 'B2', 'A3'],
]


// 1. set up board ––– CHECK
// 2. user should be able to click on a button
// when the click happens, the square should have 
// that player's mark (X or O)
// 3. If it's X's turn pyt an X in, otherwise, put an O
// 4. In order to accomplish 3 we need to keep track of turns
// After X plays it's O's turn, and so on 
// 5. keep other player from taking a squar 
// 6. See if a player won, if so congratulate them 
// 7. If a player wins stop the game

// squares is an array with 9 objects in it
// each element is an HTML button element
const squares = document.getElementsByClassName('square');
// console.log(squares);

for (let i = 0; i < squares.length; i++){
    // console.log(squares[i]);
    //now that we have the individual squares (squares[i]) we can add an event listener 
    // to each one
    // to add event listener we need:
    //––what to listen to
    //––add method
    //––first arg: what event to listen for
    //––second arg: function to run if event happens
    squares[i].addEventListener('click', function(){
        // console.log(event);
    // console.dir(this);
    if (gameOn){
    // this.innerHTML = "X"; 
        if (this.innerHTML === "-"){
            if (whosTurn === 1){
                this.innerHTML = "X"; // update dom
                whosTurn = 2; // update js 
                // update the dom 
                document.getElementById('message').innerHTML = "It's O's Turn";
                player1Squares.push(this.id);
                checkWin(player1Squares, 1);
            }else{
                this.innerHTML = "O";
                whosTurn = 1;
                document.getElementById('message').innerHTML = "It's X's Turn"
                player2Squares.push(this.id);
                checkWin(player2Squares, 2);
            }
        }else{
            document.getElementById('message').innerHTML = "Sorry, that square is taken."
        }
        moveCounter(squares);
        checkTie(moveCounter);
        // console.log(player1Squares);
        // console.log(player2Squares);
    }
    })
}
function moveCounter(squares){
    let moveCount = 0;
    for (let i = 0; i < squares.length; i++){
        // console.log("check")
        if (squares[i].innerHTML != "-"){
        moveCount++;
        }
    console.log(moveCount);   
    } if (moveCount = 9 && squareCount != winningCombos); 
    document.querySelector(".button").style.display = "inline-flex";
    document.querySelector('#message').innerHTML = "Tie Game. Hit Reset to Play Again.";
    gameOn = false;
}

function checkWin(playerSquares, whoMarked){ 
    // console.log("Checking to see who won...");
    // console.log(playerSquares);
    // console.log(whoMarked);
    //we know who went and what squares they have (playerSquares)
    //outer loop – check each winning combo
    for (let i = 0; i < winningCombos.length; i++){
        let squareCount = 0;
        //inner loop – check each square inside this winning combo
        //winningCombos[i] = the winningCombo we are on (3 squares)
        for (let j = 0; j < winningCombos[i].length; j++){
            //winningCombos[i][j] = the square in winningCombo
            const winningSquare = winningCombos[i][j];
            if(playerSquares.includes(winningSquare)){
                squareCount++;
            }
        } if(squareCount === 3){
            // console.log("Player Won!");
            // console.log(winningCombos[i]);
            endGame(winningCombos[i], whoMarked);
        }
    }
}

function endGame(winningCombo, whoWon){
    document.querySelector('#message').innerHTML = `Congrats to player ${whoWon}`
    for (let i=0; i < winningCombo.length; i++){
        let winningSquare = winningCombo[i];
        let squareElem = document.getElementById(winningSquare); 
        // console.dir(squareElem);
        squareElem.className += " winning-square";
        document.querySelector(".button").style.display = "inline-flex";
    }   gameOn = false;
}

document.querySelector(".button").addEventListener('click', gameReset);

function gameReset(){
    gameOn = true;
    player1Squares.length = 0;
    player2Squares.length = 0;
    let squares = document.querySelectorAll('.square');
    for (let i = 0; i < squares.length; i++){
        squares[i].textContent = "-";
        squares[i].classList.remove("winning-square");
    }
    document.querySelector('#message').innerHTML = "It's X's Turn";
    document.querySelector(".button").style.display = "none";
    whosTurn = 1;
}

function checkTie(moveCounter){
    if (moveCount = 9 && squareCount != winningCombos); 
        document.querySelector(".button").style.display = "inline-flex";
        document.querySelector('#message').innerHTML = "Tie Game. Hit Reset to Play Again.";
        gameOn = false;
}