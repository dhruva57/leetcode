//https://leetcode.com/problems/container-with-most-water/description/?envType=problem-list-v2&envId=array

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0,
    j = height - 1,
    area = 0;

  while (i < j) {
    area = Math.max(area, (j - i) * Math.min(height[i], height[j]));

    if (height[i] < height[j]) i++;
    else j--;
  }
  return area;
};
