function translatePigLatin(str) {
    count = 0;
    var vowel = ['a', 'e', 'i', 'o', 'u'];

    for (var i = 0; i < str.length; i++) {
        if (vowel.indexOf(str[i]) === -1) {
            count += 1;
        } else {
            break;
        }
    }

    if (count > 0) {
        var b = str.substr(0, count);
        var c = str.slice(count);
        return c + b + 'ay';
    } else {
        return str + 'way';
    }
}
translatePigLatin("consonant");
