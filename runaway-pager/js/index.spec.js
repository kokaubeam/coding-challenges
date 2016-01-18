'use strict';

var encoder = require('./index.js');

describe('Runaway Pager', function() {
  it('should leave single occurances as-is.', function() {
    var result = encoder.encode('cat');
    expect(result).toBe('cat');
  });

  it('should compress multiple occurances of a letter into a letter followed by the number of occurances', function() {
    [{ 'input': 'AABZZZZQQJ', 'expect': 'A2BZ4Q2J' },
     { 'input': 'SHAZBOT', 'expect': 'SHAZBOT' },
     { 'input': 'BQQRRRRRRZ', 'expect': 'BQ2R6Z' },
     { 'input': 'BBBQTTTTTTF', 'expect': 'B3QT6F' }
    ].forEach(function(test) {
      var result = encoder.encode(test.input);
      expect(result).toBe(test.expect);
    });
  });
});