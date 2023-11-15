function Dom() {
  function initPage() {
    const body = document.querySelector("body");
    body.innerHTML =
      "<header>BATTLESHIP</header><main><div id='p1Board'></div><div id='p2Board'></div></main><footer>Made by Jake</footer>";
  }
  function renderGameboard(board) {
    for (let i = 0; i < board.length; i++) {}
  }
  function declareWinner() {}
  return { renderGameboard, declareWinner, initPage };
}

module.exports = Dom;
