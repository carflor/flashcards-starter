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
  
  endRound() {
    const endTime = Date.now()
    const totalTime = endTime - this.startTime
    const endMessage = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly in ${Math.floor(totalTime / 1000)} seconds!`
    console.log(endMessage)
    return endMessage
  }
}

module.exports = Round; 