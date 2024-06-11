/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let countArr = new Array(n + 1);

    countArr[1] = 1;
    countArr[2] = 2;
    for (let i = 3; i <= n; i++) {
        countArr[i] = countArr[i - 1] + countArr[i - 2];
    }
    return countArr[n];
};
