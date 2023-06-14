class player {
  constructor(gameScreen, left, top, width, height, xAxis, yAxis) {
    this.airCraft = document.querySelector("#myaircraft");
    this.button = document.getElementById("start-btn");
    this.this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
    this.speed = 30;
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    // this.directionX = 0;
    // this.directionY = 0;
  }

  didCollide(bomb) {
    const playerRect = this.grenade.getBoundingClientRect();
    const obstacleRect = bomb.grenade.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
