//created vars to store the values and score
var randomNumber;
var gemButtonClick;
var losses = 0;
var wins = 0;
var currentNumber = 0;
var gameOver = false;

//created a function to start the game by choosing a random number and assigning it to each gem and launching the write on HTML function
function initialize() {
  var randNum = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  randomNumber = randNum(19, 120);

  $("#gem1").attr("numberValue", randNum(1, 12));
  $("#gem2").attr("numberValue", randNum(1, 12));
  $("#gem3").attr("numberValue", randNum(1, 12));
  $("#gem4").attr("numberValue", randNum(1, 12));

  currentNumber = 0;

  writeOnPageFunc();
}

//create da function to write on the html
function writeOnPageFunc() {
  $("#randomNumber").text(randomNumber);
  $("#currentNumber").text(currentNumber);
  $("#wins").text(wins);
  $("#losses").text(losses);
}

//created a function that will reset the game after its over
$("#repeatGame").on("click", function() {
  $("#repeatGame").hide();
  $(".gameContainer").show();
  initialize();
});

//created a function which will launch if the user lost
function lossCheck() {
  if (currentNumber > randomNumber) {
    losses++;
    alert("You lost, please play again!");
    $(".gameContainer").hide();
    $("#repeatGame").show();
  }
}

//created a function which will launch if the user won
function winCheck() {
  if (currentNumber === randomNumber) {
    wins++;
    alert("You won, please play again!");
    $(".gameContainer").hide();
    $("#repeatGame").show();
  }
}

//created a function that will update the value post a clicka nd then run the writeonPage function to update them on the HTML. Also runs the win/loss function checks
$(".gemButton").on("click", function() {
  gemButtonClick = $(this).attr("numberValue");
  currentNumber += parseInt(gemButtonClick);
  writeOnPageFunc();
  winCheck();
  lossCheck();
});

initialize();
writeOnPageFunc();

$("#instructionsButton").click(function() {
  $(".instructions").slideToggle();
});
