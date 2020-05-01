const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let deck, round, card1, card2, card3;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    card3 = new Card(3, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
    deck = new Deck([card1, card2, card3])
    round = new Round(deck)
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function')
  })

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round)
  })

  it('should contain a deck', function() {
    expect(round.deck).to.equal(deck)
  })

  it('should count the turn it is on', function() {
    expect(round.turns).to.equal(0)
    round.takeTurn('sea otter')
    round.takeTurn('appendix')
    round.takeTurn('playing with bubble wrap')
    expect(round.turns).to.equal(3)
  })

  it('should keep track of incorrect guesses', function() {
    expect(round.wrongGuesses.length).to.equal(0)
    round.takeTurn('sea otter')
    round.takeTurn('appendix')
    expect(round.wrongGuesses.length).to.equal(1)
  })

  it('should return the current card ', function() {
    expect(round.returnCurrentCard()).to.equal(card1)
    round.takeTurn('sea otter')
    expect(round.returnCurrentCard()).to.equal(card2)
  })

  it('should keep track of turns', function() {
    expect(round.turns).to.equal(0)
    round.takeTurn('sea otter')
    expect(round.turns).to.equal(1)
    round.takeTurn('appendix')
    expect(round.turns).to.equal(2)
  })

  it('should calculate percenter of correct answers', function() {
    round.takeTurn('sea otter')
    round.takeTurn('appendix')
    round.takeTurn('listening to music')
    expect(round.calculatePercentCorrect()).to.deep.equal(33)
  })

  it('should show end of round message', function() {
    round.takeTurn('sea otter')
    round.takeTurn('appendix')
    round.takeTurn('listening to music')
    expect(round.endRound()).to.deep.equal(`** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly!`)
  })
});