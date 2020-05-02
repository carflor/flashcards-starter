const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRound = 0;
  }

  start() {
    const allCards = prototypeQuestions.map(cardData => {
      let cards = new Card(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer)
      return cards
    })
    let deck = new Deck(allCards)
    let round = new Round(deck)
    this.printMessage(deck, round)
    this.printQuestions(round)
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