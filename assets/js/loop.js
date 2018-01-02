"use strict";

const GridFactory = require("./Grid");
let greenLight = false;
let grid;

const start = () => {
    grid = new GridFactory.Grid();
    greenLight = true;
    grid.addRandomPiece();
    setTimeout(loop, 1000);
};

const loop = () => {
    if (greenLight) {
        setTimeout(loop, 1000);
        console.log(grid.toString());
    }
};

const stop = () => {
    greenLight = false;
};

module.exports = {start, stop};