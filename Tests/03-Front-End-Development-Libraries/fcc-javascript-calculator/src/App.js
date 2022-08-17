import './App.css';
import React, { useState } from 'react';

const initialDisplay = {
  previousNum: "",
  currentNum: "",
  operation: ""
}

const App = () => {
  const [calculator, setCalculator] = useState(initialDisplay);
  const { currentNum, operation, previousNum } = calculator;

  function clear() {
    setCalculator(initialDisplay);
  }

  function deleteNum() {
    setCalculator({ ...calculator, currentNum: currentNum.slice(0, currentNum.length-1) });
  }

  function appendNumber(evt){
    const character = evt.target.value;

    if (character === "." && currentNum.includes(".")) return;
    else if (character === "0" && currentNum === "0") return;
    else if (character === "." && currentNum.length === 0) {
      setCalculator({ ...calculator, currentNum: "0" + character});
    } else setCalculator({ ...calculator, currentNum: currentNum + character});
  }

  function compute(operator) {
    let result;
    const previous = parseFloat(previousNum);
    const current = parseFloat(currentNum);

    if (isNaN(previous) || isNaN(current)) return;

    switch (operation) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "*":
        result = previous * current;
        break;
      case "/":
        result = previous / current;
        break;
      default:
        return;
    }

    if(operator === "=") {
      setCalculator({
        ...calculator,
        currentNum: result,
        previousNum: "",
        operation: ""
      });
    } else {
      setCalculator({
        ...calculator,
        currentNum: "",
        previousNum: result,
        operation: operator
      });
    }
  }

  function chooseOperation(evt) {
    const operator = evt.target.value;

    if (operator === "-" && operation !== "") {
      setCalculator({ ...calculator, currentNum: currentNum.padStart(currentNum.length + 1, operator) });
    } else if (operation !== "" && (currentNum === "" || currentNum === "-")) {
      setCalculator({ ...calculator, currentNum: "", operation: operator });
      return;
    } else if (currentNum === "" || (operation === "" && operator === "=") ) return;
    
    if (previousNum !== "") {
      compute(operator);
    } else {
      setCalculator({
        ...calculator,
        previousNum: currentNum,
        currentNum: "",
        operation: operator
      });
    }
  }

  return(
    <div className="App">
      <h1 id="title">JavaScript Calculator</h1>
      
      <div id='screen'>
        <div className='previous-num'>{previousNum === "" ? "History" : `${previousNum} ${operation !== "/" ? operation : "÷"}`}</div>
        <div id="display">{currentNum === "" ? "0" : currentNum}</div>
      </div>
      
      
      <div id="calculator"> 
        {/* row top */}
        <button id="delete" onClick={deleteNum}>DEL</button>
        <button id="clear" onClick={clear}>AC</button>
        {/* row 1 */} 
        <button id="add" value="+" onClick={chooseOperation}>+</button>
        <button id="subtract" value="-" onClick={chooseOperation}>-</button>
        <button id="multiply" value="*" onClick={chooseOperation}>*</button>
        <button id="divide" value="/" onClick={chooseOperation}>÷</button>
        {/* row 2 */}
        <button id="nine" value="9" onClick={appendNumber}>9</button>
        <button id="eight" value="8" onClick={appendNumber}>8</button>
        <button id="seven" value="7" onClick={appendNumber}>7</button>
        <button id="equals" value="=" onClick={chooseOperation}>=</button>
        {/* row 3 */}
        <button id="six" value="6" onClick={appendNumber}>6</button>
        <button id="five" value="5" onClick={appendNumber}>5</button>
        <button id="four" value="4" onClick={appendNumber}>4</button>
        <button id="decimal" value="." onClick={appendNumber} >.</button>
        {/* row 4 */}
        <button id="three" value="3" onClick={appendNumber}>3</button>
        <button id="two" value="2" onClick={appendNumber}>2</button>
        <button id="one" value="1" onClick={appendNumber}>1</button>
        <button id="zero" value="0" onClick={appendNumber}>0</button>
      </div>
    </div>
  )
}

export default App;
