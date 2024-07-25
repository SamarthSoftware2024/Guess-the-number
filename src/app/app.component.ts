import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guessTheNumber';
  randomNum: number;
  userInput: number | null = null;
  message: string | null = null;
  gameInProgress: boolean = true; // Flag to control game state
  checkColor: boolean= false;

  constructor() {
    this.randomNum = this.generateRandomNumber();
  }

  generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
  }

  exitTheGame() {
    this.randomNum = this.generateRandomNumber();
    this.userInput = null;
    this.message = null;
    this.gameInProgress = true;
  }
  checkGuess() {
    if (!this.gameInProgress) {
      return; // If game is not in progress, do nothing
    }

    if (this.userInput === null || isNaN(this.userInput)) {
      this.message = "Please enter a valid number.";
      return;
    }

    if (this.userInput === this.randomNum) {
      this.message = "Congratulations! You guessed the correct number.";
      this.checkColor=true;
      this.gameInProgress = false; // End the game
    } else if (this.userInput < this.randomNum) {
      this.message = "User enter number is less than random number please enter greater number.";
    } else {
      this.message = "User enter number is greater than random number please enter less number.";
    }

    // Reset userInput for next guess if game is still in progress
    if (this.gameInProgress) {
      this.userInput = null;
    }
  }

  resetGame() {
    this.randomNum = this.generateRandomNumber();
    this.userInput = null;
    this.message = null;
    this.gameInProgress = true; // Start a new game
  }
}
