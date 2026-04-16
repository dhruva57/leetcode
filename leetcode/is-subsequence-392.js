/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0,
    j = 0;
  while (i < s.length && j < t.length) {
    const vi = s[i];
    const vj = t[j];
    if (vi == vj) {
      i++;
    }
    j++;
  }
  return i == s.length;
};
