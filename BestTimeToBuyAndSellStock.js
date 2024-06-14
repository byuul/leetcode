/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = prices[0];
    let max_profit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
        } else {
            let profit = prices[i] - buy;

            if (profit > max_profit) {
                max_profit = profit;
            }
        }
    }

    return max_profit;
};
