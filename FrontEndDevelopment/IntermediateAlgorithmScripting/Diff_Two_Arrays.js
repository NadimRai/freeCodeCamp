function diffArray(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    var resultArr = [];
    var count = 0;
    for (var i = 0; i < newArr.length; i++) {
        for (var j = 0; j < newArr.length; j++) {
            if (newArr[i] === newArr[j]) {
                count += 1;
            }
        }
        if (count === 1) {
            resultArr.push(newArr[i]);
        }

        count = 0;
    }
    return resultArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//should return 4  