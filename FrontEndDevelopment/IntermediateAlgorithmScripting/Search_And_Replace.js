function myReplace(str, before, after) {
    var sentence = str.split(' ');
    var searchW = before;
    var replaceW = after;

    if (searchW[0] === searchW[0].toUpperCase()) {
        var a = replaceW[0].toUpperCase();
        var b = replaceW.split('');
        b.splice(0, 1);
        var c = a + b.join('');
        var d = sentence.indexOf(searchW);
        sentence.splice(d, 1);
        sentence.splice(d, 0, c);
        return sentence.join(' ');
    } else {
        var e = sentence.indexOf(searchW);
        sentence.splice(e, 1);
        sentence.splice(e, 0, replaceW);
        return sentence.join(' ');
    }
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
