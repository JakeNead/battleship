const Ship = require("./ship");

function Gameboard() {
  const board = [];
  for (let i = 0; i < 10; i += 1) {
    board.push([]);
    for (let j = 0; j < 10; j += 1) {
      board[i].push(["e"]);
    }
  }
  function placeShip(ship, x, y) {
    board[x][y] = ship;
  }
  function receiveAttack(x, y) {
    if (board[x][y] === "m") {
      return;
    }
    if (board[x][y] === "e") {
      board[x][y] = "m";
    } else {
      board[x][y].hit();
    }
  }

  return { board, placeShip, receiveAttack };
}

module.exports = Gameboard;

// placeShip(shipLength, coord)
// board = 10x10 2d array
//      items contain['e',ship]
//      e,m,{} (empty, missed, hit)
