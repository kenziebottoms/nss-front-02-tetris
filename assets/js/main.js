"use strict";

let unit = 25;

const primeCanvas = canvas => {
    canvas.height = 100;
    canvas.width = 475;
    return canvas.getContext("2d");
};

const drawI = (ctx, x, y) => {
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, unit, unit*4);
};

const drawO = (ctx, x, y) => {
    ctx.fillStyle = "orchid";
    ctx.fillRect(x, y, unit*2, unit*2);
};

const drawT = (ctx, x, y) => {
    ctx.fillStyle = "orange";
    ctx.fillRect(x, y, unit, unit*3);
    ctx.fillRect(x+unit, y+unit, unit, unit);
};

const drawJ = (ctx, x, y) => {
    ctx.fillStyle = "yellow";
    ctx.fillRect(x+unit, y, unit, unit*3);
    ctx.fillRect(x, y+unit*2, unit, unit);
};

const drawL = (ctx, x, y) => {
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, unit, unit*3);
    ctx.fillRect(x+unit, y+unit*2, unit, unit);
};

const drawS = (ctx, x, y) => {
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, unit, unit*2);
    ctx.fillRect(x+unit, y+unit, unit, unit*2);
};

const drawZ = (ctx, x, y) => {
    ctx.fillStyle = "purple";
    ctx.fillRect(x, y+unit, unit, unit*2);
    ctx.fillRect(x+unit, y, unit, unit*2);
};

let ctx = primeCanvas(document.getElementById("canvas"));
drawO(ctx, 0, 0);
drawI(ctx, 75, 0);
drawT(ctx, 125, 0);
drawJ(ctx, 200, 0);
drawL(ctx, 275, 0);
drawS(ctx, 350, 0);
drawZ(ctx, 425, 0);