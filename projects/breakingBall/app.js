const closeBtn = document.getElementById("close-btn");
const rulesBtn = document.getElementById("rules-btn");
const rulesContainer = document.getElementById("rules");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//plan ------------------------
//create canvas context
//draw ball and paddle and bricks and score
//animation: update function --> redraw the canvas --> requestAnimationFrame(cb)
//move paddle
//move the ball
// boundaries
// bricks break
// restart the game

let score = 0;

const brickRow = 9;
const brickColumn = 5;

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  speed: 4,
  dx: 4,
  dy: -4,
};

const paddle = {
  x: canvas.width / 2 - 40,
  y: canvas.height - 20,
  w: 80,
  h: 10,
  speed: 8,
  dx: 0,
};

//create the data structure for bricks
const brickInfo = {
  w: 70,
  h: 20,
  padding: 10,
  offsetX: 45,
  OffsetY: 60,
  visible: true,
};

randomColor = function () {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

const bricks = [];
for (let i = 0; i < brickRow; i++) {
  bricks[i] = [];
  for (let j = 0; j < brickColumn; j++) {
    const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
    const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.OffsetY;
    const color = randomColor();
    bricks[i][j] = { x, y, color, ...brickInfo };
  }
}

drawBricks = function () {
  bricks.forEach((row) => {
    row.forEach((brick) => {
      ctx.beginPath();
      ctx.rect(brick.x, brick.y, brick.w, brick.h);
      ctx.fillStyle = brick.visible ? `${brick.color}` : "transparent";
      ctx.fill();
      ctx.closePath();
    });
  });
};

// done drawing bricks -------------------

drawBall = function () {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
  ctx.fillStyle = "#0095dd";
  ctx.fill();
  ctx.closePath();
};

drawPaddle = function () {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
  ctx.fillStyle = "#0095dd";
  ctx.fill();
  ctx.closePath();
};

drawScore = function () {
  ctx.font = "20px Arial";
  ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
};

draw = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawScore();
  drawBricks();
};

//-------------------------------------
//Functions
movePaddle = function () {
  paddle.x += paddle.dx;
  if (paddle.x + paddle.w > canvas.width) {
    paddle.x = canvas.width - paddle.w;
  }
  if (paddle.x < 0) {
    paddle.x = 0;
  }
};

keyDown = function (event) {
  if (event.key === "Right" || event.key === "ArrowRight") {
    paddle.dx = paddle.speed;
  }
  if (event.key === "Left" || event.key === "ArrowLeft") {
    paddle.dx = -paddle.speed;
  }
};

keyUp = function (event) {
  if (
    event.key === "Right" ||
    event.key === "Left" ||
    event.key === "ArrowRight" ||
    event.key === "ArrowLeft"
  ) {
    paddle.dx = 0;
  }
};

moveBall = function () {
  ball.x += ball.dx;
  ball.y += ball.dy;

  if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
    ball.dx *= -1;
  }
  if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
    ball.dy *= -1;
  }

  if (
    ball.x - ball.size > paddle.x &&
    ball.x + ball.size < paddle.x + paddle.w
  ) {
    if (ball.y + ball.size > paddle.y) {
      ball.dy *= -1;
    }
  }

  bricks.forEach((column) => {
    column.forEach((brick) => {
      if (brick.visible) {
        if (
          ball.x - ball.size > brick.x &&
          ball.x + ball.size < brick.x + brick.w &&
          ball.y + ball.size > brick.y &&
          ball.y - ball.size < brick.y + brick.h
        ) {
          brick.visible = false;
          ball.dy *= -1;
          score += 1;
        }
      }
    });
  });

  if (ball.y + ball.size >= canvas.height) {
    score = 0;
    bricks.forEach((column) => {
      column.forEach((brick) => {
        brick.visible = true;
      });
    });
  }
};

update = function () {
  movePaddle();
  moveBall();
  draw();
  window.requestAnimationFrame(update);
};

update();
//Event listener
rulesBtn.addEventListener("click", (e) => {
  rulesContainer.classList.remove("hide");
});
closeBtn.addEventListener("click", (e) => {
  rulesContainer.classList.add("hide");
});

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
