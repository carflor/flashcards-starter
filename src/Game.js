const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('..src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    // Should keep track of the currentRound
    this.currentRound = 0;
  }

  // start method
  startGame() {
    // creates cards
    const allCards = prototypeQuestions.map(cardData => {
      let cards = new Card(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer)
      return cards
    })
    // places cards in deck
    let deck = new Deck([cards])
    // creates a new round using deck
    let round = new Round(deck)
    // invokes printMessage to display message
    this.printMessage(deck, round)
    // invokes questions to kick off interaction
    this.printQuestions(round)
    // also keeps track of current found property
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