export default () => {}
/*
"use strict";

var _ = require('./helpers');

function setupMethods(target, methods, options) {
  options = _.extend({
    'blacklist': ['default'],
    'defaultMethod': 'save',
    'defaultArguments': function (args, options) { return args; }
  }, options || {});

  methods.forEach(function (method) {
    if (options.blacklist.indexOf(method) !== -1) {
      return false;
    }

    if (!target.prototype[method]) {
      target.prototype[method] = function () {
        var argumentsArray = Array.prototype.slice.call(arguments);
        argumentsArray = options.defaultArguments(argumentsArray, { method: method });
        this[options.defaultMethod].apply(this, argumentsArray);
      };
    }
  });

  return target;
}

module.exports = setupMethods;
*/
