const assertArraysEqual = require(`./assertArraysEqual`);

const flatten = function(array) {
  let out = [];
  for (let i of array) {
    if (Array.isArray(i)) {
      for (let j of i) {
        out.push(j);
      }
    } else {
      out.push(i);
    }
  }
  return out;
};
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;