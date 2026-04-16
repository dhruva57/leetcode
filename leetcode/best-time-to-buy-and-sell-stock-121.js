/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0],
    p = 0;

  for (let val of prices) {
    if (val < min) {
      min = val;
    } else {
      p = Math.max(val - min, p);
    }
  }

  return p;
};
