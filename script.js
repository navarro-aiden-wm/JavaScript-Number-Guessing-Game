/**
 * Created by session2 on 8/10/16.
 */
function play() {
    var random_number = Math.random() * 100;
    var random_number_integer = Math.floor( random_number );
    number = random_number_integer + 1;


    while(!finished) {
        guess_input_text = prompt("I am thinking of a number " + "In the range 1 to 100.\n\n" + "What is the number? ");
        guess_input = parseInt(guess_input_text);
        guesses++;
        finished = check_guess(guess_input);
        }
}

function check_guess(guess_input) {

    if (isNaN(guess_input)) {
        alert("Please Guess a number.\n\n" + "Between 1 and 100");
        return false;
    }
    if ((guess_input < 1) || (guess_input > 100)) {
        alert ("Please enter a number between 1 and 100");
    }
    if (guess_input < number) {
        alert ("Too low! Try again.");
        return false;
    }
    if (guess_input > number) {
        alert ("Too High! Try again.");
        return false;
    }
    if (guess_input == number) {
    alert("Bingo! You got " + number + " in " + guesses + " guesses!");
    return true;
    }
}

var number;
var guess_input_text;
var guess_input;
var finished = false;
var guesses = 0;