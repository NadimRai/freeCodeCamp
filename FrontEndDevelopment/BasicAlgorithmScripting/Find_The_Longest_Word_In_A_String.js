function findLongestWord(str) {
  var longest = 0;
  var strArr = str.split(' ');
  for(var i = 0; i<strArr.length; i++){
    if(strArr[i].length > longest){
      longest = strArr[i].length;
    }
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
