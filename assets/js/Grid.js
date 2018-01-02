"use strict";

const PieceFactory = require("./Piece");
const draw = require("./draw");
const letters = ["i", "l", "s", "z", "t", "j", "o"];
let gameOver = false;

function Grid() {
    this.matrix = [
        ["", "", "", "", "", "", "", "", "", ""],   // 1
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],   // 5
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],   // 10
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],   // 15
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""]    // 20
    ];
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
        let fits = this.fits(piece, origin);
        if (fits > 0) {
            this.place(piece, origin);
            this.activePiece = piece;
        } else if (fits == -2) {
            gameOver = true;
        }
    };
    
    // moves active piece down one row
    this.moveDown = piece => {
        if (!piece) {
            piece = this.activePiece;
        }
        let fits = this.fits(piece, [piece.origin[0]+1, piece.origin[1]]);
        if (fits > 0) {
            this.matrix = this.forget(piece);
            this.place(piece, [piece.origin[0]+1, piece.origin[1]]);
        } else {
            this.addRandomPiece();
        }
        return !gameOver;
    };

    this.scroll = () => {
        this.matrix.unshift(["", "", "", "", "", "", "", "", "", ""]);
        this.matrix.pop();
        draw.redraw(this.matrix);
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

    // true: the piece fits
    // -1: out of bounds
    // -2: collision
    this.fits = (piece, origin) => {
        let grid = this.forget(piece);
        if (origin[0] == 0) {
            grid = this.getCopyOfMatrix();
        }
        // indexOutOfBounds
        if (piece.map.length+piece.origin[0] > grid.length-1 ||
            piece.map[0].length+piece.origin[1] > grid[0].length-1) {
            return -1;
        }
        // collisions
        for (let y=0; y<piece.map.length; y++) {
            for (let x=0; x<piece.map[y].length; x++) {
                if (grid[y+origin[0]][x+origin[1]] != "") {
                    return -2;
                }
            }
        }
        return true;
    };

    this.place = (piece, origin) => {
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
    };

    this.addRandomPiece = () => {
        let number = parseInt(Math.random()*(letters.length-1));
        this.addPiece(letters[number], [0,this.matrix[0].length/2-1]);
    };
}

module.exports = {Grid};