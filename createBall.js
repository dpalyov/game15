(function animteBall() {


    ctx.fillStyle = 'red';
    let ball = {x: 5, y: 4};
    let live = false;

    //let timer = setInterval(createBall,15);
    let  dirX = true; // move to right
    let  dirY = true; // move to down

    let targetX = 0;
    let targetY = 0;
    let targetFound = false;

    window.addEventListener('click', () => {
        targetX = event.clientX - event.clientX%5;
        console.log(targetX);

        targetY = event.clientY - event.clientY%4;
        console.log(targetY)
        console.log(live);
        if(!live) {
            live = true;
            targetFound = false;
            requestAnimationFrame(createBall);
        }
    });


    // createBall();

    function createBall() {
        ctx.clearRect(0, 0, 800, 600);

        ctx.beginPath();
        ctx.arc(ball.x, ball.y, 30, 0, Math.PI * 2);
        ctx.fill();

        if ( dirX ) {
            ball.x += 5;
            if (ball.x >= targetX)
                dirX  = false;
        } else {
            ball.x -= 5;
            if (ball.x <= targetX)
                dirX  = true;
        }

        if ( dirY ) {
            ball.y += 4;
            if (ball.y >= targetY)
                dirY  = false;
        } else {
            ball.y -= 4;
            if (ball.y <= targetY )
                dirY  = true;

        }

        if(ball.x == targetX && ball.y == targetY){
            targetFound = true;
            live = false;
            console.log(ball);
        }


        if(!targetFound) {
            requestAnimationFrame(createBall);
        }

    }


})();