const middle = function(array) {
  const output = [];
  
  if (array.length % 2 === 0 && array.length > 2) {
    output.push(array[Math.floor((array.length - 1) / 2)]);
    output.push(array[Math.ceil((array.length - 1) / 2)]);
  } else if (array.length % 2 !== 0 && array.length > 2) {
    output.push(array[(array.length - 1) / 2]);
  }
  
  return output;
};

module.exports = middle;