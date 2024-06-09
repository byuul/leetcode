/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const symbol = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let sArr = s.split("");
    let sArrNum = sArr.map((el) => symbol[el]);
    let result = 0;

    for (let i = 0; i < sArrNum.length; i++) {
        if (sArrNum[i] < sArrNum[i + 1]) {
            result = result + (sArrNum[i + 1] - sArrNum[i]);
            i++;
        } else {
            result = result + sArrNum[i];
        }
    }
    return result;
};
