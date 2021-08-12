const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];
const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
// const results1 = map(words, word => word[0]);
// console.log(results1);

// assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);

module.exports = map;