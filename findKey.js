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

const findKey = (object, callback) => {
  for (let i in object) {
    if (callback(object[i])) {
      return i;
    }
  }
}

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5), 'noma');