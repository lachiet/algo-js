/*
--- Directions
Given a string S and a string T, find the minimum window in 
S which will contain all the characters in T in complexity O(n).

--- Examples
Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
*/

const minWindow = function(s, t) {
  let answer = '';

  // 1. Hash map = { [char]: count }
  const map = {};
  t.split('').map(ch => (map[ch] = (map[ch] || 0) + 1));
  let counter = Object.keys(map).length;

  // 2. Sliding window technique to find boundaries
  let start = 0;

  // 'end' is -1 since every loop we start by expanding the boundary
  // -1 ensures we'' check the the first char on the first loop
  let end = -1;

  while (end < s.length) {
    if (counter === 0) {
      // substring contains condition

      if (!answer || end - start + 1 < answer.length) {
        // check if new substring is smaller than answer
        answer = s.slice(start, end + 1);
      }

      if (map[s[start]] !== undefined) {
        // add count back to map
        map[s[start]]++;
      }

      if (map[s[start]] > 0) {
        // add seeking a character to counter
        counter++;
      }
      start++;
    } else {
      // substring doesn't contain condition
      end++;
      if (map[s[end]] !== undefined) {
        // reduce count of character we're looking for
        map[s[end]]--;
      }
      if (map[s[end]] === 0) {
        // reduce overall character counter
        counter--;
      }
    }
  }

  return answer;
};

module.exports = minWindow;
