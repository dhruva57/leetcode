// ---

// ### Solution Explanation

// This concept can be tricky, as "Maximum Sliding Window" is a notorious LeetCode Hard problem. Brute force approaches (like repeatedly using `Math.max()` on the current window) will result in a Time Limit Exceeded (TLE) error on the platform when tested against very large arrays[cite: 106]. To pass this problem, you need an algorithm where the time it takes to find the maximum does not depend on the window size $K$[cite: 120, 121].

// Instead, the standard optimal approach uses a **Monotonic Deque** (Double-Ended Queue)[cite: 121]. The strategy involves storing the indices of the array elements in a custom queue[cite: 122]. As you slide the window, you maintain a strictly decreasing order in the queue by popping off smaller elements from the back[cite: 123]. This guarantees that the largest element for the current window is always sitting instantly accessible at the front of the queue, giving you an $O(N)$ overall time complexity[cite: 124].

// **The Logic (Step-by-Step):**

// 1. **Initialize the Deque and Result:** Create an empty `deque` to store the **indices** of elements, and a `result` array to store your final answers.
// 2. **Iterate Through the Array:** Loop through `nums` using a standard `for` loop with index `i`.
// 3. **Clean Up Out-of-Bounds Indices:** Before looking at the new element, check the front of your deque. If the index stored at the front falls outside the current window (i.e., `deque[0] < i - k + 1`), remove it from the front.
// 4. **Maintain Monotonic Decreasing Order:** Look at the current element `nums[i]`. While the deque is not empty and the element at the back of the deque is *smaller* than your current element, pop that index off the back. We do this because those smaller elements are useless now; they are smaller than `nums[i]` and will expire *before* `nums[i]` does, so they can never be the maximum of any future window.
// 5. **Add the Current Index:** Push the current index `i` to the back of the deque.
// 6. **Record the Window Maximum:** Once your window has reached size `k` (which happens when `i >= k - 1`), the index sitting at the front of your deque represents the largest element in the current window. Push `nums[deque[0]]` into your `result` array.

// **Complexity Analysis:**
// * **Time Complexity:** $O(N)$. Even though there is a `while` loop inside the `for` loop, every index is pushed onto the deque exactly once and popped off at most once. This results in linear time scaling.
// * **Space Complexity:** $O(K)$. The deque will store at most $K$ indices at any given time.

// ---

// ### JavaScript Implementation

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const result = [];
  const deque = []; // This will store indices, not the actual values

  for (let i = 0; i < nums.length; i++) {
    // 1. Remove the index from the front if it's no longer inside our window bounds
    if (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();
    }

    // 2. Remove indices from the back if their corresponding values are smaller
    // than the current element (they can never be the maximum)
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    // 3. Add the current element's index to the back
    deque.push(i);

    // 4. Once the window has reached size 'k', add the max (at the front) to the result
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
};

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var maxSlidingWindow = function (nums, k) {
//   let i = 0,
//     j = k,
//     temp = nums.slice(0, k),
//     res = [Math.max(...temp)];
//   while (j < nums.length) {
//     temp[i % k] = nums[j];
//     res.push(Math.max(...temp));
//     i++;
//     j++;
//   }

//   return res;
// };

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var maxSlidingWindow = function (nums, k) {
//   let i = 0,
//     j = i + (k - 1),
//     temp = [],
//     res = [],
//     l = 0;

//   while (j < nums.length) {
//     if (i <= j) {
//       temp.push(nums[i]);
//       i++;
//     } else {
//       res.push(Math.max(...temp));
//       temp = [];
//       l++;
//       i = l;
//       j = i + (k - 1);
//     }
//   }

//   return res;
// };
