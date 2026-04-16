/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    let vi = s[i];
    let vj = s[j];
    if (!isAlphaNumeric(vi)) {
      i++;
      continue;
    }

    if (!isAlphaNumeric(vj)) {
      j--;
      continue;
    }

    if (vi != vj) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
};

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);

  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}
