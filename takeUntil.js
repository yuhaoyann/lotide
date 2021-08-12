const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let out = [];
  for(let i = 0; !callback(array[i]); i++) {
    out.push(array[i]);
  }
  return out;
}

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;