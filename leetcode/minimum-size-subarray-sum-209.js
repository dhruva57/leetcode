/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// copied
var minSubArrayLen = function (target, nums) {
  let left = 0,
    sum = 0,
    minL = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minL = Math.min(minL, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minL == Infinity ? 0 : minL;
};
