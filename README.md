# Tetris

![](https://img.shields.io/badge/template-none-lightgrey.svg)
![](https://img.shields.io/badge/js-jquery-blue.svg)
![](https://img.shields.io/badge/modularity-browserify-yellow.svg)
![](https://img.shields.io/badge/css_preprocessor-scss-ff69b4.svg)
![](https://img.shields.io/badge/mvp-unfinished-yellow.svg)

## Run Locally

```
git clone git@github.com:kenziebottoms/nss-front-02-tetris.git
cd nss-front-02-tetris
npm install
grunt
hs -o
```

## Requirements

Investigate the [HTML5 canvas tag](http://www.html5canvastutorials.com/) to

- [x] Build the 7 different Tetris game shapes.
- [x] Display them somewhere on the canvas.
- [ ] Outline a separate gameplay area in the canvas.
- [ ] Allow the user to
[drag one of the shapes](https://jsfiddle.net/davidbarszczak/EnZEa/) from the
staging area to the game area.
  - [ ] As soon as the user lets go of the mouse button, the shape should start moving towards the bottom of the game area.

### Full Tetris Game

Use the HTML5 canvas tag to build a browser based version of the classic game, Tetris.

- [x] Randomly pick one of the seven shapes and place it at the top of the game area.
- [ ] Allow user to use the arrow keys to move left, right, or down.
- [ ] Allow user to rotate the piece with the w and r keys.
- [ ] Allow user to press spacebar to move the piece down into position quickly.
- [ ] As soon as a row is filled, remove all blocks in the row.

## Resources

Fun stuff with Canvas: [21 Canvas Experiments](http://code.tutsplus.com/articles/21-ridiculously-impressive-html5-canvas-experiments--net-14210)