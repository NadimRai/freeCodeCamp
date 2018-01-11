
function bouncer(arr) {
    return arr.filter(ele => Boolean(ele) === true);

}

bouncer([7, "ate", "", false, 9]);
  //should return [7, "ate", 9]