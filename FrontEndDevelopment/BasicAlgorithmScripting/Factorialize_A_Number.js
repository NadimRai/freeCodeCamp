function factorialize(num) {
    var j = 1;
    for (var i = 0; i < num; i++) {
        j = j * (num - i);
    }

    return j;
}

factorialize(5);
