function palindrome(str) {
    // Good luck!
    var a = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    var b = a.split('').reverse().join('');
    return a === b;
}


palindrome("eye");
