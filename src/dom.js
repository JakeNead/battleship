const gameController = require("./index");

// eslint-disable-next-line prefer-destructuring
console.log(gameController.gameTurns);
const { gameTurns } = gameController();
function Dom() {
  function initPage() {
    const body = document.querySelector("body");
    body.innerHTML =
      "<header>BATTLESHIP</header><main><div id='p1Board'></div><div id='p2Board'></div></main><footer>Made by Jake</footer>";
  }

  function renderGameboard(playerBoard, board) {
    const p1Board = document.querySelector("#p1Board");
    const p2Board = document.querySelector("#p2Board");
    let container;
    if (playerBoard === "p1") container = p1Board;
    else container = p2Board;
    for (let i = 0; i < 10; i += 1) {
      const boardColumn = document.createElement("div");
      boardColumn.setAttribute("class", "boardColumn");
      container.appendChild(boardColumn);
      for (let j = 0; j < 10; j += 1) {
        const cell = document.createElement("div");
        cell.classList.add("cell", `${board.getBoard()[i][j][0]}`);
        cell.setAttribute("data-coordinate", `${[i]}${[j]}`);
        boardColumn.appendChild(cell);
      }
    }
  }

  function clearGameboard(player) {
    const p1Board = document.querySelector("#p1Board");
    const p2Board = document.querySelector("#p2Board");
    let playerBoard;
    if (player === "p1") playerBoard = p1Board;
    else playerBoard = p2Board;
    while (playerBoard.firstChild)
      playerBoard.removeChild(playerBoard.lastChild);
  }
  function declareWinner() {
    // this will run when gameTurns detects a winner
  }

  function shoot(cell) {
    const x = cell.dataset.coordinate[0];
    const y = cell.dataset.coordinate[1];
    gameTurns(x, y);
  }

  function playerClicks() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.addEventListener("click", shoot(cell));
    });
  }

  return {
    renderGameboard,
    clearGameboard,
    declareWinner,
    initPage,
    playerClicks,
  };
}

module.exports = Dom;
