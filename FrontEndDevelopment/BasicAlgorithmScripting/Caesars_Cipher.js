
function rot13(str) { // LBH QVQ VG!
    var cipher = [];
    var code, decode;
    for (var i = 0; i < str.length; i++) {
        code = (str.charCodeAt(i));
        if (code > 77) {
            decode = code - 13;
            cipher.push(String.fromCharCode(decode));
        } else if (code <= 77 && code >= 65) {
            decode = code + 13;
            cipher.push(String.fromCharCode(decode));
        } else if (code <= 64) {
            cipher.push(str[i]);
        }
    }
    return cipher.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
//should decode to "FREE CODE CAMP"  