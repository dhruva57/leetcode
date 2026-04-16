/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0,
    r = 0,
    maxL = 0,
    set = new Set(),
    sub = "";

  while (r < s.length) {
    let char = s[r];
    if (!set.has(char)) {
      set.add(char);
      sub = sub + char;
      maxL = Math.max(maxL, r - l + 1);
      r++;
    } else {
      set.delete(s[l]);
      l++;
    }
  }

  return maxL;
};
