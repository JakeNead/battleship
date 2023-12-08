// const gameController = require("./index");

function Dom() {
  function initPage() {
    const body = document.querySelector("body");
    body.innerHTML =
      "<div id='overlay'></div><div id='popup'><h2 id='currentShipHeader'></h2><div id='placeShipsBoard'></div></div><header><h1>BATTLESHIP</h1></header><main><div id='boards'><div id='p1Board'></div><div id='p2Board'></div></div></main><footer>Made by Jake</footer>";
  }

  function renderGameboard(playerBoard, board) {
    const p1Board = document.querySelector("#p1Board");
    const p2Board = document.querySelector("#p2Board");
    const popupBoard = document.querySelector("#placeShipsBoard");
    let container;
    if (playerBoard === "p1") container = p1Board;
    else if (playerBoard === "p2") container = p2Board;
    else if (playerBoard === "popupBoard") container = popupBoard;
    for (let i = 0; i < 10; i += 1) {
      const boardColumn = document.createElement("div");
      boardColumn.setAttribute("class", "boardColumn");
      container.appendChild(boardColumn);
      for (let j = 0; j < 10; j += 1) {
        const cell = document.createElement("div");
        cell.classList.add(
          `${playerBoard}Cell`,
          `${board.getBoard()[i][j][0]}`,
        );
        cell.dataset.x = i;
        cell.dataset.y = j;
        boardColumn.appendChild(cell);
      }
    }
  }

  function clearGameboard(player) {
    const p1Board = document.querySelector("#p1Board");
    const p2Board = document.querySelector("#p2Board");
    const popupBoard = document.querySelector("#placeShipsBoard");
    let playerBoard;
    if (player === "p1") playerBoard = p1Board;
    else if (player === "p2") playerBoard = p2Board;
    else if (player === "popupBoard") playerBoard = popupBoard;
    while (playerBoard.firstChild)
      playerBoard.removeChild(playerBoard.lastChild);
  }
  function declareWinner() {
    // this will run when gameTurns detects a winner
  }

  function shoot(cell, gameTurns, gameboard) {
    const { x } = cell.dataset;
    const { y } = cell.dataset;
    gameboard.receiveAttack(x, y);
    gameTurns();
  }

  function playerClicks(gameTurns, gameboard) {
    const cells = document.querySelectorAll(".p2Cell");
    cells.forEach((cell) => {
      if (!cell.classList.contains("h") || !cell.classList.contains("m"))
        cell.addEventListener("click", () => shoot(cell, gameTurns, gameboard));
    });
  }

  function currentShip(shipIndex) {
    const shipArray = [
      { shipName: "Carrier", size: 5 },
      { shipName: "Battleship", size: 4 },
      { shipName: "Destroyer", size: 3 },
      { shipName: "Submarine", size: 3 },
      { shipName: "Patrol Boat", size: 2 },
    ];
    return shipArray[shipIndex];
  }

  function hoverShipDisplay(cell, shipIndex, movement) {
    const { size } = currentShip(shipIndex);
    const x = Number(cell.dataset.x);
    const y = Number(cell.dataset.y);
    if (movement === "enter") {
      for (let i = x - 1; i < x + size - 1; i += 1) {
        if (i >= 9) return;
        const targetCell = document.querySelector(
          `[data-x='${i + 1}'][data-y='${y}']`,
        );
        targetCell.classList.add("hoverShip");
      }
    } else
      for (let i = x - 1; i < x + size - 1; i += 1) {
        if (i >= 9) return;
        // search/add even listeners here
        const targetCell = document.querySelector(
          `[data-x='${i + 1}'][data-y='${y}']`,
        );
        targetCell.classList.remove("hoverShip");
      } // cell.classList.remove("hoverShip");
  }

  function dismissPopup() {
    document.querySelector("#overlay").classList.add("hidden");
    document.querySelector("#popup").classList.add("hidden");
  }

  function placeShipsPopup(p2gameboard, shipIndex, p1Gameboard, gameturns) {
    if (shipIndex === 5) {
      dismissPopup();
      renderGameboard("p1", p1Gameboard);
      renderGameboard("p2", p2gameboard);
      playerClicks(gameturns, p2gameboard);
      return;
    }
    const popupBoard = document.querySelector("#placeShipsBoard");
    const currentShipHeader = document.querySelector("#currentShipHeader");
    if (popupBoard) clearGameboard("popupBoard");
    renderGameboard("popupBoard", p2gameboard);
    currentShipHeader.textContent = `Place your ${
      currentShip(shipIndex).shipName
    }`;
    const popupBoardCells = document.querySelectorAll(".popupBoardCell");

    popupBoardCells.forEach((cell) =>
      cell.addEventListener(
        "mouseenter",
        () => {
          hoverShipDisplay(cell, shipIndex, "enter");
        },
        cell.addEventListener("mouseleave", () =>
          hoverShipDisplay(cell, shipIndex, "leave"),
        ),
        cell.addEventListener("click", () => {
          if (
            p2gameboard.placeShip(
              currentShip(shipIndex).size,
              Number(cell.dataset.x),
              Number(cell.dataset.y),
            )
          ) {
            placeShipsPopup(p2gameboard, shipIndex + 1, p1Gameboard, gameturns);
          }
        }),
      ),
    );
  }

  return {
    renderGameboard,
    clearGameboard,
    declareWinner,
    initPage,
    playerClicks,
    placeShipsPopup,
  };
}

module.exports = Dom;
