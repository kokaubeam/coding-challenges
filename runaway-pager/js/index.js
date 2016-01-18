'use strict';

function encoder() {}

encoder.prototype.encode = function(input) {
  var chars = input.split('');

  var output = '';
  var previousChar = '';
  var currentChar = '';
  var charCount = 1;

  while(currentChar = chars.shift()) {
    if (currentChar != previousChar) {
      output += previousChar;
      previousChar = currentChar;
      if (charCount > 1) {
        output += charCount;
      }
      charCount = 1;
    } else {
      charCount++;
    }
  }

  output += previousChar; 
  if (charCount > 1) {
    output += charCount;
  }

  return output;
};

module.exports = new encoder();