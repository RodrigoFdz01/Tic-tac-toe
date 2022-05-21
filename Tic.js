let cells = document.querySelectorAll(".cell");
let botonplay = document.querySelector(".buttonplay");
let mensaje = document.querySelector(".mensajeresult");
cells = Array.from(cells);

mensaje.style.display = "none";
let currentPlayer = "X";

let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkForWinner() {
  winningCombinations.forEach(function (combination) {
    let check = combination.every(
      (index) => cells[index].innerText.trim() == currentPlayer
    );
    if (check) {
      highlightCells(combination);
      mensaje.innerText = "X/O won";
      mensaje.style.display = "block";
    }
  });
}

function highlightCells(combination) {
  combination.forEach(function (index) {
    cells[index].classList.add("highlight");
  });
}

cells.forEach(function (cell) {
  cell.addEventListener("click", function () {
    if (cell.innerText.trim() != "") return;
    cell.innerText = currentPlayer;
    checkForWinner();
    currentPlayer = currentPlayer == "X" ? "O" : "X";
  });
});

botonplay.addEventListener("click", function () {
  cells.forEach(function (cell) {
    cell.innerText = "";
    cell.classList.remove("highlight");
    mensaje.style.display = "none";
  });
});
