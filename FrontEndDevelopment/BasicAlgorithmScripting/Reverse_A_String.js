function reverseString(str) {
    var c = str.split('');
    var b= [];
    for(var i= c.length; i>=0; i--){
       b.push(c[i]);
    }
      return b.join('');
  }
  
  reverseString("hello");
//should become "olleh"  