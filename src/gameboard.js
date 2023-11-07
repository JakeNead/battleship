function Gameboard() {
  const fleet = [];
  const board = [];
  for (let i = 0; i < 10; i += 1) {
    board.push([]);
    for (let j = 0; j < 10; j += 1) {
      board[i].push(["e"]);
    }
  }

  function placeShip(ship, x, y) {
    for (let i = x; i < x + ship.hp; i += 1) {
      board[i][y][0] = ship;
    }
    fleet.push(ship);
  }

  function receiveAttack(x, y) {
    if (board[x][y][0] === "e") {
      board[x][y][0] = "m";
      return "miss";
    }
    if (typeof board[x][y][0] === "object") {
      board[x][y][0].hit();
      board[x][y].unshift("h");
      return "hit";
    }
    return "Can't hit this cell twice";
  }

  function allShipsSunk() {
    return fleet.every((ship) => ship.isSunk() === true);
  }

  return { board, placeShip, receiveAttack, allShipsSunk };
}

module.exports = Gameboard;
