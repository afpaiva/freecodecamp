function convertToRoman(num) {

    let arr = String(num).split('');
    let invert = [];
  
    arr.map(e=>{
      invert.unshift(e);
    });
    arr = [];
  
    switch(invert[0]){
      case '0': invert[0] = ''; break;
      case '1': invert[0] = 'I'; break;
      case '2': invert[0] = 'II'; break;
      case '3': invert[0] = 'III'; break;
      case '4': invert[0] = 'IV'; break;
      case '5': invert[0] = 'V'; break;
      case '6': invert[0] = 'VI'; break;
      case '7': invert[0] = 'VII'; break;
      case '8': invert[0] = 'VIII'; break;
      case '9': invert[0] = 'IX';
      }
  
    switch(invert[1]){
      case '0': invert[1] = ''; break;
      case '1': invert[1] = 'X'; break;
      case '2': invert[1] = 'XX'; break;
      case '3': invert[1] = 'XXX'; break;
      case '4': invert[1] = 'XL'; break;
      case '5': invert[1] = 'L'; break;
      case '6': invert[1] = 'LX'; break;
      case '7': invert[1] = 'LXX'; break;
      case '8': invert[1] = 'LXXX'; break;
      case '9': invert[1] = 'XC';
      }
  
    switch(invert[2]){
      case '0': invert[2] = ''; break;
      case '1': invert[2] = 'C'; break;
      case '2': invert[2] = 'CC'; break;
      case '3': invert[2] = 'CCC'; break;
      case '4': invert[2] = 'CD'; break;
      case '5': invert[2] = 'D'; break;
      case '6': invert[2] = 'DC'; break;
      case '7': invert[2] = 'DCC'; break;
      case '8': invert[2] = 'DCCC'; break;
      case '9': invert[2] = 'CM';
      }
  
    switch(invert[3]){
      case '0': invert[3] = ''; break;
      case '1': invert[3] = 'M'; break;
      case '2': invert[3] = 'MM'; break;
      case '3': invert[3] = 'MMM'; break;
      }
  
    invert.map(e=>{
      arr.unshift(e);
    });
  
    num = arr.join().replace(/,/g,'');
    console.log (num);
   return num;
  }
  
  convertToRoman(30);