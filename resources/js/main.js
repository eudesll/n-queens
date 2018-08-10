var main = function() {
  var col_qt = 8;
  var canvas = document.getElementById('n_queens');

  var context = canvas.getContext("2d");

  var square_side = canvas.width / col_qt;
  var white_square_side = square_side;

  for (var i = 0; i < col_qt * col_qt; i += 1) {
    var x = i % col_qt;
    var y = Math.floor(i / col_qt);

    x = square_side * x;
    y = square_side * y;

    context.beginPath();
    context.rect(x, y, white_square_side, white_square_side);
    context.fillStyle = (i + y) % 2 ? "white" : "lightgray";
    context.fill();
  }
}

window.onload = function() {
  main();
}