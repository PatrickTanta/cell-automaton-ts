"use strict";
const BOARD_ROWS = 20;
const BOARD_COLS = 20;
const stateColors = ['#202020', '#FF5050', '#50FF50', '#5050FF'];
// generate the board
const board = [];
for (let r = 0; r < BOARD_ROWS; r++) {
    board.push(new Array(BOARD_COLS).fill(0));
}
const canvasId = 'app';
// initialize the canvas
const app = document.getElementById(canvasId);
if (app === null) {
    throw new Error(`Could not find canvas ${canvasId}`);
}
app.width = 800;
app.height = 800;
// define the height and width of out board
const CELL_WIDTH = app.width / BOARD_COLS;
const CELL_HEIGHT = app.height / BOARD_ROWS;
// over that canvas we initialize a 2d context
const ctx = app.getContext('2d');
if (ctx === null) {
    throw new Error("Could not initialize 2d context");
}
ctx.fillStyle = '#181818';
ctx.fillRect(0, 0, app.width, app.height);
function render(ctx, board) {
    ctx.fillStyle = '#202020';
    ctx.fillRect(0, 0, app.width, app.height);
    ctx.fillStyle = 'red';
    for (let r = 0; r < CELL_WIDTH; r++) {
        for (let c = 0; c < BOARD_COLS; c++) {
            const x = c * CELL_WIDTH;
            const y = r * CELL_HEIGHT;
            ctx.fillStyle = stateColors[board[r][c]];
            ctx.fillRect(x, y, CELL_WIDTH, CELL_HEIGHT);
        }
    }
}
// handle click
document.addEventListener('click', (e) => {
    const col = Math.floor(e.offsetX / CELL_WIDTH);
    const row = Math.floor(e.offsetY / CELL_HEIGHT);
    board[row][col] = 1;
    render(ctx, board);
});
