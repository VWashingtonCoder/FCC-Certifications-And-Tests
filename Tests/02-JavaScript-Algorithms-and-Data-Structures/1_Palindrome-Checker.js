/** Notes
    * A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

    * Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

    * We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

    * We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

// Assignment: Return true if the given string is a palindrome. Otherwise, return false.

// Answer
function palindrome(str) {
    const palindromeArr = [];
    let checkStr = '';
  
    for(let i = 0; i < str.length; i++){
      let charCode = str.charCodeAt(i);
  
      if(charCode > 64 && charCode < 91 
          || charCode > 96 && charCode < 123
          || charCode > 48 && charCode < 58
        ){
        palindromeArr.push(str[i]);
        checkStr = checkStr + str[i];
      }
    }
    
    const palindromeStr = palindromeArr.reverse().join('').toLowerCase() 
    checkStr = checkStr.toLowerCase();
  
    if(checkStr === palindromeStr){
      return true;
    } else {
      return false;
    }
}

/** Tests Requirements
    * palindrome("eye") should return a boolean.
    * palindrome("eye") should return true.
    * palindrome("_eye") should return true.
    * palindrome("race car") should return true.
    * palindrome("not a palindrome") should return false.
    * palindrome("A man, a plan, a canal. Panama") should return true.
    * palindrome("never odd or even") should return true.
    * palindrome("nope") should return false.
    * palindrome("almostomla") should return false.
    * palindrome("My age is 0, 0 si ega ym.") should return true.
    * palindrome("1 eye for of 1 eye.") should return false.
    * palindrome("0_0 (: /-\ :) 0-0") should return true.
    * palindrome("five|\_/|four") should return false.
*/
// Test Consoles
console.log(`eye: ${palindrome("eye")}`); 
console.log(`_eye: ${palindrome("_eye")}`);
console.log(`race car: ${palindrome("race car")}`);
console.log(`not a palindrome: ${palindrome("not a palindrome")}`);
console.log(`A man, a plan, a canal. Panama: ${palindrome("A man, a plan, a canal. Panama")}`);
console.log(`never odd or even: ${palindrome("never odd or even")}`);
console.log(`nope: ${palindrome("nope")}`);
console.log(`almostomla: ${palindrome("almostomla")}`);
console.log(`My age is 0, 0 si ega ym.: ${palindrome("My age is 0, 0 si ega ym.")}`);
console.log(`1 eye for of 1 eye.: ${palindrome("1 eye for of 1 eye.")}`);
console.log(`0_0 (: /-\ :) 0-0: ${palindrome("0_0 (: /-\ :) 0-0")}`);
console.log(`five|\_/|four: ${palindrome("five|\_/|four")}`);