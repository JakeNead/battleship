const gameLoop = require("../src/index");

test("Gameloop returns a winner", () => {
  expect(gameLoop()).toEqual(expect.stringContaining("wins"));
});
