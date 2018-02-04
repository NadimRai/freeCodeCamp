function binaryAgent(str) {
    var collect = [];
    var col = [];
    var a = str.split(" ");
    var count = 0;
    var multiple = 1;
    for (var i = 0; i < a.length; i++) {
        var b = a[i].split('');
        for (var j = 0; j < b.length; j++) {
            var parse = parseInt(b[j]);
            var mathPow = Math.pow(2, parseInt(b.length - 1 - j));
            multiple = parse * mathPow;
            count += multiple;
        }
        collect.push(String.fromCharCode(count));
        col = collect.join('');
        count = 0;
    }
    return col;
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
//should return 'Aren\'t bonfires fun!?'