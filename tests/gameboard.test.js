const Gameboard = require("../src/gameboard");
const Ship = require("../src/ship");

test("Gameboard creates an empty board", () => {
  const gameboard1 = Gameboard();
  expect(gameboard1.board).toEqual([
    [["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"]],
    [["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"]],
    [["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"]],
    [["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"]],
    [["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"]],
    [["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"]],
    [["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"]],
    [["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"]],
    [["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"]],
    [["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"], ["o"]],
  ]);
});

test("Gameboard places a ship", () => {
  const gameboard2 = Gameboard();
  gameboard2.placeShip(1, [0, 0]);

  expect(JSON.stringify(gameboard2.board[0][0])).toEqual(
    JSON.stringify(Ship(1)),
  );
});
