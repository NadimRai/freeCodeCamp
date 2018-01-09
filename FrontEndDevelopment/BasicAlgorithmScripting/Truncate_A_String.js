function truncateString(str, num) {
    // Clear out that junk in your trunk
    console.log(num);
    var a = '';
    if (num <= 3) {
        a = str.substring(0, num) + '...';
    } else if (str.length > num) {
        a = str.substring(0, num - 3) + '...';

    } else {
        return str;
    }

    return a;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
  //should return "A-tisket..."