function convertHTML(str) {
    var ans = [];
    var a = str.split('');

    for (var i = 0; i < a.length; i++) {
        if (a[i] === '"') {
            a[i] = '&quot;';
        } else if (a[i] === '&') {
            a[i] = '&amp;';
        } else if (a[i] === '<') {
            a[i] = '&lt;';
        } else if (a[i] === '>') {
            a[i] = '&gt;';
        } else if (a[i] === "'") {
            a[i] = '&apos;';
        }
        ans.push(a[i]);
        var ans1 = ans.join('');
    }
    return ans1;
}
convertHTML("Dolce & Gabbana");
//should return Shindler&apos;s List