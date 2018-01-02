"use strict";

const blockMaps = {
    "s": [
        [1, 0],
        [1, 1],
        [0, 1]
    ],
    "t": [
        [1, 0],
        [1, 1],
        [1, 0]
    ],
    "l": [
        [1, 0],
        [1, 0],
        [1, 1],
    ],
    "j": [
        [0, 1],
        [0, 1],
        [1, 1]
    ],
    "o": [
        [1, 1],
        [1, 1]
    ],
    "z": [
        [0, 1],
        [1, 1],
        [1, 0]
    ],
    "i": [
        [1],
        [1],
        [1],
        [1]
    ]
};
const colorCodes = {
    "i": "#FF0000",
    "l": "#00FF00",
    "z": "#8C417F",
    "j": "#FFFF00",
    "o": "#EB3CD5",
    "s": "#0000FF",
    "t": "#FFA32F",
    "": "#FFFFFF"
};

function Piece(letter, origin) {
    this.letter = letter;
    this.map = blockMaps[letter];
    this.color = colorCodes[letter];
    this.origin = origin;
}

module.exports = {Piece};