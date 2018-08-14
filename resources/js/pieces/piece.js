class Piece {
  constructor(position) {
    this.position = position;
  }

  getX() {
    return this.position % this.cols_qtt;
  }

  getY() {
    return Math.floor(this.position / this.cols_qtt);
  }

  vision(board) {
    var movement_list = movements();
  }

  movements() {
    throw "must be implemented by a child";
  }
}