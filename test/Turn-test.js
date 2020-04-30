const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let turn;
  let card;

  beforeEach(function() {
    turn = new Turn('array', 'card');
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  })

  it('should be a function', function() {
    expect(Turn).to.be.a('function')
  })

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn)
  })

  it('should be able to return a guess', function() {
    expect(turn.returnGuess()).to.equal('array')
  })

  it('should be able to return a card', function() {
    expect(turn.returnCard()).to.equal('card')
  })

  it('should evaluate a guess', function() {
    expect(turn.evaluateGuess()).to.equal(false)
  })

  it('should provide feedback for guess', function() {
    expect(turn.giveFeedback()).to.equal('incorrect!')
  })
});