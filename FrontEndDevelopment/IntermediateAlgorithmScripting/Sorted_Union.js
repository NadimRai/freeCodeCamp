function uniteUnique(...arr) {
    var map = [];
    const map1 = map.concat(...arr);

    uniqueArray = map1.filter(function (item, pos) {
        return map1.indexOf(item) == pos;
    });
    return uniqueArray;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//should return [ 1, 3, 2, [ 5 ], [ 4 ] ]