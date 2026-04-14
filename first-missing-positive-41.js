/**
 * @param {number[]} a
 * @return {number}
 */
// copied
var firstMissingPositive = function (a) {
  let i = 0;
  while (i < a.length) {
    let correctI = a[i] - 1;

    if (a[i] > 0 && a[i] < a.length && a[correctI] != a[i]) {
      [a[correctI], a[i]] = [a[i], a[correctI]];
    } else {
      i++;
    }
  }

  for (let j = 0; j < a.length; j++) {
    if (a[j] != j + 1) return j + 1;
  }

  return a.length + 1;
};

// var firstMissingPositive = function (nums) {
//   let i = 0,
//     j = 0,
//     set = new Set();
//   while (j < nums.length) {
//     if (nums[j] > 0 && !set.has(nums[j])) {
//       nums[i] = nums[j];
//       set.add(nums[j]);
//       i++;
//     }
//     j++;
//   }
//   nums.splice(i, j - i);

//   nums = nums.sort((a, b) => a - b);

//   if (nums[0] != 1) return 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] + 1 != nums[i + 1]) {
//       return nums[i] + 1;
//     }
//   }
// };
