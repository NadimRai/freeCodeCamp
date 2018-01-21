function fearNotLetter(str) {
    var a = str.split('');
    var arr = [];
    var firstValue = str.charCodeAt(0);

    for (var i = 0; i < a.length; i++) {
        var a1 = firstValue + i;
        arr.push(String.fromCharCode(a1));
    }

    for (var j = 0; j < arr.length; j++) {
        if (a.indexOf(arr[j]) === -1) {
            return arr[j];
        }
    }
}

fearNotLetter("bcdf");
//should return e