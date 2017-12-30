"use strict";

const GridFactory = require("./Grid");

let grid = new GridFactory.Grid();
grid.addPiece("s", [0, 0]);
grid.moveDown();
console.log(grid);