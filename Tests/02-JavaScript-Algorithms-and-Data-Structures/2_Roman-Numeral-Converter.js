/* Notes
    * Roman Numerals (Arabic Numerals)
        - M (1000)
        - CM (900)
        - D (500)
        - CD (400)
        - C (100)
        - XC (90)
        - L (50)
        - XL (40)
        - X (10)
        - IX (9)
        - V (5)
        - IV (4)
        - I (1)
    * All roman numerals answers should be provided in upper-case.
*/

// Assignment: Convert the given number into a roman numeral.

// Answer
function convertToRoman(num) {
    const romanArr = [];
    let str = '';
    let numArr = num.toString().split('');
    let numLength = numArr.length;
  
    for(num in numArr){
      let curr = parseInt(numArr[num]);
      
      if(numLength === 4){
        str = str.padEnd(curr, 'M');
        romanArr.push(str);
        numLength--;
        str = '';
      } else if (numLength === 3){
        if(curr === 9){
          str = str.padEnd(2, 'CM');
          romanArr.push(str);
          str = '';
        } else if(curr < 9 && curr >= 5){
          str = str.padEnd(1, 'D');
          curr = curr - 5;
          romanArr.push(str);
          str = '';
        }
        
  
        if(curr === 4){
          str = str.padEnd(2, 'CD');
          romanArr.push(str);
          str = '';
        } else if(curr < 4 && curr >= 1){
          str = str.padEnd(curr, 'C');
          romanArr.push(str);
          str = '';
        }
        
        numLength--;
      } else if(numLength === 2) {
        if(curr === 9){
          str = str.padEnd(2, 'XC');
          romanArr.push(str)
          str = '';
        } else if(curr < 9 && curr >= 5){
          str = str.padEnd(1, 'L');
          curr = curr - 5;
          romanArr.push(str)
          str = '';
        }
        
        if(curr === 4){
          str = str.padEnd(2, 'XL');
          romanArr.push(str)
          str = '';
        } else if(curr < 4 && curr >= 1){
          str = str.padEnd(curr, 'X')
          romanArr.push(str)
          str = '';
        }
  
        numLength--
      } else if(numLength === 1){
        if(curr === 9){
          str = str.padEnd(2, 'IX');
          romanArr.push(str)
          str = '';
        } else if(curr < 9 && curr >= 5){
          str = str.padEnd(1, 'V');
          curr = curr - 5;
          romanArr.push(str);
          str = '';
        }
        
        if(curr === 4){
          str = str.padEnd(2, 'IV');
          romanArr.push(str);
          str = '';
        } else if(curr < 4 && curr >= 1){
          str = str.padEnd(curr, 'I');
          romanArr.push(str);
          str = '';
        }
  
        numLength--;
      }
    }

    return romanArr.join('');
}

/** Test Requirements
 * convertToRoman(2) should return the string II.
 * convertToRoman(3) should return the string III.
 * convertToRoman(4) should return the string IV.
 * convertToRoman(5) should return the string V.
 * convertToRoman(9) should return the string IX.
 * convertToRoman(12) should return the string XII.
 * convertToRoman(16) should return the string XVI.
 * convertToRoman(29) should return the string XXIX.
 * convertToRoman(44) should return the string XLIV.
 * convertToRoman(45) should return the string XLV.
 * convertToRoman(68) should return the string LXVIII
 * convertToRoman(83) should return the string LXXXIII
 * convertToRoman(97) should return the string XCVII
 * convertToRoman(99) should return the string XCIX
 * convertToRoman(400) should return the string CD
 * convertToRoman(500) should return the string D
 * convertToRoman(501) should return the string DI
 * convertToRoman(649) should return the string DCXLIX
 * convertToRoman(798) should return the string DCCXCVIII
 * convertToRoman(891) should return the string DCCCXCI
 * convertToRoman(1000) should return the string M
 * convertToRoman(1004) should return the string MIV
 * convertToRoman(1006) should return the string MVI
 * convertToRoman(1023) should return the string MXXIII
 * convertToRoman(2014) should return the string MMXIV
 * convertToRoman(3999) should return the string MMMCMXCIX 
*/

// Test Consoles
console.log(`2: ${convertToRoman(2)}`);
console.log(`3: ${convertToRoman(3)}`);
console.log(`4: ${convertToRoman(4)}`);
console.log(`5: ${convertToRoman(5)}`);
console.log(`9: ${convertToRoman(9)}`);
console.log(`12: ${convertToRoman(12)}`);
console.log(`16: ${convertToRoman(16)}`);
console.log(`29: ${convertToRoman(29)}`);
console.log(`44: ${convertToRoman(44)}`);
console.log(`45: ${convertToRoman(45)}`);
console.log(`68: ${convertToRoman(68)}`);
console.log(`83: ${convertToRoman(83)}`);
console.log(`97: ${convertToRoman(97)}`);
console.log(`99: ${convertToRoman(99)}`);
console.log(`400: ${convertToRoman(400)}`);
console.log(`500: ${convertToRoman(500)}`);
console.log(`501: ${convertToRoman(501)}`);
console.log(`649: ${convertToRoman(649)}`);
console.log(`798: ${convertToRoman(798)}`);
console.log(`891: ${convertToRoman(891)}`);
console.log(`1000: ${convertToRoman(1000)}`);
console.log(`1004: ${convertToRoman(1004)}`);
console.log(`1006: ${convertToRoman(1006)}`);
console.log(`1023: ${convertToRoman(1023)}`);
console.log(`2014: ${convertToRoman(2014)}`);
console.log(`3999: ${convertToRoman(3999)}`);