const assert = require('chai').assert;
const tail = require(`../tail`);

describe('#tail', () => {

  it('return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it('return 2 for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const result = tail(["Yo Yo", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });

  it('return 2, "Lighthouse", "Labs" for 3test below', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
    assert.strictEqual(result[0], "Lighthouse");
    assert.strictEqual(result[1], "Labs");
  });

});