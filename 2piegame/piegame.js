let scoreElement = document.getElementById('score');
let highScoreElement = document.getElementById('hi-score');
let gamecontainer = document.querySelector('.game-container');
let basket = document.getElementById('basket');

let score = 0;
let life = 3;

// Get high score from local storage
let highScore = localStorage.getItem('high-score') || 0;
highScoreElement.innerText = `High-Score : ${highScore}`;

// Basket movement 
document.addEventListener('mousemove', (e) => {
  // Get the mouse position relative to the viewport
  let basketPosition = e.clientX - basket.offsetWidth / 2;
  
  // Ensure the basket stays within the game container bounds
  if (basketPosition < 0) {
    basketPosition = 0; // Prevent moving past the left edge
  } else if (basketPosition > gamecontainer.clientWidth - basket.offsetWidth) {
    basketPosition = gamecontainer.clientWidth - basket.offsetWidth; // Prevent moving past the right edge
  }

  basket.style.left = basketPosition  + 'px';
});


if (score>6){
  console.log("bot")
}


// Create falling objects
function createFallingObject() {
  let object = document.createElement('div');
  object.classList.add('falling-object');
  let random = Math.floor(Math.random() * 4); // Choose an image randomly
  let backgrounds = ["../img/apple.PNG", "../img/cherry.PNG", "../img/peachpie.PNG", "../img/shrekpie.PNG"];

  object.style.background = `url("${backgrounds[random]}")`;
  object.style.left = Math.random() * (gamecontainer.clientWidth - 30) + 'px';
  object.style.top = '0px';
  object.style.backgroundPosition = 'center';
  object.style.backgroundRepeat = 'no-repeat';
  object.style.backgroundSize = 'cover';

  if (backgrounds[random] === "../img/shrekpie.PNG") {
    object.classList.add('bomb'); // Add the 'bomb' class
  }

  gamecontainer.appendChild(object);

  // Animate the falling object
  function fallObject() {
    let objectTop = parseInt(window.getComputedStyle(object).top, 10);

    // Adjust falling speed
    let fallSpeed = 2 + Math.random() * 4; // Slight variation in speed

    object.style.top = objectTop + fallSpeed + 'px';

    // Check for collision with the basket
    if (objectTop >= gamecontainer.clientHeight - basket.offsetHeight - object.offsetHeight) {
      let objectLeft = object.offsetLeft;
      let objectRight = objectLeft + object.offsetWidth;
      let basketLeft = basket.offsetLeft;
      let basketRight = basketLeft + basket.offsetWidth;

      if (objectLeft < basketRight && objectRight > basketLeft) {
        if (object.classList.contains('bomb')) {
          life = life - 1;
          console.log(life)
          // Reset if life reaches zero
          if (life == 0) {
            location.reload();
          }
        } else {
          score++;
        }

        scoreElement.textContent = `Score : ${score}`;
        if (score >= highScore) {
          highScore = score;
          localStorage.setItem('high-score', highScore);
          highScoreElement.innerText = `High-Score : ${highScore}`;
        }

        object.remove();
        return; // Stop the falling object
      }
    }

    // Remove object if it falls out of view
    if (objectTop >= gamecontainer.clientHeight - object.offsetHeight) {
      object.remove();
    }

    requestAnimationFrame(fallObject); // Continue animation
  }
 
  fallObject();
}




let intervalTime = 1000; // Initial interval time of 1000ms
let intervalID; // Declare intervalID outside to access it for clearing
let lastScore = 0; // To keep track of the last score when interval was updated




// Function to update the interval dynamically
function updateInterval() {
  // Only update interval when score increases and reaches a new multiple of 5
  if (score % 2 === 0 && score > lastScore) {
    // Decrease interval by 100ms, but never below 200ms
    intervalTime = Math.max(200, intervalTime - 100); 

    console.log(`Interval reduced to: ${intervalTime}`);

    // Clear the previous interval and start a new one with the updated interval time
    clearInterval(intervalID);
    intervalID = setInterval(() => {
      createFallingObject();
    }, intervalTime);

    // Update the last score when the interval is updated
    lastScore = score;
  }
}

// Start the initial falling object interval
intervalID = setInterval(() => {
  createFallingObject();
}, intervalTime);

// Check interval update every time the score changes
setInterval(updateInterval, 500); // Check every 500ms for interval update
