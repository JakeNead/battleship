function Ship(size) {
  let hp = size;
  function hit() {
    hp -= 1;
  }
  function isSunk() {
    return hp <= 0;
  }
  return { hp, hit, isSunk };
}

module.exports = Ship;
