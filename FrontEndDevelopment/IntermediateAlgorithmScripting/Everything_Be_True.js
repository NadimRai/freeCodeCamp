function truthCheck(collection, pre) {
    var ans = [];

    for (var p in collection) {
        if (collection.hasOwnProperty(p)) {
            if (collection[p][pre]) {
                ans.push(collection[p]);
            }
        }
    }

    if (collection.length === ans.length) {
        return true;
    } else {
        return false;
    }
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
//should return false