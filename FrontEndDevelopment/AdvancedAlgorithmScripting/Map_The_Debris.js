function orbitalPeriod(arr) {
    var ansArr = [];

    var earthRadius = 6367.4447;
    var GM = 398600.4418;

    for (var i = 0; i < arr.length; i++) {
        var avgAlt1 = arr[i].avgAlt;
        var orbital =
            Math.round((2 * Math.PI) * (Math.pow((Math.pow(earthRadius + avgAlt1, 3) / GM), 0.5)));
        ansArr.push({ name: arr[i].name, orbitalPeriod: orbital });
    }
    return ansArr;
}
orbitalPeriod([
    {name: "iss", avgAlt: 413.6}, 
    {name: "hubble", avgAlt: 556.7}, 
    {name: "moon", avgAlt: 378632.553}
    ])
/* should return  [ { name: 'iss', orbitalPeriod: 5557 },
  { name: 'hubble', orbitalPeriod: 5734 },
  { name: 'moon', orbitalPeriod: 2377399 } ]
*/