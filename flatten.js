const flatten = function(array) {
  let out = [];
  for (let i of array) {
    console.log(out);
    if (Array.isArray(i)) {
      out = out.concat(flatten(i));
      } else {
        out.push(i);
  }}
  return out;
};
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;