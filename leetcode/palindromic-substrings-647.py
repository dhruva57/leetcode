# https://leetcode.com/problems/palindromic-substrings/description/?envType=problem-list-v2&envId=xoqag3yj

class Solution(object):
    def countSubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
        def isP(text):
            return text == text[::-1]
        c, i = 0, 0
        while i < (len(s) - 1):
            for j in range(i + 1, len(s)):
                sub = s[i : j + 1]
                if isP(sub):
                    c += 1
            i += 1
        return c + len(s)
