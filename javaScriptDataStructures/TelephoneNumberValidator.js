function telephoneCheck(str) {

    let regEx1 = /^[0-9][0-9][0-9](\s|-)[0-9][0-9][0-9](\s|-)[0-9][0-9][0-9][0-9]$/;
    let regEx2 = /^\([0-9][0-9][0-9]\)[0-9][0-9][0-9](\s|-)[0-9][0-9][0-9][0-9]$/;
    let regEx3 = /^\([0-9][0-9][0-9]\)\s[0-9][0-9][0-9](\s|-)[0-9][0-9][0-9][0-9]$/;
    let regEx4 = /^[0-9][0-9][0-9]\s[0-9][0-9][0-9]\s[0-9][0-9][0-9][0-9]$/;
    let regEx5 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
    let regEx6 = /^1\s[0-9][0-9][0-9](\s|-)[0-9][0-9][0-9](\s|-)[0-9][0-9][0-9][0-9]$/;
    let regEx7 = /^1(\s|)\([0-9][0-9][0-9]\)(\s|-|)[0-9][0-9][0-9](\s|-)[0-9][0-9][0-9][0-9]$/;
  
    if (regEx1.test(str) ||
     regEx2.test(str) ||
     regEx3.test(str) ||
     regEx4.test(str) ||
     regEx5.test(str) ||
     regEx6.test(str) ||
     regEx7.test(str))
     return true;
     else return false;
  
  }
  
  console.log(telephoneCheck("1(555)555-5555"));