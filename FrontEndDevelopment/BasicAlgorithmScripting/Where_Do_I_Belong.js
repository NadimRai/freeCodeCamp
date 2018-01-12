function getIndexToIns(arr, num) {
    var arrTotal = [];
    arr.forEach(function (ele) {
        arrTotal.push(ele);
    });
    arrTotal.push(num);
    var arrSort = arrTotal.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < arrSort.length; i++) {
        if (num == arrSort[i]) {
            return arrSort.indexOf(arrSort[i]);
        }
    }


}
getIndexToIns([10, 20, 30, 40, 50], 35)
 //should return 3
