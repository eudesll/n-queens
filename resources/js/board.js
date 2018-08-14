class Board {
  constructor(board_size) {
    var total_tiles = board_size * board_size;
    var check_tile = (v, i) => (i < board_size ? 1 : 0);

    this.tiles = Array.apply(null, Array(total_tiles));
    this.tiles = this.tiles.map(check_tile);
  }
}