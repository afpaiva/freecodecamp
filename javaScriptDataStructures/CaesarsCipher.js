function rot13(str) {
  
    str = str.split('').map(e=>{
      e = str.charCodeAt(str.indexOf(e));
      if(e >= 65 && e <= 90){
        e+=13;
        if(e > 90){
          e = e - 90 + 64
        };
      }
      e = String.fromCharCode(e)
      return e;
    }).join('');
  
  console.log(str);
    return str;
  }
  
  rot13("SERR PBQR PNZC");