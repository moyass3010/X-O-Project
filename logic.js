let gridItems = document.getElementsByClassName("square");
let currentTurn = "X"
let gameIsFinished = false


let boardArray = [
    "0", "1", "2",
    "3", "4", "5",
    "6", "7", "8"
]
for (const item of gridItems)
{
    item.addEventListener("click", function() {

if(gameIsFinished) {
    return 
}

        let value = item.getAttribute("value")
        let index = value - 1

if(boardArray[index] == "X" || boardArray[index] == "O") {
    return
}

        // filling the value visually
let squareContent = document.querySelector(`.square[value="${value}"]`)
squareContent.innerHTML = currentTurn


//filling the value logically
boardArray[index] = currentTurn

console.log(boardArray);

document.getElementById("instruction").textContent = `${currentTurn} turn `


evaluateBoard()

if(currentTurn == "X") {

    currentTurn = "O"

} else {
    currentTurn = "X"
}

    })

    function evaluateBoard() {

        if(
            //rows
            (boardArray[0] == boardArray[1] && boardArray[1] == boardArray[2]) || 
            (boardArray[3] == boardArray[4] && boardArray[4] == boardArray[5]) ||
            (boardArray[6] == boardArray[7] && boardArray[7] == boardArray[8]) ||

//colums
(boardArray[0] == boardArray[3] && boardArray[3] == boardArray[6]) || 
(boardArray[1] == boardArray[4] && boardArray[4] == boardArray[7]) ||
(boardArray[2] == boardArray[5] && boardArray[5] == boardArray[8]) ||
//Diagonal
(boardArray[0] == boardArray[4] && boardArray[4] == boardArray[8]) ||
(boardArray[2] == boardArray[4] && boardArray[4] == boardArray[6]) 
        ) {
            var winner = currentTurn == "O" ? "O" : "X"
            gameIsFinished = true
            alertify.alert(`${winner} يا لاعييييب!`)
        }

        var isDraw = true
        for(square of boardArray) {
            if(square != "X" && square != "O") {
isDraw = false
            }
        }
if(isDraw) {
    gameIsFinished = true
    alertify.alert("التعادل سيد الموقف!")
}
    }
}
//Footer = reset//
document.getElementById("reset-btn").addEventListener("click", function(){
    reset()
})

function reset() {
//reseting the visual part//
for (item of gridItems) {
    let value = item.getAttribute("value")
    let squareContent = document.querySelector(`.square[value="${value}"]`)
    squareContent.innerHTML = ""

    boardArray = [
        "0", "1", "2",
        "3", "4", "5",
        "6", "7", "8"
    ]
}
gameIsFinished = false
currentTurn = "X"
document.getElementById("instruction").innerHTML = `${currentTurn} turn `
}