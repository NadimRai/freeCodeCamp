function sym(...args) {
    var a = args;

    function symDiff(arr1, arr2) {
        var ans = [];
        for (var i = 0; i < arr1.length; i++) {
            if (arr2.indexOf(arr1[i]) === -1) {
                ans.push(arr1[i]);
            }
        }

        for (var j = 0; j < arr2.length; j++) {
            if (arr1.indexOf(arr2[j]) === -1) {
                ans.push(arr2[j]);
            }
        }
        return ans;
    }

    var sum = a.reduce(symDiff);
    uniqueArray = sum.filter(function (item, pos) {
        return sum.indexOf(item) == pos;
    })

    return uniqueArray

}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
//should return [1,4,5]