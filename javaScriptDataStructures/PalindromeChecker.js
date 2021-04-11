function palindrome(str) {

    let str2 = str.toLowerCase().replace(/\W|_/g,'').split('')
    
    let inverted = [];
    for(let i = 0; i < str2.length; i++){
      inverted.unshift(str2[i]);
    }
    
    console.log(inverted.join().replace(/,/g,''))
    console.log(str2.join().replace(/,/g,''))
  
    if(inverted.join() == str2.join()) return true;
    else return false
  
  }
  
  console.log(palindrome("1 eye for _of 1 eye."));