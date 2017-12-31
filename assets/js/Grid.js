"use strict";

const PieceFactory = require("./Piece");
const draw = require("./draw");

function Grid() {
    this.matrix = [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]
    ];
    this.population = [];
    this.activePiece = {};
    this.addPiece = (letter, origin) => {
        let piece = new PieceFactory.Piece(letter, origin);
        if (this.fits(piece, origin)) {
            this.population.push(piece);
            this.activePiece = piece;
            this.place(piece, origin);
        }
    };
    
    // moves active piece down one row
    this.moveDown = piece => {
        if (!piece) {
            piece = this.activePiece;
        }
        this.forget(piece);
        this.place(piece, [piece.origin[0]+1, piece.origin[1]]);
    };

    // returns a grid without the piece on it
    this.forget = piece => {
        let grid = this.matrix.slice();
        let origin = piece.origin;
        for (let y=0; y<piece.map.length; y++) {
            for (let x=0; x<piece.map[y].length; x++) {
                grid[y+origin[0]][x+origin[1]] = "";
            }
        }
        return grid;
    };

    this.fits = (piece, origin) => {
        let grid = this.forget(piece);

        // covers indexOutOfBounds
        if (piece.map.length+piece.origin[0] > grid.length ||
            piece.map[0].length+piece.origin[1] > grid[0].length) {
            return false;
        }
        // checks collisions
        for (let y=0; y<piece.map.length; y++) {
            for (let x=0; x<piece.map.length[y]; x++) {
                if (grid[y+origin[0]][x+origin[1]] != "") {
                    return false;
                }
            }
        }
        return true;
    };

    this.place = (piece, origin) => {
        if (this.fits(piece, origin)) {
            let map = piece.map;
            piece.origin = origin;
            for (let y=0; y<map.length; y++) {
                for (let x=0; x<map[y].length; x++) {
                    if (map[y][x]) {
                        this.matrix[y+origin[0]][x+origin[1]] = piece.letter;
                    }
                }
            }
            draw.redraw(this.matrix);
        } else {
            console.log(`${piece.letter} doesn't fit at ${piece.origin[1], piece.origin[0]}`);
        }
    };
}

module.exports = {Grid};