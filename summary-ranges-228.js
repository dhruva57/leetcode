/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (!nums.length) {
    return [];
  }
  let temp = [nums[0]],
    result = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] == nums[i] - 1) {
      temp.push(nums[i]);
    } else {
      result.push(
        `${temp[0]}${temp.length > 1 ? `->${temp[temp.length - 1]}` : ""}`
      );
      temp = [nums[i]];
    }
  }

  if (temp.length) {
    result.push(
      `${temp[0]}${temp.length > 1 ? `->${temp[temp.length - 1]}` : ""}`
    );
  }

  return result;
};
