const Ship = require("./ship");

function Gameboard() {
  const fleet = [];
  const board = [];
  for (let i = 0; i < 10; i += 1) {
    board[i] = [];
    for (let j = 0; j < 10; j += 1) {
      board[i].push(["e"]);
    }
  }

  function getBoard() {
    return board;
  }

  function shipNotOverlapping(length, x, y) {
    for (let i = x; i < x + length; i += 1) {
      if (board[i][y][0] === "s") return false;
    }
    return true;
  }

  function shipNotOverflowing(length, x) {
    for (let i = x; i < x + length; i += 1) {
      if (i > 9) return false;
    }
    return true;
  }

  function placeShip(size, x, y) {
    const ship = Ship(size);
    if (shipNotOverflowing(size, x) && shipNotOverlapping(size, x, y)) {
      for (let i = x; i < x + size; i += 1) {
        board[i][y][0] = "s";
        board[i][y][1] = ship;
      }
      fleet.push(ship);
      return true;
    }
    return false;
  }

  function receiveAttack(x, y) {
    if (board[x][y][0] === "e") {
      board[x][y][0] = "m";
      return "miss";
    }
    if (board[x][y][0] === "s") {
      board[x][y][1].hit();
      board[x][y][0] = "h";
      return "hit";
    }
    return "illegal move";
  }

  function allShipsSunk() {
    return fleet.every((ship) => ship.isSunk() === true);
  }

  return { getBoard, placeShip, receiveAttack, allShipsSunk };
}

module.exports = Gameboard;
