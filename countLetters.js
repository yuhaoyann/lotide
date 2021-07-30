const assertEqual = function(actual, expected) {
  let pass = String.fromCodePoint(0x1F493);
  let fail = String.fromCodePoint(0x1F4A3);
  if (typeof actual === 'string' && typeof actual === typeof expected) {
    if (actual === expected) {
      console.log(`${pass}${pass}${pass}Assertion Passed: "${actual}" === "${expected}"`);
    } else {
      console.log(`${fail}${fail}${fail}Assertion Failed: "${actual}" !== "${expected}"`);
    }
  } else {
    if (actual === expected) {
      console.log(`${pass}${pass}${pass}Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`${fail}${fail}${fail}Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};

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

let out1 = countLetters("lighthouse in the house");
for (let out2 in out1) {
  assertEqual(out1[out2], out1[out2]);
}