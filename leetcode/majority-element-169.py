# https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        temp = {}
        for val in nums:
            if val in temp:
                temp[val]+=1
                if temp[val] > len(nums)/2:
                    return val
            else:
                temp[val]=1
                if temp[val] > len(nums)/2:
                    return val
