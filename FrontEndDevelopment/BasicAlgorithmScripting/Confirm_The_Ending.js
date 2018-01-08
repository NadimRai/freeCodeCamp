function confirmEnding(str, target) {
    var c = target.length;
    var a = str.substring(str.length - c);
    return a === target;
}
confirmEnding("Bastian", "n");
//shoud return true