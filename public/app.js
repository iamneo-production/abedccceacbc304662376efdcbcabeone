var cells = document.querySelectorAll("input");

// Check for a winner.
function checkWinner() {
  var winner = "";

  // Check rows.
  for (var i = 0; i < 3; i++) {
    if (cells[i * 3].value == cells[i * 3 + 1].value && cells[i * 3 + 1].value == cells[i * 3 + 2].value) {
      winner = cells[i * 3].value;
      break;
    }
  }

  // Check columns.
  for (var i = 0; i < 3; i++) {
    if (cells[i].value == cells[i + 3].value && cells[i + 3].value == cells[i + 6].value) {
      winner = cells[i].value;
      break;
    }
  }

  // Check diagonals.
  if (cells[0].value == cells[4].value && cells[4].value == cells[8].value) {
    winner = cells[0].value;
  } else if (cells[2].value == cells[4].value && cells[4].value == cells[6].value) {
    winner = cells[2].value;
  }

  // Disable the buttons if there is a winner.
  if (winner) {
    for (var i = 0; i < 9; i++) {
      cells[i].disabled = true;
    }
  }
}

// Disable the buttons after a cell has been filled.
cells.forEach(function(cell) {
  cell.addEventListener("click", function() {
    cell.disabled = true;
    checkWinner();
  });
});