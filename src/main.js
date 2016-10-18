import * as d3 from 'd3-request';

function promisify(caller, fn){
  return function(...args){
    return new Promise(function(resolve, reject){
      const callback = function(error, data){
        if(error){
          reject(Error(error));
          return;
        }
        resolve(data);
      };
      fn.apply(caller, args.concat(callback));
    });
  };
}

const module = {};

['csv', 'tsv', 'json', 'xml', 'text', 'html'].forEach(function(fnName){
  module[fnName] = promisify(d3, d3[fnName]);
});

export default module;