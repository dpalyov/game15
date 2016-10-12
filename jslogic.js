/**
 * Created by panayoni on 12/10/2016.
 */
let gameSize = 4;
let hole = {x: gameSize, y: gameSize};
let numClicks = 0;
let arrScores = [];

drawGrid();
randomizeGrid();

let startDate = new Date();

function drawGrid() {
    let counter = 0;

    for (let y=1; y<(gameSize+1); y++) {
        for (let x=1; x<(gameSize+1); x++) {
            counter += 1;

            if (counter < (gameSize*gameSize)) {
                $("body").append("<div class='Tile' name='div_" + counter + "' id='" + y + "_" + x + "' style='left:" + (x-1)*152 + "px; top:" + (y-1)*152 + "px;'>" + counter + "</div>");
            }
        }
    }
}