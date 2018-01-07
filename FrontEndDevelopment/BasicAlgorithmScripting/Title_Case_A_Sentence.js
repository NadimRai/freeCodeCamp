function titleCase(str) {
    var strArr = str.split(' ');
    var result = [];
    for (var i = 0; i < strArr.length; i++) {
        var firstLetter = strArr[i][0].toUpperCase();
        var restLetter = strArr[i].slice(1).toLowerCase();
        result.push(firstLetter + restLetter);
    }
    return result.join(' ');
}

titleCase("I'm a little tea pot");