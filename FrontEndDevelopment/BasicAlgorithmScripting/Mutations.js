function mutation(arr) {
    var arr1 = arr[0].split('').join('').toLowerCase();
    console.log(arr1);
    var arr2 = arr[1].toLowerCase().split('');

    var matchArr = [];

    for (var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {

            matchArr.push(arr2[i]);
        }
    }

    if (matchArr.length > 0) {
        return false;
    } else {
        return true;
    }
}
mutation(["hello", "hey"]);
//should return false