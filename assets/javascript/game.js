// variables for the game 
var wins = 0;
var losses = 0;
var currentScore = 0;
// target number selected randomly at start of game with value between 19 - 120
var targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
console.log(targetNumber);

// variables for the value of each crystal. Value of each crystal is between 1 - 12
//Math.floor(Math.random() * 12) + 1;
            // Here we created code that selects a number either 10 or 11.
            // We'll set this number at the start of the "game".
            //   var numberOptions = [10, 11];
            //   var increment = numberOptions[Math.round(Math.random())];

// Displaying variables to the page 
$("#target-number-text").text(targetNumber);
$("#wins-text").text(wins);
$("#losses-text").text(losses);
$("#current-score-text").text(currentScore);

//

// click events for the different crystals 
// after clicking a crystal, the current score will increase by the value of that crystal
// $("#crystal-1").on("click", function() {
    //currentScore += the randomly selected value 

//   });

// $("#crystal-2").on("click", function() {


//     });

// $("#crystal-3").on("click", function() {


//     });

// $("#crystal-4").on("click", function() {


//     });

// Conditions to check if player wins or loses the game:
// if (currentScore === targetNumber) { you win! }
// else if (currentScore >= targetNumber) { how sad that you lost...}