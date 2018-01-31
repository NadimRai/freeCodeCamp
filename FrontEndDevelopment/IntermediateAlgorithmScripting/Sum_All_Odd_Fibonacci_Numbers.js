function sumFibs(num) {
    var a = 0;
    var b = 1;
    var c;
    var arr = [1];
    for (var i = 0; i < num; i++) {
        c = a + b;
        if ((c % 2 !== 0) && (c <= num)) {
            arr.push(c);
        }
        a = b;
        b = c;
    }

    var ans = arr.reduce(function (a, b) {
        return a + b;
    }, 0);
    return ans;
}

sumFibs(75024)
//shoudl return 60696