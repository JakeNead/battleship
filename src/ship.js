function Ship(length) {
  let hp = length;
  function hit() {
    hp -= 1;
  }
  function isSunk() {
    return hp <= 0;
  }
  return { hp, hit, isSunk };
}

module.exports = Ship;
