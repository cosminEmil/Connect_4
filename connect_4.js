let container = document.getElementById("container");
let elements = container.getElementsByTagName("div");
let players_turn = 0;
let matrix = [];

function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (let i = 0; i < rows; ++i) {
        matrix[i] = [];
        for (let j = 0; j < cols; ++j) {
            let cell = document.createElement("div");
            cell.addEventListener("click", function() { //add color to the cell + winner check
                if (players_turn % 2 == 0) {
                    matrix[i][j] = "red";
                    cell.style.backgroundColor = "red";
                } else if (players_turn % 2) {
                    matrix[i][j] = "yellow";
                    cell.style.backgroundColor = "yellow";
                }
                ++players_turn;
                if (players_turn == 42) {
                    alert("Draw");
                    window.location.reload();
                    return 0;
                }
                checkTheWinner(matrix[i][j], i, j, 0, -1);
                checkTheWinner(matrix[i][j], i, j, 1, -1);
                checkTheWinner(matrix[i][j], i, j, 1, 0);
                checkTheWinner(matrix[i][j], i, j, 1, 1);
                checkTheWinner(matrix[i][j], i, j, 0, 1);
            });
            container.appendChild(cell).className = "grid-item";
        }
        
    }
}

makeRows(6, 7);

function checkTheWinner(cellColor, cellLine, cellColumn, lineAdder, columnAdder) {
    let winnerCnt = 0;
    for (let line = cellLine, column = cellColumn, cnt = 0; cnt < 4 && line < 6 && column < 7 && column >= 0; ++cnt, line += lineAdder, column += columnAdder) {
        if (matrix[line][column] == cellColor) {
            ++winnerCnt;
        }
        
    }
    if (winnerCnt == 4) {
        if (cellColor == "red") {
            alert("Player 1 wins");
        } else {
            alert("Player 2 wins");
        }
        window.location.reload();
        return 0;
    }
}
