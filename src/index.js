import "./style.css";

const Player = require("./player");
const dom = require("./dom");

const Dom = dom();
Dom.initPage();

function gameController() {
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

  Dom.renderGameboard("p1", p1.gameboard);
  Dom.renderGameboard("p2", p2.gameboard);
  Dom.playerClicks();

  function gameTurns(coord) {
    // eventually replace aiAttack with user click events

    p2.aiAttack();
    // p1.gameboard.receiveAttack(coord);
    Dom.clearGameboard("p2");
    Dom.renderGameboard("p2", p2.gameboard);
    if (p2.gameboard.allShipsSunk()) {
      // Dom.winner("p1");
      return "p1 wins";
    }
    p1.aiAttack();
    Dom.clearGameboard("p1");
    Dom.renderGameboard("p1", p1.gameboard);
    if (p1.gameboard.allShipsSunk()) {
      // Dom.winner("p2");
      return "p2 wins";
    }

    // gameTurns();
  }
  // gameTurns();
  return { gameTurns };
}

gameController();

module.exports = gameController;

// TURN TAKING ALGO IN GAMECONTROLLER

// DOM.cellClick(p1,p2)
//    queryAll p2 cells
//    onclick if(p2.receiveAttack(cell data-coord) !== illegal move)
//    render p2 board
//    if( isWinner())
//      disable board clicks
//      end loop/ call winner(p1)
//   else
//    p1.aiAttack()
//    check win condition
//      end loop if game over
