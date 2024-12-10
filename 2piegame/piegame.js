let scoreElement = document.getElementById('score');
let highScoreElement = document.getElementById('hi-score');
let gamecontainer = document.querySelector('.game-container');
let basket = document.getElementById('basket');
let action = document.getElementById('actions');

let score = 0;
let gameMode = "play";
let life= 3


let highScore = localStorage.getItem('high-score') || 0;
highScoreElement.innerText = `High-Score : ${highScore}`;

function checkgamemode() {
  if (gameMode == "play") {
    gameMode = "pause";
    action.innerText = "Play";
  } else if (gameMode == "pause") {
    gameMode = "play";
    action.innerText = "Pause";
  }
}
action.addEventListener('click', checkgamemode);

// Basket movement
document.addEventListener('mousemove', (e) => {
  if (gameMode == "pause") return;

  let basketPosition = e.clientX - basket.offsetWidth / 2;
  if (basketPosition < 0) {
    basketPosition = 0;  // Prevent moving past the left edge
  } else if (basketPosition > gamecontainer.clientWidth - basket.offsetWidth) {
    basketPosition = gamecontainer.clientWidth - basket.offsetWidth;  // Prevent moving past the right edge
  }

  basket.style.left = basketPosition + 'px';
});

if (window.innerWidth <= 370) {
  document.addEventListener('touchstart', (e) => {
    if (gameMode == "pause") return;
    startX = e.changedTouches[0].clientX;
  });
  document.addEventListener('touchend', (e) => {
    if (gameMode == "pause") return;
    endX = e.changedTouches[0].clientX;
    let change = startX - endX;
    let basketLeft = parseInt(window.getComputedStyle(basket).left, 10) || 0;
    let newPosition = basketLeft - change;

    // Ensure the basket does not move past the edges
    if (newPosition < 0) {
      newPosition = 0;
    } else if (newPosition > gamecontainer.clientWidth - basket.offsetWidth) {
      newPosition = gamecontainer.clientWidth - basket.offsetWidth;
    }

    basket.style.left = newPosition + 'px';
  });
}


// Create falling objects
function createFallingObject() {
  if (gameMode == "pause") return;

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
          life = life-1;
          console.log(life)
          //reset
          if (life==0){
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

    if (objectTop >= gamecontainer.clientWidth - object.offsetWidth) {
      object.remove();
    }

    if (gameMode == "play") {
      requestAnimationFrame(fallObject); // Continue animation
    }
  }

  fallObject();
}

if (life==0){
  location.reload();

}
setInterval(createFallingObject, 1000); // Create falling objects every 1 second
