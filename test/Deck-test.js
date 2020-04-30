const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let deck;
  let deck2;
  let card1;
  let card2;

  beforeEach(function() {
    deck = new Deck([card1, card2])
    deck2 = new Deck([])
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values', ['array', 'object', 'function'], 'array');
  })

  it('should be a function', function() {
    expect(Deck).to.be.a('function')
  })

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck)
  })

  it('should store the cards', function() {
    expect(deck.cards).to.deep.equal([card1, card2])
  })

  it('should be able to count the cards', function() {
    expect(deck.countCards()).to.equal(2)
    expect(deck2.countCards()).to.equal(0)
  })

});