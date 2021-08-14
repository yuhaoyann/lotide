const without = function(source, itemsToRemove) {
  let out = [];
  for (let i of source) {
    if (!itemsToRemove.includes(i)) {
      out.push(i);
    }
  }
  return out;
};

// const words = ["hello", "world", "lighthouse"];
// assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);

module.exports = without;