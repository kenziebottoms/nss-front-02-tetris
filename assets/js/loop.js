"use strict";

const GridFactory = require("./Grid");
let greenLight = false;
let grid;
let interval = 500;

const start = () => {
    grid = new GridFactory.Grid();
    greenLight = true;
    grid.addRandomPiece();
    setTimeout(loop, interval);
};

const loop = () => {
    if (greenLight) {
        greenLight = grid.moveDown();
        setTimeout(loop, interval);
    } else {
        stop();
    }
};

const stop = () => {
    alert("GAME OVER");
};

module.exports = {start, stop};