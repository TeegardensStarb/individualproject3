// Individual Project 3


let incorrectCount = 0;
let livesCount = 10;
function incorrect() {
  // Logging to the debug console
  console.log("Incorrect answer selected.");
  document.getElementById("message").textContent = "Incorrect! You lose a life.";

  incorrectCount++; // increment incorrectCount
  livesCount--; // decrement livesCount

  // Updating in the document the span with ID #incorrect_count
  document.querySelector('#incorrect_count').textContent = incorrectCount;
  document.querySelector('#lives_count').textContent = livesCount;

  if (livesCount === 0) {  // checking for 0 lives
    console.log("YOU LOSE");
    document.getElementById("all_questions").innerHTML = '<h1 class="gameover">GAME OVER!</h1>';
  }
}

let correctCount = 0;
function correct() {
  // Logging to the debug console
  console.log("Correct answer selected.");
  document.getElementById("message").textContent = "Correct, good job!";


  correctCount++; // increment correctCount

  // Updating in the document the span with ID #correct_count
  document.querySelector('#correct_count').textContent = correctCount;

  if (correctCount === 5) {  // checking for 5 right answers
    console.log("YOU WIN");
    document.getElementById("all_questions").innerHTML = '<h1 class="gameover">YOU WIN!</h1>';


  }
}
