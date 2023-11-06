const Gameboard = require("../src/gameboard");
const Ship = require("../src/ship");

test("Gameboard creates an empty board", () => {
  const gameboard = Gameboard();
  expect(gameboard.board).toEqual([
    [["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"]],
    [["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"]],
    [["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"]],
    [["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"]],
    [["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"]],
    [["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"]],
    [["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"]],
    [["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"]],
    [["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"]],
    [["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"], ["e"]],
  ]);
});

test("Gameboard correctly places a ship on the board", () => {
  const gameboard = Gameboard();
  const ship = Ship(1);
  gameboard.placeShip(ship, 0, 0);

  expect(gameboard.board[0][0]).toEqual(ship);
});

test("Hit a ship", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(Ship(1), 0, 0);
  gameboard.receiveAttack(0, 0);
  expect(gameboard.board[0][0].isSunk).toBeTruthy();
});

test.skip("Miss a ship", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(Ship(1), 0, 0);

  expect(gameboard2.board[0][0]).toEqual(ship);
});
