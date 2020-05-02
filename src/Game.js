const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card')

class Game {
  constructor() {
    this.currentRound = 0;
  }

  start() {
    const allCards = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer))
    const deck = new Deck(allCards)
    let round = new Round(deck)
    this.printMessage(deck, round)
    this.printQuestion(round)
    this.currentRound++
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