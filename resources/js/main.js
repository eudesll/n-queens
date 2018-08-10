var main = function() {
  var col_qt = 8;
  var canvas = document.getElementById('n_queens');

  var context = canvas.getContext("2d");
  context.fillStyle = "lightgray";
  context.fillRect(0, 0, canvas.width, canvas.height);

  var square_side = canvas.width / col_qt;
  var white_square_side = square_side - 6;

  for (var i = 0; i < 8 * 8; i += 1) {
    var x = i % col_qt;
    var y = Math.floor(i / col_qt);

    x = square_side * x;
    y = square_side * y;

    context.beginPath();
    context.rect(x, y, white_square_side, white_square_side);
    context.fillStyle = (i + y) % 2 ? "white" : "gray";
    context.fill();
  }
}

window.onload = function() {
  main();
}