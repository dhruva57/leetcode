/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const getKey = (str) => {
    const sorted = [...str]
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join("");

    return sorted;
  };

  let map = {};

  for (let i = 0; i < strs.length; i++) {
    let key = getKey(strs[i]);
    map[key] ? map[key].push(strs[i]) : (map[key] = [strs[i]]);
  }

  return Object.values(map);
};
