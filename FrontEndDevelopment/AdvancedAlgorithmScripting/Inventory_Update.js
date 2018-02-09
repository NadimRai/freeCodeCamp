function updateInventory(arr1, arr2) {
    var count = 0;
    for (var i = 0; i < arr2.length; i++) {
        for (var j = 0; j < arr1.length; j++) {
            if (arr2[i][1] === arr1[j][1]) {
                arr1[j][0] = arr2[i][0] + arr1[j][0];
                count += 1;
            }
        }
        if (count < 1) {
            arr1.push(arr2[i]);
        }
        count = 0;
    }
    arr1.sort(function (a, b) {
        if (a[1] > b[1]) {
            return 1;
        }
        if (a[1] < b[1]) {
            return -1;
        }
        return 0;
    });
    return arr1;
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
/*should return [ [ 88, 'Bowling Ball' ],
  [ 2, 'Dirty Sock' ],
  [ 3, 'Hair Pin' ],
  [ 3, 'Half-Eaten Apple' ],
  [ 5, 'Microphone' ],
  [ 7, 'Toothpaste' ] ]
*/