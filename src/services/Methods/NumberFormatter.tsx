// import React from 'react';

function numberFormatter(n: number | undefined, p: number, ts: string, dp: string) {
    var t: string[] = [];

    var number;

    if(n === null) {
      return '-';
    } else {
      number = typeof n === 'undefined' ? 0 : n.toString();
    }

    // Get arguments, set defaults
    if (typeof p  == 'undefined') p  = 2;
    if (typeof ts == 'undefined') ts = ',';
    if (typeof dp == 'undefined') dp = '.';
  
    // Get number and decimal part of n
    var numberArray = Number(number).toFixed(p).split('.');
  
    // Add thousands separator and decimal point (if requied):
    for (var iLen = numberArray[0].length, i = iLen? iLen % 3 || 3 : 0, j = 0; i <= iLen; i+=3) {
      t.push(numberArray[0].substring(j, i));
      j = i;
    }
    // Insert separators and return result
    return t.join(dp) + (numberArray[1]? dp + numberArray[1] : '');
  }

  export default numberFormatter;