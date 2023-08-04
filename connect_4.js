let container = document.getElementById("container");
let elements = container.getElementsByTagName("div");
let players_turn = 0;

function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (let i = 1; i <= rows * cols; ++i) {
        let cell = document.createElement("div");
        cell.innerHTML = i;
        cell.addEventListener("click", function() {
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
        });
        container.appendChild(cell).className = "grid-item";
    }
}

makeRows(6, 7);

function left(cellIndex) {

}

function leftDiagonal(cellIndex) {

}

function down(cellIndex) {
    for (let i = 1; i <= 7; ++i) {
        let redCounter = 0, yellowCounter = 0;
        for (let j = i; j <= i + 35; j += 7) {
            
            if (elements[j].style.backgroundColor == 'red') {
                ++redCounter;
            } else if (elements[j].style.backgroundColor == 'yellow') {
                ++yellowCounter;
            }
        }
    }
}

function rightDiagonal(cellIndex) {

}

function right(cellIndex) {

}
