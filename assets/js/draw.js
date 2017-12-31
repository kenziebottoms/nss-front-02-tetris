"use strict";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const unit = 25;
const colorCodes = {
    "i": "red",
    "l": "green",
    "z": "purple",
    "j": "yellow",
    "o": "orchid",
    "s": "blue",
    "t": "orange",
    "": "white"
};

const redraw = grid => {
    for (let y=0; y<grid.length; y++) {
        for (let x=0; x<grid[y].length; x++) {
            drawPixel(x, y, colorCodes[grid[y][x]]);
        }
    }
};

const drawPixel = (x, y, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x*unit, y*unit, unit, unit);
};

module.exports = {redraw};