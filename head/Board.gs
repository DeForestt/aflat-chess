.needs <Collections>
.root "head"
.needs "Piece"

class Board{
    LinkedList whitePieces;
    LinkedList blackPieces;

    Piece whiteKing;
    Piece blackKing;

    // turn will be 0 for white, 1 for black
    int turn;
    int selectedX;
    int selectedY;

    Piece inspect(int x, int y);
    int select(int x, int y);
    int move(int x, int y);
    int delete();

    int display();
    adr init();
};

class Pos{
    int x;
    int y;

    adr init(int x, int y);
};