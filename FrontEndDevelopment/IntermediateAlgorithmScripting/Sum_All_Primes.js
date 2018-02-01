function sumPrimes(num) {
    var arr = [];
    var count = 0;
    var total = 0;

    for (var i = 2; i <= num; i++) {
        for (var j = 1; j <= i; j++) {
            if (i % j === 0) {
                count += 1;
            }
        }
        if (count === 2) {
            arr.push(i);
        }
        count = 0;
    }

    for (var k = 0; k < arr.length; k++) {
        total += arr[k];
    }
    return total;
}
sumPrimes(10);
//shoudl return 17