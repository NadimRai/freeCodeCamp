
function largestOfFour(arr) {
    var maxNum = 0;
    var maxArray = [];
    arr.forEach(function (item) {
        item.forEach(function (i) {
            if (i > maxNum) {
                maxNum = i;
            }
        });
        maxArray.push(maxNum);
        maxNum = 0;

    });

    return maxArray;

}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//