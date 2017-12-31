"use strict";

const GridFactory = require("./Grid");
let greenLight = false;
let grid;

const start = () => {
    grid = new GridFactory.Grid();
    greenLight = true;
    setTimeout(loop, 1000);
};

const loop = () => {
    if (greenLight) {
        setTimeout(loop, 1000);
        console.log("loop content");
    }
};

const stop = () => {
    greenLight = false;
};

module.exports = {start, stop};