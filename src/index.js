const Player = require("./player");

function gameLoop() {
  const p1 = Player();
  p1.gameboard.placeShip(1, 0, 0);
  const p2 = Player();
  p2.gameboard.placeShip(8, 0, 0);

  while (!p1.gameboard.allShipsSunk() && !p2.gameboard.allShipsSunk()) {
    p1.aiAttack();
    if (p1.gameboard.allShipsSunk()) {
      return "p2 wins";
    }
    p2.aiAttack();
    if (p2.gameboard.allShipsSunk()) {
      return "p1 wins";
    }
  }
  return "something went horribly wrong";
}

module.exports = gameLoop;
