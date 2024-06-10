/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let currNum = nums[0];
    let maxNum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currNum = Math.max(nums[i], currNum + nums[i]);
        if (currNum > maxNum) {
            maxNum = currNum;
        }
    }

    return maxNum;
};
