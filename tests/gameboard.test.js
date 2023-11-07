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

test("Hit a ship", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(Ship(1), 0, 0);
  gameboard.receiveAttack(0, 0);
  //   console.log(gameboard.board[0][0]);
  expect(gameboard.board[0][0][1].isSunk()).toBeTruthy();
});

test.skip("Sink a ship", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(Ship(2), 0, 0);
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(1, 0);
  expect(gameboard.board[0][0].isSunk()).toBeTruthy();
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
  expect(gameboard.receiveAttack(2, 4)).toBe("Can't hit this cell twice");
});

test("All ships sunk", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(Ship(1), 5, 5);
  gameboard.receiveAttack(5, 5);

  gameboard.placeShip(Ship(2), 7, 7);
  gameboard.receiveAttack(7, 7);
  gameboard.receiveAttack(8, 7);
  console.log(gameboard.fleet);
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
