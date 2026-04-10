class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # temp = {}
        # for i in range(len(nums)):
        #     temp[(i + k) % (len(nums))] = nums[i]

        # for i in temp:
        #     nums[i] = temp[i]
        l = len(nums)
        k %= l
        if k != 0:
            nums[:] = nums[-k:] + nums[:l-k]
