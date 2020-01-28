const S = require('./index');

const longestPalindrome = S.longestPalindrome;

describe('Longest palindrome', () => {
  test('return longest palindrome', () => {
    expect(longestPalindrome('racecar')).toEqual('racecar');
  });

  test('return longest palindrome', () => {
    expect(longestPalindrome('babad')).toEqual('bab');
  });

  test('return longest palindrome', () => {
    expect(longestPalindrome('a')).toEqual('a');
  });

  test('return longest palindrome', () => {
    expect(longestPalindrome('bb')).toEqual('bb');
  });

  test('return longest palindrome', () => {
    expect(longestPalindrome('aabbbbaa')).toEqual('aabbbbaa');
  });

  test('return longest palindrome', () => {
    expect(longestPalindrome('abc')).toEqual('a');
  });
});
