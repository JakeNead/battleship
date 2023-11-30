const Gameboard = require("../src/gameboard");
const Ship = require("../src/ship");

test("Gameboard creates an empty board", () => {
  const gameboard = Gameboard();
  expect(gameboard.getBoard()).toEqual([
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

test("Gameboard correctly places a 1 length ship on the board", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(1, 0, 0);
  expect(gameboard.getBoard()[0][0][0]).toBe("s");
});

test("Gameboard correctly places a 3 length ship horizontally", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(3, 3, 5);

  expect(gameboard.getBoard()[3][5][0]).toBe("s");
  expect(gameboard.getBoard()[4][5][0]).toBe("s");
  expect(gameboard.getBoard()[5][5][0]).toBe("s");
});

test("Gameboard won't place overlapping ships.", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(3, 0, 0);
  gameboard.placeShip(1, 2, 0);

  expect(gameboard.getBoard()[2][0][0]).toBe("s");
});

test("Gameboard won't place ships outiside board coordinates.", () => {
  const gameboard = Gameboard();

  gameboard.placeShip(3, 9, 0);
  expect(gameboard.getBoard()[9][0][0]).toBe("e");
});

test("Hit a ship", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(2, 0, 0);
  gameboard.receiveAttack(0, 0);
  expect(gameboard.getBoard()[0][0][0]).toBe("h");
});

test("Sink a ship", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(2, 0, 0);
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(1, 0);
  expect(gameboard.getBoard()[0][0][1].isSunk()).toBeTruthy();
});

test("Miss a ship", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(1, 0, 0);
  expect(gameboard.receiveAttack(4, 6)).toBe("miss");
});

test("attack cell twice error ", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(2, 2, 4);
  gameboard.receiveAttack(2, 4);
  expect(gameboard.receiveAttack(2, 4)).toBe("illegal move");
});

test("All ships sunk", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(1, 5, 5);
  gameboard.receiveAttack(5, 5);

  gameboard.placeShip(2, 7, 7);
  gameboard.receiveAttack(7, 7);
  gameboard.receiveAttack(8, 7);
  expect(gameboard.allShipsSunk()).toBeTruthy();
});

test("All ships not sunk", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(Ship(1), 5, 5);
  gameboard.receiveAttack(5, 5);
  gameboard.placeShip(Ship(2), 7, 7);
  gameboard.receiveAttack(8, 7);
  expect(gameboard.allShipsSunk()).toBeFalsy();
});
