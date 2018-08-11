window.onload = function() {
  var cols_qtt = document.getElementById("cols_qtt").value;

  var drawer = new Drawer('n_queens', cols_qtt);
  drawer.draw();

  window.addEventListener("resize", () => { drawer.updateCanvasSize(); drawer.draw() });
}