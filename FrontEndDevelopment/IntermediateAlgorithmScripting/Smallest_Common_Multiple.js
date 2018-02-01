
function smallestCommons(arr) {
    var numbers = arr;
    numbers.sort(function (a, b) {
        return a - b;
    });
    var a = numbers[0];
    var b = numbers[1];
    var arr1 = [];
    var ans = a * b;
    for (var j = a; j <= b; j++) {
        arr1.push(j);
    }

    var count = 1;
    var ans1;
    var ans2 = [];

    do {
        ans1 = ans * count;
        for (var i = 0; i < arr1.length; i++) {
            if ((ans1 % arr1[i]) === 0) {
                ans2.push(ans1);
            }
        }
        if (ans2.length !== arr1.length) {
            count++;
            ans2 = [];
        } else {
            return ans2[0];
        }

    } while (ans2.length !== arr1.length);
}
smallestCommons([1, 13]);
//should return  360360











