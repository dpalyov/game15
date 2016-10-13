function animteBall() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'orange';
    let ball = {x: 0, y: 0};
    let live = false;
    let speed = 5;  // speed of ball
    let  dirX = true; // move to right
    let  dirY = true; // move to down

    let targetX = 0;
    let targetY = 0;
    let targetFound = false;

    window.addEventListener('click', () => {
        targetX = event.clientX - event.clientX%speed;
        targetY = event.clientY - event.clientY%speed;

        if(!live) {
            live = true;
            targetFound = false;
            requestAnimationFrame(createBall);
        }
    });

    // createBall();
    function createBall() {
        ctx.clearRect(0, 0, 600, 600);
        ball.x -= ball.x %speed;
        ball.y -= ball.y %speed;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, 40, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();

        if ( dirX ) {
            ball.x += speed;
            if (ball.x >= targetX)
                dirX  = false;
        } else {
            ball.x -= speed;
            if (ball.x <= targetX)
                dirX  = true;
        }

        if ( dirY ) {
            ball.y += speed;
            if (ball.y >= targetY)
                dirY  = false;
        } else {
            ball.y -= speed;
            if (ball.y <= targetY )
                dirY  = true;

        }

        if((ball.x == targetX || ball.x == targetX + speed  || ball.x == targetX - speed )
            && (ball.y == targetY || ball.y == targetY + speed ||ball.y == targetY -speed  )){
            targetFound = true;
            live = false;
        }

        if(!targetFound) {
            requestAnimationFrame(createBall);
        }

    }
}
animteBall();