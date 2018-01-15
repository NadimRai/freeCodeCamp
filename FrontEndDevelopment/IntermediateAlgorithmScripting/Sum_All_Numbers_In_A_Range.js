function sumAll(arr) {
    var maxNum = Math.max(arr[0], arr[1]);
    var minNum = Math.min(arr[0], arr[1]);
    var total = 0;

    for (var i = minNum; i <= maxNum; i++) {
        total += i;
    }
    return total;
}

sumAll([1, 4]);
//should return 10   