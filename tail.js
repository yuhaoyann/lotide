const assertEqual = require('./assertEqual');

const tail = function(array) {
  let out = [];
  for (let i = 1; i < array.length; i++) {
    out.push(array[i]);
  }
  return out;
};

module.exports = tail;