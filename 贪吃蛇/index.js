const snake = document.getElementById("snake");
const snakes = snake.getElementsByTagName("div");
const food = document.getElementById("food");
const restart = document.getElementById("button")
let dir;
let keyActive = true;
let isGameOver = false;

restart.addEventListener("click",()=>{
  location.reload();
})

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
  const FoodX = Math.floor(Math.random() * 30) * 10;
  const FoodY = Math.floor(Math.random() * 30) * 10;
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
      snake.insertAdjacentHTML("beforeend", "<div/>");
    }
  
    if (x < 0 || x > 290 || y < 0 || y > 290) {
      alert("GAME OVER!");
      return;
    }
  
    const tail = snakes[snakes.length - 1];
    tail.style.left = x + "px";
    tail.style.top = y + "px";
    snake.insertAdjacentElement("afterbegin", tail);
    setTimeout(Move,200);
  },0)

