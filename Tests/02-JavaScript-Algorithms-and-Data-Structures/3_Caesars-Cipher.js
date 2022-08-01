/** Notes
    * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher, the meanings of the letters are shifted by some set amount.
    * A common modern use is a ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O, and so on.
*/

/** Assignment
    * Write a function that takes a ROT13 encoded string as input and returns a decoded string.
    * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

// Solution
function rot13(str) {
    const words = str.split(' ');
    const rot13Words = [];
  
    for(let i = 0; i < words.length; i++){
      let currWord = words[i];
      let rot13Word = '';
  
      for(let letter in currWord){
        let currLetter = currWord[letter];
        let currCode = currLetter.charCodeAt(0);
  
        if(currCode >= 78 && currCode <= 90){
          currCode = currCode - 13;
        }else if(currCode <= 77 && currCode >= 65){
          currCode = currCode + 13;
        }
        currLetter = String.fromCharCode(currCode)
        rot13Word = rot13Word + currLetter;
      }
  
      rot13Words.push(rot13Word);
    } 
    return rot13Words.join(' ');
}

/** Test Requirements
    * rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
    * rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
    * rot13("SERR YBIR?") should decode to the string FREE LOVE?
    * rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/

// Test Consoles
console.log(`SERR PBQR PNZC: ${rot13("SERR PBQR PNZC")}`);
console.log(`SERR CVMMN!: ${rot13("SERR CVMMN!")}`);
console.log(`SERR YBIR?: ${rot13("SERR YBIR?")}`);
console.log(`GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.: ${rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")}`);
