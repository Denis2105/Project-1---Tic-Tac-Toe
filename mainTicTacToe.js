console.log('Tic Tac Toe');

// Tic Tac Toe variables
var main = document.getElementsByClassName('main')[0];
var playerTurn = 'X';
var X = 'X';
var O = 'O';

// Pokemon variables
var movePixels = 5;
var scale = 1.0;
var poke = document.getElementsByTagName('img')[0];
var startBtn = document.getElementById('startPokeWalk');
var goRight = true;
var start = document.getElementById('startPokeWalk');
var windowWidth = window.innerWidth;


// This function is very repetitive but it goes through all 8 possible win outcomes for both X and O and also a tie
function checkForWinner() {

  if (document.getElementById('Box1').innerHTML === X &&
      document.getElementById('Box2').innerHTML === X &&
      document.getElementById('Box3').innerHTML === X) {
        gameOver();
        document.getElementById('x-wins').style.display = "block";
      }
  if (document.getElementById('Box1').innerHTML === O &&
      document.getElementById('Box2').innerHTML === O &&
      document.getElementById('Box3').innerHTML === O) {
        gameOver();
        document.getElementById('o-wins').style.display = "block";
      }
  if (document.getElementById('Box4').innerHTML === X &&
      document.getElementById('Box5').innerHTML === X &&
      document.getElementById('Box6').innerHTML === X) {
        gameOver();
        document.getElementById('x-wins').style.display = "block";
      }
  if (document.getElementById('Box4').innerHTML === O &&
      document.getElementById('Box5').innerHTML === O &&
      document.getElementById('Box6').innerHTML === O) {
        gameOver();
        document.getElementById('o-wins').style.display = "block";
      }
  if (document.getElementById('Box7').innerHTML === X &&
      document.getElementById('Box8').innerHTML === X &&
      document.getElementById('Box9').innerHTML === X) {
        gameOver();
        document.getElementById('x-wins').style.display = "block";
      }
  if (document.getElementById('Box7').innerHTML === O &&
      document.getElementById('Box8').innerHTML === O &&
      document.getElementById('Box9').innerHTML === O) {
        gameOver();
        document.getElementById('o-wins').style.display = "block";
      }
  if (document.getElementById('Box1').innerHTML === X &&
      document.getElementById('Box4').innerHTML === X &&
      document.getElementById('Box7').innerHTML === X) {
        gameOver();
        document.getElementById('x-wins').style.display = "block";
      }
  if (document.getElementById('Box1').innerHTML === O &&
      document.getElementById('Box4').innerHTML === O &&
      document.getElementById('Box7').innerHTML === O) {
        gameOver();
        document.getElementById('o-wins').style.display = "block";
      }
  if (document.getElementById('Box2').innerHTML === X &&
      document.getElementById('Box5').innerHTML === X &&
      document.getElementById('Box8').innerHTML === X) {
        gameOver();
        document.getElementById('x-wins').style.display = "block";
      }
  if (document.getElementById('Box2').innerHTML === O &&
      document.getElementById('Box5').innerHTML === O &&
      document.getElementById('Box8').innerHTML === O) {
        gameOver();
        document.getElementById('o-wins').style.display = "block";
      }
  if (document.getElementById('Box3').innerHTML === X &&
      document.getElementById('Box6').innerHTML === X &&
      document.getElementById('Box9').innerHTML === X) {
        gameOver();
        document.getElementById('x-wins').style.display = "block";
      }
  if (document.getElementById('Box3').innerHTML === O &&
      document.getElementById('Box6').innerHTML === O &&
      document.getElementById('Box9').innerHTML === O) {
        gameOver();
        document.getElementById('o-wins').style.display = "block";
      }
  if (document.getElementById('Box1').innerHTML === X &&
      document.getElementById('Box5').innerHTML === X &&
      document.getElementById('Box9').innerHTML === X) {
        gameOver();
        document.getElementById('x-wins').style.display = "block";
      }
  if (document.getElementById('Box1').innerHTML === O &&
      document.getElementById('Box5').innerHTML === O &&
      document.getElementById('Box9').innerHTML === O) {
        gameOver();
        document.getElementById('o-wins').style.display = "block";
      }
  if (document.getElementById('Box3').innerHTML === X &&
      document.getElementById('Box5').innerHTML === X &&
      document.getElementById('Box7').innerHTML === X) {
        gameOver();
        document.getElementById('x-wins').style.display = "block";
      }
  if (document.getElementById('Box3').innerHTML === O &&
      document.getElementById('Box5').innerHTML === O &&
      document.getElementById('Box7').innerHTML === O) {
        gameOver();
        document.getElementById('o-wins').style.display = "block";
      }
    else {
      if (document.getElementById('Box1').innerHTML != "" &&
          document.getElementById('Box2').innerHTML != "" &&
          document.getElementById('Box3').innerHTML != "" &&
          document.getElementById('Box4').innerHTML != "" &&
          document.getElementById('Box5').innerHTML != "" &&
          document.getElementById('Box6').innerHTML != "" &&
          document.getElementById('Box7').innerHTML != "" &&
          document.getElementById('Box8').innerHTML != "" && document.getElementById('Box9').innerHTML != "") {
            gameOver();
            document.getElementById('tie').style.display = "block";
      }
    }
}

//Add event listener for each 'click' on each box
main.addEventListener('click', function(event) {

  //Created a function that alternates X's and O's each turn
  if (event.target.innerHTML === X || event.target.innerHTML === O) {
    return;

  } else {
      if (playerTurn === X) {
      event.target.innerHTML = X;
      playerTurn = O;
    }
    else if (playerTurn === O) {
      event.target.innerHTML = O;
      playerTurn = X;
    }
    checkForWinner();
  }
})

// Create a reset button
var reset = document.getElementById('reset');

reset.addEventListener('click', function() {
  location.reload();
});

// End Game once there is a winner
function gameOver() {
  for (var i = 1; i <= 9; i++) {
    var cssID = 'Box' + i;
    console.log(cssID);
    document.getElementById(cssID).style.display = "none";
  }
}

// Pokewalk function to make Pikachu run balk and forth
function pokeWalk() {
  var currentLeft = parseInt(poke.style.left);

  if (goRight === true && currentLeft >= (windowWidth - poke.width)) {
    console.log('come back check check');
    goRight = false;
  }
  if (goRight === false && currentLeft <= 0) {
    console.log('trigger');
    goRight = true;
  }
  if (goRight === true) {
    poke.style.transform = "scaleX(1)";
    poke.style.left = (currentLeft + movePixels) + 'px';
  }
  if (goRight === false) {
    poke.style.transform = "scaleX(-1)";
    poke.style.left = (currentLeft - movePixels) + 'px';
  }
}

function startPokeWalk() {
  setInterval(pokeWalk,20);
}

startBtn.addEventListener('click', startPokeWalk);
