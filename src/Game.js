const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card')

class Game {
  constructor() {
    this.currentRound = null;
  }

  start() {
    const allCards = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer))
    const deck = new Deck(allCards);
    this.currentRound = new Round(deck, this);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;