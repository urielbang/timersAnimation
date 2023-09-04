var movingRight = setInterval(moveRight, 5);
var counter = 0;
var novingDown;
function moveRight() {
  cnatain.style.left = `${counter++}px`;
  if (counter == 150) {
    clearInterval(movingRight);
    counter = 0;
    novingDown = setInterval(moveDown, 5);
  }
}
var movingLeft;
function moveDown() {
  cnatain.style.top = `${counter++}px`;
  if (counter == 150) {
    clearInterval(novingDown);

    movingLeft = setInterval(moveLeft, 5);
  }
}
var movingUp;
function moveLeft() {
  cnatain.style.left = `${counter--}px`;
  if (counter == 0) {
    clearInterval(movingLeft);
    counter = 150;
    movingUp = setInterval(moveUp, 5);
  }
}

function moveUp() {
  cnatain.style.top = `${counter--}px`;
  if (counter == 0) {
    clearInterval(movingUp);
  }
}
