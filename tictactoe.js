//Step 1: import packages
// prompt-sync package to handle user inputs
const prompt = require("prompt-sync")();



//Step 2 declare game variables
// variables: game board; player; state of the game
// as it is a console game blank spaces represent the board in an array with 9 positions
let gameBoard = [" "," "," "," "," "," "," "," "," "];

// name for the first player to track turns
let currentPlayer = "❌";

// set game state so program knows when to stop and end.
// game keeps going until there is a win / draw 
let gameActive = true;



//Step 3: Printing the board
// to display the current state of the game board 
// as array will alter when the game is played, 
// placeholders are needed for the new data
// done through string interpolation using ${}
function printBoard(){
    console.log(`
        ${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]} 
        ----------
        ${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]} 
        ----------
        ${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]} 
        `)
}
// above is a multi line string to set values of array elements to 
// corresponding positions for easy mainpulation of cells



//Step 4: Making Moves
// players cannot take occupied cells - if/else statements allow to easily check 
// a blank cell is unoccupied, prompting to try again if not
function handleMove(position){
    if (gameBoard[position]=== " ") {
        gameBoard[position] = currentPlayer;
    } else {
        console.log("Cell already taken, choose another one.");
        return false;
    }


    //Step 5.1: checking win or loss
    // an if statement checks if a player has won
    if (checkWin()){
        printBoard();
        console.log(`Player ${currentPlayer} wins!`);
        gameActive = false;
        return true;
    }


    //Step 5.2: checking for draws
    // if all cells are filled without winning it is a draw
    // using arrow function syntax
    if(gameBoard.every((cell) => cell!==" ")){
        printBoard();
        console.log("It's a draw!");
        gameActive = false;
        return true;
    }


    // Step 5.3: Player Turns
    // after one player's move, the next player needs to play
    // this can be done by checking whether the currentPlayer ="❌"
    // and swapping it out using a ternary operator
    currentPlayer = currentPlayer=== "❌" ? "⭕️" : "❌";
    return true;
}

//Step 6: creating the checkWin function 
// conditions are an array of all possible winnign combinations
function checkWin(){
    // the winning conditions array respresents indexes of the winning lines
    const conditions = [
        [0,1,2], // top row
        [3,4,5], // middle row
        [6,7,8], // bottom row
        [0,3,6], // left column
        [1,4,7], // middle column
        [2,5,8], // right column
        [0,4,8], // main diagonal
        [2,4,6], // opposite diagonal
    ];
    // here a,b,c are temp variable names to represent the indexes of the winning line
    // they map to whichever the current winning condition array contains
    // .some() loops through each winning condition and returns true when one matches, and player wins
    return conditions.some(condition => {
        const [a, b, c] = condition;
        return gameBoard[a] === currentPlayer &&
               gameBoard[b] === currentPlayer &&
               gameBoard[c] === currentPlayer;
    });
}

//Step 7: creating the game loop
// Game continues till a win or draw occurs
// prompts the player to enter the position which will be parsed as an integer
// gameActive tracks whether game is ongoing and if so prints the board
// input is validated to see if user enters a valid input between 0 and 8
while (gameActive){
    printBoard();
    const position =prompt(`Player ${currentPlayer}, enter your move (0-8): `);

    if (position >= 0 && position <=8) {
        handleMove(parseInt(position));
    } else {
        console.log("Invalid position, enter a number between 0 and 8.");
    }
    
}