/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  let keys = { ")": "(", "}": "{", "]": "[" };
  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if ([")", "}", "]"].includes(char)) {
      let openChar = keys[char];
      if (stack.pop() != openChar) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  if (stack.length > 0) return false;

  return true;
};
