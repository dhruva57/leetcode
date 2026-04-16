/**
 * @param {number[]} nums
 * @return {number}
 */
// copied
var rob = function(nums) {
    // rob1 represents the max money we can rob up to house i - 2
    let rob1 = 0;
    // rob2 represents the max money we can rob up to house i - 1
    let rob2 = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // Calculate the max if we rob the current house OR skip it
        let tempMax = Math.max(nums[i] + rob1, rob2);
        
        // Shift our pointers forward for the next iteration
        rob1 = rob2;
        rob2 = tempMax;
    }
    
    return rob2;
};