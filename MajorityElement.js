/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // 1.
    // nums = nums.sort();
    // return nums[Math.floor(nums.length/2)];

    // 2.
    let major_num,
        count = 0;

    for (let num of nums) {
        if (count === 0) {
            major_num = num;
            count++;
        } else if (major_num === num) count++;
        else count--;
    }
    return major_num;
};
