// https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0,
    j = 0;

  while (true) {
    let v1 = nums[i];
    let v2 = nums[j];

    if (v2 == undefined) {
      return i;
    }

    if (i != j && v2 !== val) {
      nums.splice(i, j - i);
      i += 1;
      j = i;
      continue;
    }

    if (val == v1) {
      j++;
    } else {
      i++;
      j++;
    }
  }
};

// better
// var removeElement = function(nums, val) {

//     let k = 0;

//     for (let i = 0; i < nums.length; i++) {

//         if (nums[i] !== val) {
//             nums[k] = nums[i];
//             k++;
//         }

//     }

//     return k;

// };