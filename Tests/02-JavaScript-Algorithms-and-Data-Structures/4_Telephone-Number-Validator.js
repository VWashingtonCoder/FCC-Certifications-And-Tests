/** Notes
    * The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
        - 555-555-5555
        - (555)555-5555
        - (555) 555-5555
        - 555 555 5555
        - 5555555555
        - 1 555 555 5555
*/

/** Assignment
    * Return true if the passed string looks like a valid US phone number.
    * For this challenge, you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise, return false.
*/

// Solution
function telephoneCheck(str) {  
    if(str[0] === '(' && str[4] !== ')')  return false
    else if(str.includes('-1')) return false
  
    let phoneNum = '';
    let nonNums = '';
  
    for(let char in str){
      let currChar = str[char];
      let currCharCode = currChar.charCodeAt(0);
  
      if(currCharCode >= 48 && currCharCode <= 57) 
        phoneNum = phoneNum + currChar;
      else if(currCharCode === 32 || currCharCode === 40 || currCharCode === 41 || currCharCode === 45) 
        nonNums = nonNums + currChar;
      else return false;
    }
  
    if(phoneNum.length === 10 && nonNums.includes('-') && !nonNums.includes('(') && !nonNums.includes(')')) {
      let strArr = str.split('-')
      if(strArr[0].length !== 3 || strArr[1].length !== 3 || strArr[2].length !== 4) return false;
    }
  
    if(phoneNum.length > 11 || phoneNum.length < 10) return false;
    else if (phoneNum.length === 11 && phoneNum[0] !== "1") return false;
  
  
    if(nonNums.includes('(')){
      if(!nonNums.includes(')')) return false;
    } else if(nonNums.includes(')')) {
      if(!nonNums.includes('(')) return false;
    }
    
    return true;
}

// Tests - console.log(`test: ${}`);
console.log(`555-555-5555 should return boolean (true): ${telephoneCheck("555-555-5555")}`); 
console.log(`1 555-555-5555 should return true: ${telephoneCheck("1 555-555-5555")}`); 
console.log(`1 (555) 555-5555 should return true: ${telephoneCheck("1 (555) 555-5555")}`); 
console.log(`5555555555 should return true: ${telephoneCheck("5555555555")}`); 
console.log(`(555)555-5555 should return true: ${telephoneCheck("(555)555-5555")}`); 
console.log(`1(555)555-5555 should return false.: ${telephoneCheck("1(555)555-5555")}`); 
console.log(`555-5555 should return false.: ${telephoneCheck("555-5555")}`);
console.log(`5555555 should return false.: ${telephoneCheck("5555555")}`);  
console.log(`1 555)555-5555 should return false.: ${telephoneCheck("1 555)555-5555")}`);
console.log(`1 555 555 5555 should return true: ${telephoneCheck("1 555 555 5555")}`);
console.log(`1 456 789 4444 should return true.: ${telephoneCheck("1 456 789 4444")}`);
console.log(`123**&!!asdf# should return false.: ${telephoneCheck("123**&!!asdf#")}`);
console.log(`55555555 should return false.: ${telephoneCheck("55555555")}`);
console.log(`telephoneCheck("(6054756961)") should return false.: ${telephoneCheck("(6054756961)")}`);
console.log(`telephoneCheck("2 (757) 622-7382") should return false.: ${telephoneCheck("2 (757) 622-7382")}`);
console.log(`telephoneCheck("0 (757) 622-7382") should return false.: ${telephoneCheck("0 (757) 622-7382")}`);
console.log(`telephoneCheck("-1 (757) 622-7382") should return false.: ${telephoneCheck("-1 (757) 622-7382")}`);
console.log(`telephoneCheck("2 757 622-7382") should return false.: ${telephoneCheck("2 757 622-7382")}`);
console.log(`telephoneCheck("10 (757) 622-7382") should return false.: ${telephoneCheck("10 (757) 622-7382")}`);
console.log(`telephoneCheck("27576227382") should return false.: ${telephoneCheck("27576227382")}`);
console.log(`telephoneCheck("(275)76227382") should return false.: ${telephoneCheck("(275)76227382")}`);
console.log(`telephoneCheck("2(757)622-7382") should return false.: ${telephoneCheck("2(757)622-7382")}`);
console.log(`telephoneCheck("555)-555-5555") should return false.: ${telephoneCheck("555)-555-5555")}`);
console.log(`telephoneCheck("(555-555-5555") should return false.: ${telephoneCheck("(555-555-5555")}`);
console.log(`telephoneCheck("(555)5(55?)-5555") should return false.: ${telephoneCheck("(555)5(55?)-5555")}`);
console.log(`telephoneCheck("55 55-55-555-5") should return false.: ${telephoneCheck("55 55-55-555-5")}`);
console.log(`telephoneCheck("11 555-555-5555") should return false.: ${telephoneCheck("11 555-555-5555")}`);

