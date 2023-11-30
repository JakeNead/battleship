import "./style.css";

const Player = require("./player");
const dom = require("./dom");

const Dom = dom();
Dom.initPage();

function gameLoop() {
  // eventually allow player to place ships
  const p1 = Player();
  p1.gameboard.placeShip(5, 0, 0);
  p1.gameboard.placeShip(4, 5, 2);
  p1.gameboard.placeShip(3, 3, 5);
  p1.gameboard.placeShip(3, 0, 8);
  p1.gameboard.placeShip(2, 6, 8);
  const p2 = Player();
  p2.gameboard.placeShip(5, 5, 9);
  p2.gameboard.placeShip(4, 1, 3);
  p2.gameboard.placeShip(3, 3, 5);
  p2.gameboard.placeShip(3, 7, 2);
  p2.gameboard.placeShip(2, 2, 1);

  // gameboards will render after user places ships
  Dom.renderGameboard("p1", p1.gameboard);
  Dom.renderGameboard("p2", p2.gameboard);

  function gameTurns() {
    Dom.clearGameboard("p2");
    Dom.renderGameboard("p2", p2.gameboard);
    Dom.playerClicks(gameTurns, p2);
    if (p2.gameboard.allShipsSunk()) {
      Dom.clearGameboard("p2");
      Dom.renderGameboard("p2", p2.gameboard);
      Dom.declareWinner();
      console.log("p1 wins");
      return "p1 wins";
    }
    p1.aiAttack();
    Dom.clearGameboard("p1");
    Dom.renderGameboard("p1", p1.gameboard);
    if (p1.gameboard.allShipsSunk()) {
      Dom.disableAttacks();
      console.log("p1 wins");
      return "p2 wins";
    }
  }
  Dom.playerClicks(gameTurns, p2);
  return {};
}

gameLoop();

module.exports = gameLoop;

// implement func for user to place ships
//  overlay a gamboard and let the user place each ship in order from large to small
// horizontal only

// initPage()
// create p1/p2
// placeShipOverlay()
//    after last ship render boards and playerClicks()
