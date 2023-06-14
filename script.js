window.onload = function () {
  const startButton = document.querySelector(".start-bbtn");
  const userNameDisplay = document.querySelector("#gameuser");
  const userButtonDisplay = document.querySelector("#btn1");
  const inputText = document.querySelector("#userName");

  // const restartButton = document.querySelector("");

  let game;

  function startGame() {
    game = new Game();
    game.start();
  }

  function displayButton() {
    userNameDisplay.innerHTML = inputText.value;
  }

  userButtonDisplay.addEventListener("click", function () {
    // console.log("clicked");
    displayButton();
  });

  startButton.addEventListener("click", function () {
    // console.log("clicked");
    startGame();

    //   This function begins to count score on the point of clicking the start botton
    let scoreCounter = 0;

    setInterval(() => {
      document.getElementById("score").innerHTML = `${scoreCounter}`;
      //   n = n + 1;
      scoreCounter++;

      //  Continue from Crash detection
    }, 1000);
  });
};

// tracking keydown events
// first we get the aircraft out of the html

let airCraft = document.querySelector("#myaircraft");
// console.log(aircraft);

// The x and y axis are the initial position of the aircraft even though we set it on the CSS
let xAxis = 0;
let yAxis = 0;

// The "speed" is the speed at which the aircraft moves
let speed = 45;

// since the aircraft can not go out of our browser window, and we dont know the size of screen on which this app is gonna be running, so we get the info and store it in a variable.
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

// Nothing happens until a kew down, we add an event listener to detect when a key is hit.

document.addEventListener("keydown", (e) => {
  // console.log(e);
  if (e.keyCode === 37) {
    // to move left
    if (xAxis > 0) {
      xAxis -= speed;
      // console.log(xAxis);
      myaircraft.style.left = xAxis + "px";
      myaircraft.style.transform = "rotate(270deg)";
    }
  } else if (e.keyCode === 38) {
    // move up
    if (yAxis > 0) {
      yAxis -= speed;
      myaircraft.style.top = yAxis + "px";
      myaircraft.style.transform = "rotate(-0deg)";
    }
  } else if (e.keyCode === 39) {
    // move right
    if (xAxis + 100 < windowWidth) {
      xAxis += speed;
      myaircraft.style.left = xAxis + "px";
      myaircraft.style.transform = "rotate(90deg)";
    }
  } else if (e.keyCode === 40) {
    //   move down
    if (yAxis + 100 < windowHeight) {
      yAxis += speed;
      myaircraft.style.top = yAxis + "px";
      myaircraft.style.transform = "rotate(180deg)";
    }
  }
});
