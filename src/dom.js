const gameController = require("./index");

function Dom() {
  function initPage() {
    const body = document.querySelector("body");
    body.innerHTML =
      "<div id='overlay'></div><div id='popup'><h2>Place your ships</h2></div><header><h1>BATTLESHIP</h1></header><main><div id='boards'><div class='p1Board'></div><div class='p2Board'></div></div></main><footer>Made by Jake</footer>";
  }

  function renderGameboard(playerBoard, board) {
    const p1Board = document.querySelector(".p1Board");
    const p2Board = document.querySelector(".p2Board");
    let container;
    if (playerBoard === "p1") container = p1Board;
    else container = p2Board;
    for (let i = 0; i < 10; i += 1) {
      const boardColumn = document.createElement("div");
      boardColumn.setAttribute("class", "boardColumn");
      container.appendChild(boardColumn);
      for (let j = 0; j < 10; j += 1) {
        const cell = document.createElement("div");
        cell.classList.add(
          `${playerBoard}cell`,
          `${board.getBoard()[i][j][0]}`,
        );
        cell.setAttribute("data-coordinate", `${[i]}${[j]}`);
        boardColumn.appendChild(cell);
      }
    }
  }

  function clearGameboard(player) {
    const p1Board = document.querySelector(".p1Board");
    const p2Board = document.querySelector(".p2Board");
    let playerBoard;
    if (player === "p1") playerBoard = p1Board;
    else playerBoard = p2Board;
    while (playerBoard.firstChild)
      playerBoard.removeChild(playerBoard.lastChild);
  }
  function declareWinner() {
    // this will run when gameTurns detects a winner
  }

  function shoot(cell, gameTurns, player) {
    const x = cell.dataset.coordinate[0];
    const y = cell.dataset.coordinate[1];
    player.gameboard.receiveAttack(x, y);
    gameTurns();
  }

  function playerClicks(gameTurns, player) {
    const cells = document.querySelectorAll(".p2cell");
    cells.forEach((cell) => {
      if (!cell.classList.contains("h") || !cell.classList.contains("m"))
        cell.addEventListener("click", () => shoot(cell, gameTurns, player));
    });
  }

  return {
    renderGameboard,
    clearGameboard,
    declareWinner,
    initPage,
    playerClicks,
    // disableAttacks,
  };
}

module.exports = Dom;
