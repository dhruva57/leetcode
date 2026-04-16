/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let seen = new Set();
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let val = board[r][c];
      if (!parseInt(val)) continue;

      const rKey = `${r}row has ${val}`;
      const cKey = `${c}col has ${val}`;
      const boxKey = `${Math.floor(r / 3)}${Math.floor(c / 3)}box has ${val}`;

      if (seen.has(rKey) || seen.has(cKey) || seen.has(boxKey)) {
        return false;
      }

      seen.add(rKey);
      seen.add(cKey);
      seen.add(boxKey);
    }
  }

  return true;
};
