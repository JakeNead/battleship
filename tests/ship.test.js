const Ship = require("../src/ship");

const shipTest = Ship(2);

test("ship not sunk", () => {
  expect(shipTest.isSunk()).toBeFalsy();
});

test("ship sunk", () => {
  shipTest.hit();
  shipTest.hit();
  expect(shipTest.isSunk()).toBeTruthy();
});
