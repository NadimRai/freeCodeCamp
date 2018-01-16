function convertToRoman(num) {
    var number = [0,1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000,2000,3000];
  
    var roman =["","I","II","III","IV","V","VI","VII","VIII","IX","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","M", "MM", "MMM"];
  
    var resultNum;
    var n = num.toString().split('');
  
    if(n.length === 1){
      var m = parseInt(n.join());
      resultNum = number.indexOf(m);
      return roman[resultNum];
    }
  
  
    if(n.length === 2){
      var i = parseInt(n[0])*10;
      var j = parseInt(n[1]);
      var numI= number.indexOf(i);
      var numJ = number.indexOf(j);
      
      var result = roman[numI]+roman[numJ];
      return result;
    }
  
    if(n.length === 3){
      var i = parseInt((n[0])*100);
      var j = parseInt((n[1]) *10);
      var k = parseInt(n[2]);
      
      var numI= number.indexOf(i);
      var numJ = number.indexOf(j);
      var numK = number.indexOf(k);
      
      var result = roman[numI]+roman[numJ]+roman[numK];
      return result;
    }
  
    if(n.length === 4){
      var i = parseInt((n[0])*1000);
      var j = parseInt((n[1]) *100);
      var k = parseInt((n[2]) *10);
      var l = parseInt(n[3]);
      
      var numI = number.indexOf(i);
      var numJ = number.indexOf(j);
      var numK = number.indexOf(k);
      var numL = number.indexOf(l);
      
      var result = roman[numI]+roman[numJ]+roman[numK]+roman[numL];
       return result;
    }
  }
  convertToRoman(29) 
  //should return "XXIX"
  