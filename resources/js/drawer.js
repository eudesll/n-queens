class Drawer {
  constructor(canvas_selector, cols_qtt) {
    this.canvas = document.getElementById(canvas_selector);
    this.cols_qtt = cols_qtt;
    this.context = this.canvas.getContext("2d");

    this.updateCanvasSize();
  }

  updateCanvasSize() {
    this.canvas.width = window.innerWidth / 2;
    this.canvas.height = this.canvas.width;

    this.square_side = this.canvas.width / this.cols_qtt;
  }

  createPieceImage(x, y) {
    var piece_size = this.square_side - 48;
    var piece = new Image();
    piece.onload = () => this.context.drawImage(piece, x, y, piece_size, piece_size);
    piece.src = 'https://openclipart.org/image/60px/svg_to_png/18663/portablejim-Chess-tile-Queen-1.png';
  }

  drawBoard() {
    var squares_qtt = this.cols_qtt * this.cols_qtt;

    for (var i = 0; i < squares_qtt; i++) {
      var x = i % this.cols_qtt;
      var y = Math.floor(i / this.cols_qtt);
      var even_square = (i + y) % 2 == 0;
  
      x = this.square_side * x;
      y = this.square_side * y;
  
      this.context.beginPath();
      this.context.rect(x, y, this.square_side, this.square_side);
      this.context.fillStyle = even_square ? "white" : "lightgray";
      this.context.fill();
    }
  }

  drawPieces() {
    var squares_qtt = this.cols_qtt * this.cols_qtt;

    for (var i = 0; i < squares_qtt; i++) {
      var x = i % this.cols_qtt;
      var y = Math.floor(i / this.cols_qtt);
  
      x = this.square_side * x + 24;
      y = this.square_side * y + 24;
  
      this.createPieceImage(x, y);
    }
  }

  draw(pieces) {
    this.drawBoard();
    this.drawPieces(pieces);
  }
}