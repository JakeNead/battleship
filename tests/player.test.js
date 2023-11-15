const Player = require("../src/player");
const Gameboard = require("../src/gameboard");

test("Player creates a board", () => {
  const player1 = Player();
  const gameboard = Gameboard().board;
  expect(player1.gameboard.board).toEqual(gameboard);
});

test("AI makes random legal attacks", () => {
  const player1 = Player();
  player1.aiAttack();
  expect(player1.gameboard.getBoard().flat(2).includes("m")).toBeTruthy();
});
