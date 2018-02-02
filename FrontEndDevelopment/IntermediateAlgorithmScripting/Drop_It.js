function dropElements(arr, func) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            var a = arr.indexOf(arr[i]);
            var b = arr.splice(a);
            return b;
        } else {
            count += 1;
            if (count === arr.length) {
                return [];
            }
        }
    }
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;})
//should return [ 1, 0, 1 ]