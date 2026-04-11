/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let cache = {};

//   const check = (values) => {
//     const key = values.join("-");
//     if (key in cache) return cache[key];

//     let maxP = [0];
//     for (let j = 0; j < values.length; j++) {
//       let CP = values[j];
//       let SP,
//         profits = [0];
//       for (let i = j + 1; i < values.length; i++) {
//         SP = values[i];

//         if (SP > CP) {
//           let p = SP - CP + check(values.slice(i + 1));
//           profits.push(p);
//         }
//       }

//       maxP.push(Math.max(...profits));
//     }
//     cache[key] = Math.max(...maxP);
//     return Math.max(...maxP);
//   };

//   return check(prices);
// };



// copied: sum of daily profits is the max profit one can using greedy algorithm
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let totalProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    // If the price increases tomorrow, we take that profit
    if (prices[i + 1] > prices[i]) {
      totalProfit += prices[i + 1] - prices[i];
    }
  }

  return totalProfit;
};
