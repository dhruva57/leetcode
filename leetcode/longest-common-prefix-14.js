//https://leetcode.com/problems/longest-common-prefix/description/?envType=problem-list-v2&envId=array

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 1) return strs[0];

  const sorted = strs.sort((a, b) => a.length - b.length);
  let com = sorted[0];
  if (!com) return "";

  for (let i = 1; i < sorted.length; i++) {
    let common = "";
    for (let j = 0; j < com.length; j++) {
      if (sorted[i][j] == com[j]) {
        common += sorted[i][j];
      } else {
        com = common;
      }
    }
  }

  return com;
};
