(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('d3-request')) :
  typeof define === 'function' && define.amd ? define(['d3-request'], factory) :
  (global.d3 = global.d3 || {}, global.d3.promise = factory(global.d3));
}(this, (function (d3) { 'use strict';

function promisify(caller, fn) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {
      var callback = function callback(error, data) {
        if (error) {
          reject(Error(error));
          return;
        }
        resolve(data);
      };
      fn.apply(caller, args.concat(callback));
    });
  };
}

var module$1 = {};

['csv', 'tsv', 'json', 'xml', 'text', 'html'].forEach(function (fnName) {
  module$1[fnName] = promisify(d3, d3[fnName]);
});

return module$1;

})));
//# sourceMappingURL=d3.promise.js.map
