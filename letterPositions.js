const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
      }
      results[sentence[i]].push(i);
    }
  }
  return results;
}

// console.log(letterPositions('lighthouse in the house'));
// assertArraysEqual(letterPositions('hello').h, [0]);

module.exports = letterPositions;