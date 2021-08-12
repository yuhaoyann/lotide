assertEqual = require(`./assertEqual`)

const countLetters = function(sentence) {
  let out = {};
  for (let letter of sentence) {
    if (letter !== ' ') {
      if (out[letter]) {
        out[letter] += 1;
      } else {
        out[letter] = 1;
      }
    } 
  }
  return out;
}

// let out1 = countLetters("lighthouse in the house");
// for (let out2 in out1) {
//   assertEqual(out1[out2], out1[out2]);
// }

module.exports = countLetters;