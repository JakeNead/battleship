const Gameboard = require("./gameboard");

function Player() {
  const gameboard = Gameboard();

  function aiAttack() {
    let result = "illegal move";
    while (result === "illegal move") {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      result = gameboard.receiveAttack(x, y);
    }
  }

  return { gameboard, aiAttack };
}

module.exports = Player;
