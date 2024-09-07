let currentPlayer = "X";
const spans = document.querySelectorAll("span");
const winMessage = document.getElementById("win");

const checkWin = () => {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (
      spans[a].innerText === currentPlayer &&
      spans[b].innerText === currentPlayer &&
      spans[c].innerText === currentPlayer
    ) {
      winMessage.innerText = `${currentPlayer} Symbol Player Wins!!`;
      return;
    }
  }

  let isBoardFull = true;
  for (let i = 0; i < spans.length; i++) {
    if (spans[i].innerText === "") {
      isBoardFull = false;
      break;
    }
  }

  if (isBoardFull) {
    winMessage.innerText = `It's a draw!`;
  }
};

spans.forEach((span) => {
  span.addEventListener("click", () => {
    if (span.innerText === "") {
      span.innerText = currentPlayer;
      span.style.color = currentPlayer === "X" ? "red" : "black";
      checkWin();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
    span.style.cursor = "not-allowed";
  });
});

const resetGamebtn = document.getElementById("resetGame");

function resetGame() {
  spans.forEach((span) => {
    span.innerText = "";
    span.style.cursor = "pointer";
  });
}

resetGamebtn.addEventListener("click", resetGame);
window.addEventListener("load", resetGame);
