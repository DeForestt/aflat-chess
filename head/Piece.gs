.root "head"


class Piece{
    contract{
        int x;
        int y;
        int color;
        adr face;
        adr selectedFace;

        adr board;
        adr die;
        adr draw;
        adr move;
    };
};

int killPiece();