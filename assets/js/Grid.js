"use strict";

const PieceFactory = require("./Piece");
const draw = require("./draw");
const letters = ["i", "l", "s", "z", "t", "j", "o"];

function Grid() {
    this.matrix = [
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""]
    ];
    this.population = [];
    this.activePiece = {};
    this.getCopyOfMatrix = () => {
        return this.matrix.map(row => {
            return row.slice();
        });
    };
    this.toString = grid => {
        let str = "";
        if (!grid) {
            grid = this.matrix;
        }
        grid.forEach(row => {
            row.forEach(item => {
                str += `${item == "" ? "-" : item} `;
            });
            str += "\n";
        });
        return str;
    };
    
    this.addPiece = (letter, origin) => {
        let piece = new PieceFactory.Piece(letter, origin);
        if (this.place(piece, origin)) {
            this.population.push(piece);
            this.activePiece = piece;
        } else {
            alert("Game OVER!!!");
        }
    };
    
    // moves active piece down one row
    this.moveDown = piece => {
        if (!piece) {
            piece = this.activePiece;
        }
        this.place(piece, [piece.origin[0]+1, piece.origin[1]]);
    };

    // returns a grid without the piece on it
    this.forget = piece => {
        let grid = this.getCopyOfMatrix();
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
        if (origin[0] == 0 && origin[1] == 0) {
            grid = this.getCopyOfMatrix();
        }

        // covers indexOutOfBounds
        if (piece.map.length+piece.origin[0] > grid.length ||
            piece.map[0].length+piece.origin[1] > grid[0].length) {
            return false;
        }
        // checks collisions
        for (let y=0; y<piece.map.length; y++) {
            for (let x=0; x<piece.map[y].length; x++) {
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
            return true;
        } else {
            console.log(`${piece.letter} doesn't fit at ${piece.origin[1], piece.origin[0]}`);
            return false;
        }
    };

    this.addRandomPiece = () => {
        let number = parseInt(Math.random()*(letters.length-1));
        this.addPiece(letters[number], [0,this.matrix[0].length/2-1]);
    };
}

module.exports = {Grid};