let container = document.getElementById("container");
let elements = container.getElementsByTagName("div");
let players_turn = 0;

function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (let cellPos = 0; cellPos < rows * cols; ++cellPos) {
        let cell = document.createElement("div");
        cell.addEventListener("click", function() { //add color to the cell + winner check
            if (players_turn % 2 == 0) {
                cell.style.backgroundColor = "red";
            } else if (players_turn % 2) {
                cell.style.backgroundColor = "yellow";
            }
            ++players_turn;
            if (players_turn == 42) {
                alert("Draw");
                window.location.reload();
                return 0;
            }
            checkTheWinner(cell.style.backgroundColor, cellPos, 1); // check the right part 
            checkTheWinner(cell.style.backgroundColor, cellPos, -1); // check the let part
            checkTheWinner(cell.style.backgroundColor, cellPos, 6); // check the down left diagonal
            checkTheWinner(cell.style.backgroundColor, cellPos, 7); // check the down part
            checkTheWinner(cell.style.backgroundColor, cellPos, 8); // check the down right diagonal
        });
        container.appendChild(cell).className = "grid-item";
    }
}

makeRows(6, 7);

function checkTheWinner(cellColor, cellPos, adder) {
    let winnerCnt = 0, cnt = 0;
    for (let i = cellPos; cnt < 4; ++cnt, i += adder) {
        if (elements[i].style.backgroundColor == cellColor) {
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
    }
}
