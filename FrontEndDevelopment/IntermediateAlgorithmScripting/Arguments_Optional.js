function addTogether() {
    var a;
    var b;
    if (arguments.length > 1) {
        a = arguments[0];
        b = arguments[1];
        if (((typeof a) === 'number') && ((typeof b) === 'number')) {
            return a + b;
        } else {
            return undefined;
        }
    } else {
        a = arguments[0];
        if ((typeof a) === 'number') {
            return function (arg) {
                if (a && (typeof arg) === 'number') {
                    return a + arg;
                } else {
                    return undefined;
                }
            };
        }
    }
}

addTogether(2)(3);
//should return 5;