const findKey = (object, callback) => {
  for (let i in object) {
    if (callback(object[i])) {
      return i;
    }
  }
}

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 5 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 5), 'noma');

module.exports = findKey;