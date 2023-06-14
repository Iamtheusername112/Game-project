class Game {
  constructor() {
    this.startScreen = document.getElementById("landing-page");
    // console.log(this.startScreen);

    this.gameScreen = document.querySelector("#second-page");
    // console.log(this.gameScreen);
    this.gameEndScreen = document.getElementById("game-end");
    this.obstacles = [];
    this.height = 600;
    this.width = 500;
    this.lives = 3;
    this.gameIsOver = false;
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    // Set the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
  }

  gameScreen() {
    this.startScreen.style.display = "none";
    this.gameEndScreen.style.display = "none";
    this.gameScreen.style.display = "block";
  }

  gameEnd() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }
}

// const game = new Game();
// const startButton = document.querySelector(".start-bttn");
// startButton.onclick = function () {
//   console.log("clicked");
//   game.start();
// };
// startButton.addEventListener("click", () => {
//   console.log("clicked");
//   game.start();
// });
