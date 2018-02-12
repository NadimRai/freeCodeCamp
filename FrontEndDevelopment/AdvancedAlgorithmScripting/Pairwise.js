function pairwise(arr, arg) {
    var ans = [];

    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == arg) {
                ans.push(i + j);
                arr[i] = NaN;
                arr[j] = NaN;
            }
        }
    }

    var sum = ans.reduce(function (a, b) {
        return a + b;
    }, 0);
    return sum;
}
pairwise([1, 4, 2, 3, 0, 5], 7);
//should return 11