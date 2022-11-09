const snake = document.getElementById("snake");
const snakes = snake.getElementsByTagName("div");
const food = document.getElementById("food");
const restart = document.getElementById("button");
const scoreSpan = document.getElementById("score");
const levelSpan = document.getElementById("level");
let dir;
let keyActive = true;
let isGameOver = false;
let score = 0;
let level = 0;

restart.addEventListener("click", () => {
  location.reload();
});

const KeyAllow = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
const KeyAgainst = {
  ArrowUp: "ArrowDown",
  ArrowDown: "ArrowUp",
  ArrowRight: "ArrowLeft",
  ArrowLeft: "ArrowRight",
};

document.addEventListener("keydown", (event) => {
  if (keyActive && KeyAllow.includes(event.key)) {
    if (snakes.length < 2 || KeyAgainst[dir] != event.key) {
      dir = event.key;
      keyActive = false;
    }
  }
});

function ChangeFood() {
  const FoodX = Math.floor(Math.random() * 17) * 10;
  const FoodY = Math.floor(Math.random() * 17) * 10;
  food.style.top = FoodY + "px";
  food.style.left = FoodX + "px";
}
ChangeFood();
setTimeout(function Move() {
  keyActive = true;
  const head = snakes[0];
  let x = head.offsetLeft;
  let y = head.offsetTop;
  switch (dir) {
    case "ArrowUp":
      y -= 10;
      break;
    case "ArrowDown":
      y += 10;
      break;
    case "ArrowLeft":
      x -= 10;
      break;
    case "ArrowRight":
      x += 10;
      break;
  }

  if (
    head.offsetTop === food.offsetTop &&
    head.offsetLeft === food.offsetLeft
  ) {
    ChangeFood();
    score++;
    scoreSpan.textContent = score;
    if (score % 5 == 0 && level <= 5) {
      level++;
      levelSpan.textContent = level + 1;
    }
    snake.insertAdjacentHTML("beforeend", "<div/>");
  }

  if (x < 0 || x > 170 || y < 0 || y > 170) {
    alert("GAME OVER!");
    return;
  }

  for (let i = 0; i < snakes.length - 1; i++) {
    if (snakes[i].offsetLeft === x && snakes[i].offsetTop === y) {
      alert("GAME OVER");
      return;
    }
  }

  const tail = snakes[snakes.length - 1];
  tail.style.left = x + "px";
  tail.style.top = y + "px";
  snake.insertAdjacentElement("afterbegin", tail);
  setTimeout(Move, 300 - level * 40);
}, 0);
