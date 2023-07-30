let players_turn = 0;

document.addEventListener("DOMContentLoaded", function() {
    let container = document.getElementById("buttons");
    for (let i = 1; i <= 42; ++i) {
        let button = document.createElement("button");
        button.setAttribute("id", "btn" + i);
        button.addEventListener("click", function() {
            if (players_turn % 2 == 0) {
                button.classList.add("btn", "btn-danger");
                button.innerText = "red";
            } else if (players_turn % 2) {
                button.classList.add("btn", "btn-warning");
                button.innerText = "yellow";
            }
            ++players_turn;
            if (players_turn == 42) {
                alert("Draw");
                window.location.reload();
                return 0;
            }
            down(button, i);
            left(button, i);
            right(button, i);
            mainDiag(button, i);
            secondaryDiag(button, i);
        });
        if (i <= 7) {
            button.setAttribute("class", "row_1");
        } else if (i > 7 && i <= 14) {
            button.setAttribute("class", "row_2");
        } else if (i > 14 && i <= 21) {
            button.setAttribute("class", "row_3");
        } else if (i > 21 && i <= 28) {
            button.setAttribute("class", "row_4");
        } else if (i > 28 && i <= 35) {
            button.setAttribute("class", "row_5");
        } else if (i > 35 && i <= 42) {
            button.setAttribute("class", "row_6");
        }
        container.appendChild(button);
    }
});
let container = document.getElementById("buttons");
let buttons = container.getElementsByTagName("button");

function checkColor(btnColor) {
    if (btnColor == "red") {
        alert("Player 1 wins");
    } else if (btnColor == "yellow") {
        alert("Player 2 wins");
    }
    window.location.reload();
    return 0;
}

function down(button, btnIndex) {
    let j = 0, i = btnIndex, winCnt = 0;
    while (j < 3) {
        if (button.innerText == buttons[i + 6].innerText) {
            ++winCnt;
        }
        ++j;
        i += 7;
    }
    if (winCnt == 3) {
        checkColor(button.innerText);
    }
}

function left(button, btnIndex) {
    let j = 0, i = btnIndex, winCnt = 0;
    while (j < 3) {
        if (button.innerText == buttons[i - 2].innerText) {
            ++winCnt;
        }
        ++j;
        --i;
    }
    if (winCnt == 3) {
        checkColor(button.innerText);
    }
}

function right(button, btnIndex) {
    let j = 0, i = btnIndex, winCnt = 0;
    while (j < 3) {
        if (button.innerText == buttons[i].innerText) {
            ++winCnt;
        }
        ++j;
        ++i;
    }
    if (winCnt == 3) {
        checkColor(button.innerText);
    }
}

function mainDiag(button, btnIndex) {
    let j = 0, i = btnIndex, winCnt = 0;
    while (j < 3) {
        if (button.innerText == buttons[i + 7].innerText) {
            ++winCnt;
        }
        ++j;
        i += 8;
    }
    if (winCnt == 3) {
        checkColor(button.innerText);
    }
}

function secondaryDiag(button, btnIndex) {
    let j = 0, i = btnIndex, winCnt = 0;
    while (j < 3) {
        if (button.innerText == buttons[i + 5].innerText) {
            ++winCnt;
        }
        ++j;
        i += 6;
    }
    if (winCnt == 3) {
        checkColor(button.innerText);
    }
}