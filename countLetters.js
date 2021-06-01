const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(letters) {
  const object = {};
  for (let letter of letters) {
    if (letter.match(/[a-z]/i)) {
      if (object[letter]) {
        object[letter] += 1;
      } else {
        object[letter] = 1;
      }
    }
  }
  return object;

};
console.log(countLetters("byeongjae kang"));

module.exports = countLetters;