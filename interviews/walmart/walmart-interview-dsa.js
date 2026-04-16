let a = [
  ["A", "B", "C", "E"],

  ["S", "F", "C", "S"],

  ["A", "D", "E", "E"],
];

let word = "ABCCED";

let set = new Set();
// charindex = 6; r = 2; c = 1; char=D;
const run = () => {
  let firstChar = word[0];
  for (let r = 0; r < a.length; r++) {
    for (let c = 0; c < a[r].length; c++) {
      if (a[r][c] == firstChar) {
        console.log({ res: findNext(1, r, c) });
        return findNext(1, r, c);
      }
    }
  }

  return false;
};

const findNext = (charIndex, r, c) => {
  set.add(`${r}${c}`);
  if (charIndex == word.length) {
    console.log({ charIndex, r, c, len: word.length });
    return true;
  }
  let char = word[charIndex];
  if (!set.has(`${r + 1}${c}`) && r + 1 < a.length && a[r + 1][c] == char) {
    return findNext(charIndex + 1, r + 1, c);
  } else if (!set.has(`${r - 1}${c}`) && r > 0 && a[r - 1][c] == char) {
    return findNext(charIndex + 1, r - 1, c);
  } else if (
    !set.has(`${r}${c + 1}`) &&
    c + 1 < a[0].length &&
    a[r][c + 1] == char
  ) {
    return findNext(charIndex + 1, r, c + 1);
  } else if (!set.has(`${r}${c - 1}`) && c > 0 && a[r][c - 1] == char) {
    return findNext(charIndex + 1, r, c - 1);
  } else return false;
};

run();
