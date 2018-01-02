"use strict";

const GridFactory = require("./Grid");
let greenLight = false;
let grid;
let interval = 50;

// initialize and set off loop
const start = () => {
    grid = new GridFactory.Grid();
    greenLight = true;
    grid.addRandomPiece();
    setTimeout(loop, interval);
};

// one game cycle
const loop = () => {
    if (greenLight) {
        greenLight = grid.moveActivePieceDown();
        setTimeout(loop, interval);
    } else {
        stop();
    }
};

// game over
const stop = () => {
    alert("GAME OVER");
};

module.exports = {start, stop};