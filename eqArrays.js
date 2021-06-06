const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      if (Array.isArray(array1[i]) && eqArrays(array1[i], array2[i])) {
        return true;
      }
      return false;
    }
  }
  return true;
};


module.exports = eqArrays;