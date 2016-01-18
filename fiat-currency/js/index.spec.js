'use strict';

var broker = require('./index.js');

describe('Fiat Currency Broker', function() {
  it('should parse the command', function() {
    [{
      input: '225',
      expect: [225, 'setFunds']
    }, {
      input: '105 buy',
      expect: [105, 'buy']
    }, {
      input: '102 hold',
      expect: [102, 'hold']
    }, {
      input: '106 sell',
      expect: [106, 'sell']
    }].forEach(function(test) {
      var command = broker.parseCommand(test.input);
      expect(command).toEqual(test.expect);
    });
  });

  it('should set the funds', function() {
    broker.execute('225');
    expect(broker.funds).toBe(225);
  });

  it('should buy if the funds are available', function() {
    broker.setFunds(500);
    broker.execute('200 buy');
    expect(broker.funds).toBe(300);
  });

  it('should not buy if funds are not available', function() {
    broker.setFunds(200);
    broker.execute('300 buy');
    expect(broker.funds).toBe(200);
  });

  it('should sell and increase the available funds by the current price', function() {
    broker.setFunds(200);
    broker.execute('300 sell');
    expect(broker.funds).toBe(500);
  });
});