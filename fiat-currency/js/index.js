'use strict';

function broker() {
  this.funds = 0;
}

broker.prototype.execute = function(command) {
  command = this.parseCommand(command);
  this[command[1]](command[0]);
};

broker.prototype.setFunds = function(amount) {
  this.funds = amount;
};

broker.prototype.getFunds = function() {
  return this.funds;
};

broker.prototype.buy = function(currentPrice) {
  if (this.funds > currentPrice) {
    this.funds -= currentPrice;
  }
};

broker.prototype.sell = function(currentPrice) {
  this.funds += currentPrice;
};

broker.prototype.hold = function(currentPrice) {};

broker.prototype.parseCommand = function(input) {
  var command = input.split(' ');
  if (command.length) {
    command[0] = parseInt(command[0]);
  }
  if (command.length == 1) {
    command.push('setFunds');
  }
  return command;
};

module.exports = new broker();