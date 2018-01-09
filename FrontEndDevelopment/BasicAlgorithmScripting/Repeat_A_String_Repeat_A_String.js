function repeatStringNumTimes(str, num) {
    if (num < 0) {
        return '';
    } else {
        var strAdd = '';
        for (var i = 0; i < num; i++) {
            strAdd += str;
        }
        return strAdd;
    }

}

repeatStringNumTimes("abc", 3);
//should return "abcabcabc"