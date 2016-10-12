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

function randomizeGrid() {
    let i = 0;

    while (i < (300*gameSize)) {
        let rndEl = parseInt((Math.random() * ((gameSize*gameSize)-1)) + 1);
        let ElName = "div_" + rndEl;

        if (tryMove(ElName,$("[name='" + ElName + "']").attr("id"),0) == true) {
            i++;
        }
    }

    //start the timer and clear the counters
    //refreshScores();

    //let startDate = new Date();
    //var numClicks = 0;
}

function tryMove(name, loc, speed) {
    let elX = parseInt(loc.split("_")[1]);
    let elY = parseInt(loc.split("_")[0]);

    if ( ( (elX == hole.x) && (elY == hole.y+1 || elY == hole.y-1) ) || ( (elY == hole.y) && (elX == hole.x+1 || elX == hole.x-1) ) ) {
        $("[name='" + name + "']").animate({left: (hole.x-1) * 152 + "px", top: (hole.y-1) * 152 + "px"}, speed);
        $("[name='" + name + "']").attr("id",hole.y + "_" + hole.x);

        hole.x = elX;
        hole.y = elY;

        if (speed != 0 ) {
            numClicks += 1;
        }

        return true;
    } else {
        return false;
    }
}