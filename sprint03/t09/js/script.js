let count = 0;
let xNum = '';
let oNum = '';
let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let counterr = 0;

function ticTacToe(param, num) {
    let dtType = document.querySelector(`.${param}`);

    if (dtType.dataset.type == "empty") {
        counter(count);
        dtType.innerHTML = `${(count % 2 != 0) ? "x" : "o"}`;
        dtType.dataset.type = "close";
        for (let i in board) {
            counterr++;
            if (counterr == num) {
                board[i] = `${(count % 2 != 0) ? "x" : "o"}`;
                counterr = 0;
                break;
            }
        }
        checkWhoWin();
    }
}

function checkWhoWin() {
    if (board[0] == "x" && board[1] == "x" && board[2] == "x") {
        document.getElementById("firstF").style.color = "green";
        document.getElementById("secondF").style.color = "green";
        document.getElementById("thirdF").style.color = "green";
        document.getElementById("firstF").style.textTransform = "uppercase";
        document.getElementById("secondF").style.textTransform = "uppercase";
        document.getElementById("thirdF").style.textTransform = "uppercase";
        Winner("x");
    }
    if (board[3] == "x" && board[4] == "x" && board[5] == "x") {
        document.getElementById("firstS").style.color = "green";
        document.getElementById("secondS").style.color = "green";
        document.getElementById("thirdS").style.color = "green";
        document.getElementById("firstS").style.textTransform = "uppercase";
        document.getElementById("secondS").style.textTransform = "uppercase";
        document.getElementById("thirdS").style.textTransform = "uppercase";
        Winner("x");
    }
    if (board[6] == "x" && board[7] == "x" && board[8] == "x") {
        document.getElementById("firstT").style.color = "green";
        document.getElementById("secondT").style.color = "green";
        document.getElementById("thirdT").style.color = "green";
        document.getElementById("firstT").style.textTransform = "uppercase";
        document.getElementById("secondT").style.textTransform = "uppercase";
        document.getElementById("thirdT").style.textTransform = "uppercase";
        Winner("x");
    }
    if (board[0] == "x" && board[4] == "x" && board[8] == "x") {
        document.getElementById("firstF").style.color = "green";
        document.getElementById("secondS").style.color = "green";
        document.getElementById("thirdT").style.color = "green";
        document.getElementById("firstF").style.textTransform = "uppercase";
        document.getElementById("secondS").style.textTransform = "uppercase";
        document.getElementById("thirdT").style.textTransform = "uppercase";
        Winner("x");
    }
    if (board[0] == "x" && board[3] == "x" && board[6] == "x") {
        document.getElementById("firstF").style.color = "green";
        document.getElementById("firstS").style.color = "green";
        document.getElementById("firstT").style.color = "green";
        document.getElementById("firstF").style.textTransform = "uppercase";
        document.getElementById("firstS").style.textTransform = "uppercase";
        document.getElementById("firstT").style.textTransform = "uppercase";
        Winner("x");
    }
    if (board[1] == "x" && board[4] == "x" && board[7] == "x") {
        document.getElementById("secondF").style.color = "green";
        document.getElementById("secondS").style.color = "green";
        document.getElementById("secondT").style.color = "green";
        document.getElementById("secondF").style.textTransform = "uppercase";
        document.getElementById("secondS").style.textTransform = "uppercase";
        document.getElementById("secondT").style.textTransform = "uppercase";
        Winner("x");
    }
    if (board[2] == "x" && board[5] == "x" && board[8] == "x") {
        document.getElementById("thirdF").style.color = "green";
        document.getElementById("thirdS").style.color = "green";
        document.getElementById("thirdT").style.color = "green";
        document.getElementById("thirdF").style.textTransform = "uppercase";
        document.getElementById("thirdS").style.textTransform = "uppercase";
        document.getElementById("thirdT").style.textTransform = "uppercase";
        Winner("x");
    }
    if (board[2] == "x" && board[4] == "x" && board[6] == "x") {
        document.getElementById("thirdF").style.color = "green";
        document.getElementById("secondS").style.color = "green";
        document.getElementById("firstT").style.color = "green";
        document.getElementById("thirdF").style.textTransform = "uppercase";
        document.getElementById("secondS").style.textTransform = "uppercase";
        document.getElementById("firstT").style.textTransform = "uppercase";
        Winner("x");
    }
    if (board[0] == "o" && board[1] == "o" && board[2] == "o") {
        document.getElementById("firstF").style.color = "green";
        document.getElementById("secondF").style.color = "green";
        document.getElementById("thirdF").style.color = "green";
        document.getElementById("firstF").style.textTransform = "uppercase";
        document.getElementById("secondF").style.textTransform = "uppercase";
        document.getElementById("thirdF").style.textTransform = "uppercase";
        Winner("o");
    }
    if (board[3] == "o" && board[4] == "o" && board[5] == "o") {
        document.getElementById("firstS").style.color = "green";
        document.getElementById("secondS").style.color = "green";
        document.getElementById("thirdS").style.color = "green";
        document.getElementById("firstS").style.textTransform = "uppercase";
        document.getElementById("secondS").style.textTransform = "uppercase";
        document.getElementById("thirdS").style.textTransform = "uppercase";
        Winner("o");
    }
    if (board[6] == "o" && board[7] == "o" && board[8] == "o") {
        document.getElementById("firstT").style.color = "green";
        document.getElementById("secondT").style.color = "green";
        document.getElementById("thirdT").style.color = "green";
        document.getElementById("firstT").style.textTransform = "uppercase";
        document.getElementById("secondT").style.textTransform = "uppercase";
        document.getElementById("thirdT").style.textTransform = "uppercase";
        Winner("o");
    }
    if (board[0] == "o" && board[4] == "o" && board[8] == "o") {
        document.getElementById("firstF").style.color = "green";
        document.getElementById("secondS").style.color = "green";
        document.getElementById("thirdT").style.color = "green";
        document.getElementById("firstF").style.textTransform = "uppercase";
        document.getElementById("secondS").style.textTransform = "uppercase";
        document.getElementById("thirdT").style.textTransform = "uppercase";
        Winner("o");
    }
    if (board[0] == "o" && board[3] == "o" && board[6] == "o") {
        document.getElementById("firstF").style.color = "green";
        document.getElementById("firstS").style.color = "green";
        document.getElementById("firstT").style.color = "green";
        document.getElementById("firstF").style.textTransform = "uppercase";
        document.getElementById("firstS").style.textTransform = "uppercase";
        document.getElementById("firstT").style.textTransform = "uppercase";
        Winner("o");
    }
    if (board[1] == "o" && board[4] == "o" && board[7] == "o") {
        document.getElementById("secondF").style.color = "green";
        document.getElementById("secondS").style.color = "green";
        document.getElementById("secondT").style.color = "green";
        document.getElementById("secondF").style.textTransform = "uppercase";
        document.getElementById("secondS").style.textTransform = "uppercase";
        document.getElementById("secondT").style.textTransform = "uppercase";
        Winner("o");
    }
    if (board[2] == "o" && board[5] == "o" && board[8] == "o") {
        document.getElementById("thirdF").style.color = "green";
        document.getElementById("thirdS").style.color = "green";
        document.getElementById("thirdT").style.color = "green";
        document.getElementById("thirdF").style.textTransform = "uppercase";
        document.getElementById("thirdS").style.textTransform = "uppercase";
        document.getElementById("thirdT").style.textTransform = "uppercase";
        Winner("o");
    }
    if (board[2] == "o" && board[4] == "o" && board[6] == "o") {
        document.getElementById("thirdF").style.color = "green";
        document.getElementById("secondS").style.color = "green";
        document.getElementById("firstT").style.color = "green";
        document.getElementById("thirdF").style.textTransform = "uppercase";
        document.getElementById("secondS").style.textTransform = "uppercase";
        document.getElementById("firstT").style.textTransform = "uppercase";
        Winner("o");
    }
}

function Winner(param) {

    let winner = document.getElementById("winnerMsg");
    let buttun = document.getElementById("battan");

    document.getElementById("firstF").dataset.type = "close";
    document.getElementById("firstS").dataset.type = "close";
    document.getElementById("firstT").dataset.type = "close";
    document.getElementById("secondF").dataset.type = "close";
    document.getElementById("secondS").dataset.type = "close";
    document.getElementById("secondT").dataset.type = "close";
    document.getElementById("thirdF").dataset.type = "close";
    document.getElementById("thirdS").dataset.type = "close";
    document.getElementById("thirdT").dataset.type = "close";
    document.getElementById("countCol").style.color = "white";
    document.getElementById("countCol2").style.color = "white";
    document.getElementById("nat").style.backgroundColor = "green";
    winner.style.color = "white";
    winner.style.fontSize = "32px";
    if (param == "x") {
        winner.style.marginTop = "40px";
        winner.innerHTML = "Player 1<br> won!";
    } else {
        winner.innerHTML = "Player 2<br> won!";
        winner.style.marginTop = "40px";
    }
    buttun.classList.add("battan");
}

function counter() {
    const numTrns = document.querySelector(".count");
    let player1 = document.getElementById("playerF");
    let player2 = document.getElementById("playerS");

    count++;
    numTrns.innerHTML = `${String(count)}`;
    if (count % 2 == 0) {
        if (player2.classList == "col") {
            player2.classList.remove("col");
            player2.classList.add("standColor");
        }
        player1.classList.remove("standColor");
        player1.classList.add("col");
    } else {
        if (player1.classList == "col") {
            player1.classList.remove("col");
            player1.classList.add("standColor");
        }
        player2.classList.remove("standColor");
        player2.classList.add("col");
    }
}

function restart() {
    const clearTurns = document.querySelector(".count");
    let player1 = document.getElementById("playerF");
    let player2 = document.getElementById("playerS");
    let buttun = document.getElementById("battan");
    let winner = document.getElementById("winnerMsg");

    count = 0;
    clearTurns.innerHTML = `${String(count)}`;
    if (player1.classList != "col") {
        player1.classList.remove("standColor");
        player2.classList.remove("col");
        player2.classList.add("standColor");
        player1.classList.add("col");
    }
    for (let i = 0; i < 9; i++) {
        const tdElements = document.querySelector(`[data-type="close"]`);
        if (tdElements != null) {
            tdElements.dataset.type = "empty";
            tdElements.innerHTML = ``;
        }
    }
    board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    document.getElementById("firstF").style.color = "black";
    document.getElementById("secondF").style.color = "black";
    document.getElementById("thirdF").style.color = "black";
    document.getElementById("firstS").style.color = "black";
    document.getElementById("secondS").style.color = "black";
    document.getElementById("thirdS").style.color = "black";
    document.getElementById("firstT").style.color = "black";
    document.getElementById("secondT").style.color = "black";
    document.getElementById("thirdT").style.color = "black";
    document.getElementById("secondF").style.textTransform = "lowercase";
    document.getElementById("firstF").style.textTransform = "lowercase";
    document.getElementById("secondF").style.textTransform = "lowercase";
    document.getElementById("thirdF").style.textTransform = "lowercase";
    document.getElementById("firstS").style.textTransform = "lowercase";
    document.getElementById("secondS").style.textTransform = "lowercase";
    document.getElementById("thirdS").style.textTransform = "lowercase";
    document.getElementById("firstT").style.textTransform = "lowercase";
    document.getElementById("secondT").style.textTransform = "lowercase";
    document.getElementById("thirdT").style.textTransform = "lowercase";
    buttun.classList.remove("battan");
    winner.innerHTML = "";
    winner.style.marginTop = "0";
    document.getElementById("countCol").style.color = "black";
    document.getElementById("countCol2").style.color = "black";
    document.getElementById("nat").style.backgroundColor = "#c2c2c2";
}