"use strict";

const PieceFactory = require("./Piece");

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
        this.population.push(piece);
        this.activePiece = piece;
        // TODO: move to refresh grid fn probably
        // loop through piece.map
        for (let y=0; y<piece.map.length; y++) {
            for (let x=0; x<piece.map[0].length; x++) {
                // if this part of the letter is positive space
                if (piece.map[y][x] == 1) {
                    this.matrix[y+piece.origin[0]][x+piece.origin[1]] = piece.letter;
                }
            }
        }
        return this.matrix;
    };

    this.canMoveDown = piece => {
        let map = piece.map;
        let origin = piece.origin;
        // finds lowest positive space in map
        for (let x=0; x<map[0].length; x++) {
            for (let y=map.length-1; y>= 0; y--) {
                if (map[y][x] == 1) {
                    // checks if lowest positive space in map collides with other positive space
                    if (this.matrix[origin[0]+y+1][origin[1]+x] != "") {
                        return false;
                    }
                    break;
                }
            }
        }
        return true;
    };
    
    // moves active piece down one row
    this.moveDown = () => {
        let piece = this.activePiece;
        let map = piece.map;
        let origin = piece.origin;
        if (this.canMoveDown(piece)) {
            for (let x=0; x<map[0].length; x++) {
                for (let y=map.length-1; y>= 0; y--) {
                    this.matrix[origin[0]+y][origin[1]+x] = "";
                    this.matrix[origin[0]+y+1][origin[1]+x] = piece.letter;
                }
            }
        } else {
            alert("can't move active piece down");
        }
    };
}

module.exports = {Grid};