# https://leetcode.com/problems/longest-consecutive-sequence/?envType=problem-list-v2&envId=xoqag3yj

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums)==0:
            return 0
        sorted_nums = sorted(nums)
        count = 1
        max = 1
        for i in range(1, len(sorted_nums)):
            if sorted_nums[i] == sorted_nums[i -1]:
                continue
            if sorted_nums[i] - 1 == sorted_nums[i - 1]:
                count += 1
            else:
                max = count if count > max else max
                count = 1

        return count if count > max else max
