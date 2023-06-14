class bombs {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.player = document.querySelector("#myaircraft");
    this.grenade = document.getElementById("grenades");
    this.bomb1 = document.querySelector(".bomb1");
    this.bomb2 = document.querySelector(".bomb2");
    this.bomb3 = document.querySelector(".bomb3");
    this.bomb4 = document.querySelector(".bomb4");
    this.left = Math.floor(Math.random() * 300 + 70);
  }

  update() {
    this.player.move();

    // Check for collision and if an obstacle is still on the screen
    for (let i = 0; i < this.grenade.length; i++) {
      const bomb = this.grenades[i];
      bombs.move();

      // If the player's car collides with an obstacle
      if (this.player.didCollide(bomb)) {
        // Remove the obstacle element from the DOM
        bombs.grenade.remove();
        // Remove obstacle object from the array
        this.grenade.splice(i, 1);
        // Reduce player's lives by 1
        this.lives--;
        // Update the counter variable to account for the removed obstacle
        i--;
      } // If the obstacle is off the screen (at the bottom)
      else if (bomb.top > this.height) {
        // Increase the score by 1
        this.score++;
        // Remove the obstacle from the DOM
        bomb.grenades.remove();
        // Remove obstacle object from the array
        this.grenade.splice(i, 1);
        // Update the counter variable to account for the removed obstacle
        i--;
      }
    }

    // If the lives are 0, end the game
    if (this.lives === 0) {
      this.endGame();
    }

    // Create a new obstacle based on a random probability
    // when there is no other obstacles on the screen
    if (Math.random() > 0.98 && this.bombs.length < 1) {
      this.bombs.push(new Bomb(this.gameScreen));
    }
  }

  // Create a new method responsible for ending the game
  endGame() {
    this.player.element.remove();
    this.bombs.forEach((bomb) => bomb.element.remove());

    this.gameIsOver = true;

    // Hide game screen
    this.gameScreen.style.display = "none";
    // Show end game screen
    this.gameEndScreen.style.display = "block";
  }
}
