.root "head"
.needs "Piece"
.needs "Board"

class Pawn signs Piece{
    int moveCount;

    int init(int x, int y, int color, Board board);
};