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

test("Gameboard correctly places a 1 length ship on the board", () => {
  const gameboard = Gameboard();
  const ship = Ship(1);
  gameboard.placeShip(ship, 0, 0);
  expect(gameboard.board[0][0][0]).toEqual(ship);
});

test("Gameboard correctly places a 3 length ship horizontally", () => {
  const gameboard = Gameboard();
  const ship = Ship(3);
  gameboard.placeShip(ship, 3, 5);

  expect(
    gameboard.board[3][5][0] === ship &&
      gameboard.board[4][5][0] === ship &&
      gameboard.board[5][5][0] === ship,
  ).toBeTruthy();
});

test("Gameboard won't place overlapping ships.", () => {
  const gameboard = Gameboard();
  const ship = Ship(3);
  const overlapShip = Ship(1);
  gameboard.placeShip(ship, 0, 0);
  gameboard.placeShip(overlapShip, 2, 0);
  expect(gameboard.board[2][0][0]).toBe(ship);
});

test("Hit a ship", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(Ship(1), 0, 0);
  gameboard.receiveAttack(0, 0);
  expect(gameboard.board[0][0][1].isSunk()).toBeTruthy();
});

test("Sink a ship", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(Ship(2), 0, 0);
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(1, 0);
  expect(gameboard.board[0][0][1].isSunk()).toBeTruthy();
});

test("Miss a ship", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(Ship(1), 0, 0);
  expect(gameboard.receiveAttack(4, 6)).toBe("miss");
});

test("attack cell twice error ", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(Ship(2), 2, 4);
  gameboard.receiveAttack(2, 4);
  expect(gameboard.receiveAttack(2, 4)).toBe("illegal move");
});

test("All ships sunk", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(Ship(1), 5, 5);
  gameboard.receiveAttack(5, 5);

  gameboard.placeShip(Ship(2), 7, 7);
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
