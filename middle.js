const middle = function(array) {
  let out = [];
  let middle = Math.floor(array.length / 2);
  if (array.length >= 3) {
    if ((array.length % 2) === 0) {
      out.push(array[middle - 1]);
      out.push(array[middle]);
    } else {
      out.push(array[middle]);
    }
  }
  return out;
};

module.exports = middle;