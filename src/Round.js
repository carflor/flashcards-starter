const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.wrongGuesses = [];
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
    const endMessage = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    console.log(endMessage)
    return endMessage
  }
}

module.exports = Round; 