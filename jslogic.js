
let gameSize = 4;
let hole = {x: gameSize, y: gameSize};

drawGrid();
randomizeGrid();


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
    
}

function tryMove(name, loc, speed) {
    let elX = parseInt(loc.split("_")[1]);
    let elY = parseInt(loc.split("_")[0]);

    if ( ( (elX == hole.x) && (elY == hole.y+1 || elY == hole.y-1) ) || ( (elY == hole.y) && (elX == hole.x+1 || elX == hole.x-1) ) ) {
        $("[name='" + name + "']").animate({left: (hole.x-1) * 152 + "px", top: (hole.y-1) * 152 + "px"}, speed);
        $("[name='" + name + "']").attr("id",hole.y + "_" + hole.x);

        hole.x = elX;
        hole.y = elY;

        return true;
    } else {
        return false;
    }
}

//mouse over effects
$("div.Tile").mouseover(function() {
    $(this).animate( {fontSize: "65px"}, 100)
}).mouseout(function () {
    $(this).animate({fontSize: "45px"}, 100)
});

//mouse click effects
$("div.Tile").click(function() {
    tryMove($(this).attr("name"),$(this).attr("id"),150);
    checkEnd();
});

function checkEnd() {
    let isEnd = true;
    let elX = 0;
    let elY = 0;
    let elVal = 0;

    $("div.Tile").each(function() {
        elY = parseInt($(this).attr("id").split("_")[0]);
        elX = parseInt($(this).attr("id").split("_")[1]);
        elVal = parseInt($(this).attr("name").split("_")[1]);

        if ((((elY-1)*gameSize)+elX) != elVal) {
            isEnd = false;
        }
    });

    if (isEnd == true) {
        $("div.Tile").stop(true);

        alert("Game Over!");

       
    }
}
