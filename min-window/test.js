const minWindow = require('./index');

test('Min window is a function', () => {
  expect(typeof minWindow).toEqual('function');
});

test('returns the smallest substring', () => {
  expect(minWindow('ADOBECODEBANC', 'ABC')).toEqual('BANC');
});
