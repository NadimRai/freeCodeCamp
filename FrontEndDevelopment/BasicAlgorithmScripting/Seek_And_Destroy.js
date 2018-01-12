
function destroyer(...arr) {
    var arrResult = [];
    var arr1 = [];
    for (var i = 1; i < arr.length; i++) {
        arr1.push(arr[i]);
    }
    for (var j = 0; j < arr[0].length; j++) {
        if (arr1.indexOf(arr[0][j]) == -1) {
            arrResult.push(arr[0][j]);
        }
    }
    return arrResult;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  //should return [1, 1]