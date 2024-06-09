/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            even = Math.max(odd, even + nums[i]);
        } else {
            odd = Math.max(even, odd + nums[i]);
        }
    }
    return Math.max(even, odd);
};
