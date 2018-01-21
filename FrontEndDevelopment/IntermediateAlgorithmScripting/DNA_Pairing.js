function pairElement(str) {
    var a = str.split('');
    var arr = [];
    var ans = [];

    for (var i = 0; i < a.length; i++) {
        if (a[i] === 'A') {
            arr.push(a[i], 'T');
            ans.push(arr);
        } else if (a[i] === 'T') {
            arr.push(a[i], 'A');
            ans.push(arr);
        } else if (a[i] === 'C') {
            arr.push(a[i], 'G');
            ans.push(arr);
        } else if (a[i] === 'G') {
            arr.push(a[i], 'C');
            ans.push(arr);
        }
        arr = [];
    }
    return ans;
}

pairElement("CTCTA");
