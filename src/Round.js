const Turn = require('../src/Turn');
const Game = require('../src/Game');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.wrongGuesses = [];
    this.startTime = Date.now();
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard())
    if (!turn.evaluateGuess()) {
      this.wrongGuesses.push(turn.card.id)
    }
    this.turns++
    return turn.giveFeedback()
  }

  calculatePercentCorrect() {
    const answeredRight = this.turns - this.wrongGuesses.length
    return  Math.floor((answeredRight / this.turns) * 100)
  }
  
  calculateRoundTime() {
    const endTime = Date.now()
    const totalTime = endTime - this.startTime
    const totalSeconds = Math.floor(totalTime / 1000)
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds - minutes * 60;
    if (minutes === 1) {
      return `${minutes} minute and ${seconds} seconds`
    } else {
      return `${minutes} minutes and ${seconds} seconds`
    }
  }

  endRound() {
    const endMessage = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly in ${this.calculateRoundTime()}!`
    console.log(endMessage)
    return endMessage
  }
}

module.exports = Round; 