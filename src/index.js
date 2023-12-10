import "./style.css";

const Player = require("./player");
const dom = require("./dom");

const Dom = dom();
Dom.initPage();

function gameLoop() {
  // eventually allow player to place ships
  const p1 = Player();
  const p2 = Player();
  p2.gameboard.placeShip(5, 0, 0);
  p2.gameboard.placeShip(4, 5, 2);
  p2.gameboard.placeShip(3, 3, 5);
  p2.gameboard.placeShip(3, 0, 8);
  p2.gameboard.placeShip(2, 6, 8);

  function gameTurns() {
    Dom.clearGameboard("p2");
    Dom.renderGameboard("p2", p2.gameboard);
    Dom.playerClicks(gameTurns, p2.gameboard);
    if (p2.gameboard.allShipsSunk()) {
      Dom.clearGameboard("p2");
      Dom.renderGameboard("p2", p2.gameboard);
      Dom.declareWinner("p1");
      console.log("p1 wins");
      return "p1 wins";
    }
    p1.aiAttack();
    Dom.clearGameboard("p1");
    Dom.renderGameboard("p1", p1.gameboard);
    if (p1.gameboard.allShipsSunk()) {
      Dom.clearGameboard("p2");
      Dom.renderGameboard("p2", p2.gameboard);
      Dom.declareWinner("p2");
      console.log("p2 wins");
      return "p2 wins";
    }
  }

  Dom.placeShipsPopup(p1.gameboard, p2.gameboard, 0, gameTurns);
}

gameLoop();

module.exports = gameLoop;

// start over button
// random p2 ship placements
// ship orientation choice?
