//Step 1: import packages
//prompt-sync package to handle user inputs
const prompt = require("prompt-sync")();



//Step 2 declare game variables
// variables: game board; player; state of the game
// as it is a console game blank spaces represent the board in an array with 9 positions
let gameBoard = [" "," "," "," "," "," "," "," "," "];

// name for the first player to track turns
let currentPlayer = "❌";

//set game state so program knows when to stop and end.
//game keeps going until there is a win / draw 
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
