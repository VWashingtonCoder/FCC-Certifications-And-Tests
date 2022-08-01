/** Assignment 
    * Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
    * cid is a 2D array listing available currency.
    * The checkCashRegister() function should always return an object with a status key and a change key.
    * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
    * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
    * Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

/** Notes
    * Amount (Currency Unit)	
        - $0.01 (PENNY)
        - $0.05 (NICKEL)
        - $0.10 (DIME)
        - $0.25 (QUARTER)
        - $1 (ONE DOLLAR)
        - $5 (FIVE DOLLARS)
        - $10 (TEN DOLLARS)
        - $20 (TWENTY DOLLARS)
        - $100 (ONE HUNDRED DOLLARS)
    
    * See below for an example of a cash-in-drawer array:
        [
            ["PENNY", 1.01],
            ["NICKEL", 2.05],
            ["DIME", 3.1],
            ["QUARTER", 4.25],
            ["ONE", 90],
            ["FIVE", 55],
            ["TEN", 20],
            ["TWENTY", 60],
            ["ONE HUNDRED", 100]
        ]
*/

// Solution
function checkCashRegister(price, cash, cid) {
    const changeDue = -(price - cash);
    let billsDue = Math.trunc(changeDue);
    let coinsDue = changeDue - billsDue;
    const cidCoins = cid.slice(0, 4).reverse();
    const cidBills = cid.slice(4, 9);
    let totalCidCoins = 0;
    let totalCidBills = 0;
    let status = "OPEN";
    const change = [];

    cidCoins.forEach(coin => totalCidCoins = +(totalCidCoins + coin[1]).toFixed(2));
    cidBills.forEach(bill => totalCidBills = +(totalCidBills + bill[1]).toFixed(2));

    if(totalCidCoins < changeDue && billsDue === 0) status = "INSUFFICIENT_FUNDS";
    else if (billsDue === totalCidBills && coinsDue === totalCidCoins) status = "CLOSED";

    if (status === "CLOSED") cid.forEach(coin => change.push(coin));
    else if (status === "OPEN") { 
      const values = {
        PENNY: 0.01,
        NICKEL: 0.05,
        DIME: 0.10,
        QUARTER: 0.25,
        ONE: 1,
        FIVE: 5,
        TEN: 10,
        TWENTY: 20,
      };
      let remainder = billsDue + coinsDue;
      let cidIdx = cid.length - 1;

      while (remainder > 0 && cidIdx >= 0) {
        const currentCurrencyName = cid[cidIdx][0];
        const currentCurrencyValue = currentCurrencyName !== "ONE HUNDRED" ? values[currentCurrencyName] : 100;
      
        if(remainder > currentCurrencyValue) {
          const currentCidValue = cid[cidIdx][1];
          let amountReturned = 0;
        
          if(remainder > currentCidValue) {
            change.push(cid[cidIdx]);
            remainder = (remainder - currentCidValue).toFixed(2);
          } else if(remainder <= currentCidValue && remainder > 0.99) {
             const remainingWholeNum = Math.trunc(remainder);
             amountReturned = Math.floor(remainingWholeNum/currentCurrencyValue) * currentCurrencyValue;
             change.push([currentCurrencyName, amountReturned]);
             remainder = (remainder - amountReturned).toFixed(2); 
          } else if(remainder <= currentCidValue && remainder <= 0.99) {
            amountReturned = Math.floor(remainder/currentCurrencyValue) * currentCurrencyValue;
            change.push([currentCurrencyName, amountReturned]);
            remainder = (remainder - amountReturned).toFixed(2); 
          }
        }
        
        cidIdx--;
      }
    }
  
    return {status: status, change: change};     
}

// Tests

// console.log(`[1] checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.`);
// console.log(typeof checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

// console.log(`[2] checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.`);
// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

// console.log(`[3] checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.`);
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

// console.log(`[4] checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.`);
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

// console.log(`[5] checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.`);
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

// console.log(`[6] checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.`);
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));