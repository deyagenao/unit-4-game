// GLOBAL VARIABLES
//====================================================================================
var wins = 0;
var losses = 0;
var currentScore = 0;
var targetNumber;
var crystal1Image = $("#crystal-1");
var crystal2Image = $("#crystal-2");
var crystal3Image = $("#crystal-3");
var crystal4Image = $("#crystal-4");

// variables for the value of each crystal. Value of each crystal is between 1 - 12
//Math.floor(Math.random() * 12) + 1;
            // Here we created code that selects a number either 10 or 11.
            // We'll set this number at the start of the "game".
            //   var numberOptions = [10, 11];
            //   var increment = numberOptions[Math.round(Math.random())];

// Displaying variables to the page 
$("#wins-text").text(wins);
$("#losses-text").text(losses);
$("#current-score-text").text(currentScore);




// FUNCTIONS
//=====================================================================================

function playGame() {
    // assign a value to the target number between 19 - 120
    targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    console.log(targetNumber);
    // display the target number on the page 
    $("#target-number-text").text(targetNumber);

    // assign a random value between 1- 12 to each crystal 
    crystal1Image.attr("data-crystalvalue", Math.floor(Math.random() * 12) +1);
    crystal2Image.attr("data-crystalvalue", Math.floor(Math.random() * 12) +1);
    crystal3Image.attr("data-crystalvalue", Math.floor(Math.random() * 12) +1);
    crystal4Image.attr("data-crystalvalue", Math.floor(Math.random() * 12) +1);


    console.log(crystal1Image.attr("data-crystalvalue"));
    console.log(crystal2Image.attr("data-crystalvalue"));
    console.log(crystal3Image.attr("data-crystalvalue"));
    console.log(crystal4Image.attr("data-crystalvalue"));

    // set the value of the current score to 0 and display to the player
    currentScore = 0;
    $("#current-score-text").text(currentScore);
    
}

playGame(); 

// click events for the different crystals 
$('.crystal-image').on("click", function() {
    // create a new variable that is equal to the random value assigned to the attribute of the crystal
    var crystalValue = ($(this).attr("data-crystalvalue"));
    // convert the data-crystalvalue attribute from a string to an integer 
    crystalValue = parseInt(crystalValue);

    // each time the crystal is clicked, the user's current score increases by the value of the crystal 
    currentScore += crystalValue;

    // each time the crystal is clicked, display the changes to the user's current score
    $("#current-score-text").text(currentScore);

    // conditions to check if user wins or loses 
    // user wins the round if they reach the exact target number 
    if (currentScore === targetNumber) {
        $("#current-score-text").text(currentScore + " Hooray, you won! Why don't you play again?");
        wins++;
        $("#wins-text").text(wins);
        $("button").show();
        
    }
    else if (currentScore >= targetNumber) {
        $("#current-score-text").text(currentScore + " Aww man, you lost! Time to try again!");
        losses++;
        $("losses-text").text(losses);
        $("button").show();
    }
})

// click events for "play again" button 
$("button").on("click", function() {
    playGame();
    $("button").hide();
})



// Conditions to check if player wins or loses the game:
// if (currentScore === targetNumber) { you win! }
// else if (currentScore >= targetNumber) { how sad that you lost...}