const Ship = require("./ship");

function Gameboard() {
  const board = [];
  for (let i = 0; i < 10; i += 1) {
    board.push([]);
    for (let j = 0; j < 10; j += 1) {
      board[i].push(["o"]);
    }
  }
  function placeShip(size, [x, y]) {
    board[x][y] = Ship(size);
  }

  return { board, placeShip };
}

module.exports = Gameboard;
