# https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/submissions/1973942795/?envType=study-plan-v2&envId=top-interview-150

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        temp = {}
        i, j = 0, 0
        while j < len(nums):
            val = nums[j]
            if val not in temp or temp[val] < 2:
                if val not in temp:
                    temp[val] = 1
                else:
                    temp[val] += 1
                nums[i] = nums[j]
                i += 1

            j += 1


        nums[i:] = []

        return i + 1
