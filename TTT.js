console.log('Tic Tac Toe');

// tic tac toe variables

var main = document.getElementsByClassName('main')[0];
var playerTurn = 'X';
var X = 'X';
var O = 'O';

// pokemon variables
var movePixels = 5;
var scale = 1.0;
var poke = document.getElementsByTagName('img')[0];
var startBtn = document.getElementById('startPokeWalk');
var goRight = true;
var start = document.getElementById('startPokeWalk');
var windowWidth = window.innerWidth;

// Arrays were meant to be used for For Loop below:

// var winningCombos = [ [Box1, Box2, Box3],
//                       [Box4, Box5, Box6],
//                       [Box7, Box8, Box9],
//                       [Box1, Box4, Box7],
//                       [Box2, Box5, Box8],
//                       [Box3, Box6, Box9],
//                       [Box1, Box5, Box9],
//                       [Box3, Box5, Box7],
//                     ];

// Winning logic
// FOR LOOP, if 3 boxes in a row or in a column are all X's  or all O's, stop loop and alert that Player X or Player O wins.
// Does diagonal win function work the same? guessing no-repeat
// else, draw and press reset

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
      // (document.getElementsByClassName('boxes').innerHTMLs === X || document.getElementsByClassName('boxes').innerHTML === O);
      // gameOver();
      // document.getElementById('tie').style.display = "block";

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

  // For Loop was planned but i got too confused with strategy so swapped back to if's as above.
// for(var i = 0; i < winningCombos.length; i++) {
// if all box is 'not empty', so that it doesn't pick up 3 empty  boxes and logs 'win'
//   if (winningCombos[i][0] != '' &&
//       winningCombos[i][1] != '' &&
//       winningCombos[i][2] != '') {
//     // if all box image is the same
//     // arguments should always be in pairs if comparing with eavach other, can't use a===b===c, hence a===b&&a===c&&b===c
//     if (winningCombos[i][0] === winningCombos[i][1] && winningCombos[i][0] === winningCombos[i][2] && winningCombos[i][1] === winningCombos[i][2]) {
//       console.log('fuck yeah');
//     }
//       if (winningCombos[i][0] === X && winningCombos[i][1] === X && winningCombos[i][2] === X) {
//         console.log('X Wins!');
//       }
//   }


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
var reset = document.getElementById('reset');

reset.addEventListener('click', function() {
  location.reload();
});


// This function turns the backgroundColor to nothing once game is completed
function gameOver() {
  for (var i = 1; i <= 9; i++) {
    var cssID = 'Box' + i;
    console.log(cssID);
    document.getElementById(cssID).style.display = "none";
  }
}

// Pokewalk

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
