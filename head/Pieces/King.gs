.needs <std>
.root "head"
.needs "Piece"
.needs "Board"

class King signs Piece{
    adr init(int x, int y, int color, Board board);
};