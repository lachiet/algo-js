/**
 * Returns the longest palindrome
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  if (!s) return '';

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    let len1 = expandFromMiddle(s, i, i); // odd
    let len2 = expandFromMiddle(s, i, i + 1); // even
    let bestLength = Math.max(len1, len2);

    if (bestLength > end - start + 1) {
      start = i - Math.floor((bestLength - 1) / 2);
      end = i + Math.floor(bestLength / 2);
    }
  }

  return s.slice(start, end + 1); // + 1 for slice end (non inclusive)
}

function expandFromMiddle(s, left, right) {
  if (left > right || !s) return 0;

  // While characters mirror each other and we're within the bounds
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  // Usually right - left + 1 would = length
  // In this case we're looking for the previous
  // result before the loop breaks.
  return right - left - 1;
}

module.exports = { longestPalindrome };
