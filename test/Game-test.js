const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Card = require('../src/Card');

describe('Game', function() {
  let game, deck, round, card1, card2, card3;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    card3 = new Card(3, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
    deck = new Deck([card1, card2, card3])
    round = new Round(deck)
    game = new Game()
  })

  it('should be a function', function() {
    expect(Game).to.be.a('function')
  })

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game)
  })


});
