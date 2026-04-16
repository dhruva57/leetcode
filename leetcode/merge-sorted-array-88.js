// https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0,
    j = 0;
  while (i < m) {
    if (nums2[j] < nums1[i]) {
      nums1[m + j] = nums2[j];
      j++;
    } else {
      i++;
    }
  }
  const remN2 = n - j;
  if (remN2) {
    nums1.splice(i + j, remN2, ...nums2.slice(j));
  }
  nums1.sort((a, b) => (a < b ? -1 : 1));
};
