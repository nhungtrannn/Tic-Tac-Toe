/*----- constants -----*/ 
const 




/*----- app's state (variables) -----*/ 
let numberOfPlayers, currentPlayer, move, points1, points2, winner, size;

// move variable will keep track of the current iteration that we are in
// size is the tic tac toe board



/*----- cached element references -----*/ 



/*----- event listeners -----*/ 




/*----- functions -----*/

function drawBoard() {
    var parent = document.getElementById("game");
    var counter = 1;

    for (var i = 0; i < 3; i++)
    {
        var row = document.createElement("tr");

        for (var x = 0; x < size; x++)
    {
        var col = document.createElement("td");
        col.innerHTML = counter;

        row.appendChild(col);
    } 
    parent.appendChild(row);
    }
}