import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';

const initialDisplay = {
  display: "",
  sign: "",
  results: 0,
  history: 0
}

const App = () => {
  const [calc, setCalc] = useState(initialDisplay);
  const [equalState, setEqualState] = useState(false);
  const { display, sign, results, history } = calc;
  const num = display === "" ? 0 : parseFloat(display); 

  function handleNums(evt) {
    const { value } = evt.target;

    if(display === "" || equalState === true) {
      setCalc({ ...calc, display: value });
      setEqualState(false);
    } else {
      setCalc({ ...calc, display: display + value });
    }
  }

  function addDecimal() {
    if(!display.includes(".")) setCalc({ ...calc, display: display + "." });
  }

  function removeNum() {
    setCalc({ ...calc, display: display.slice(0, -1) });
  }

  function add() {
    if(display === "" || results === 0) {
      setCalc({
        ...calc,
        results: num,
        display: "",
        sign: "+"
      });  
    } else {
      setCalc({
        ...calc,
        results: results + num,
        display: "",
        sign: "+"
      });
    }
    setEqualState(false);
  }

  function subtract() {
    if(display === "" || results === 0) {
      setCalc({
        ...calc,
        results: num,
        display: "",
        sign: "-"
      });  
    } else {
      setCalc({
        ...calc,
        results: results - num,
        display: "",
        sign: "-"
      });
    }
    setEqualState(false);
  }

  function multiply() {
    if(display === "" || results === 0) {
      setCalc({
        ...calc,
        results: num,
        display: "",
        sign: "*"
      });  
    } else {
      setCalc({
        ...calc,
        results: results * num,
        display: "",
        sign: "*"
      });
    }
    setEqualState(false);
  }

  function divide() {
    if(display === "" || results === 0) {
      setCalc({
        ...calc,
        results: num,
        display: "",
        sign: "÷"
      });  
    } else {
      setCalc({
        ...calc,
        results: results / num,
        display: "",
        sign: "÷"
      });
    }
    setEqualState(false);
  }

  function equals () {
    if(sign === "+") {
      setCalc({
        ...calc,
        display: (results + num).toString(),
        history: (results + num),
        results: 0,
        sign: ""
      });
      setEqualState(true);
    } else if(sign === "-") {
      setCalc({
        ...calc,
        display: (results - num).toString(),
        history: (results - num),
        results: 0,
        sign: ""
      });
      setEqualState(true);
    } else if(sign === "*") {
      setCalc({
        ...calc,
        display: (results * num).toString(),
        history: (results * num),
        results: 0,
        sign: ""
      });
      setEqualState(true);
    } else if(sign === "÷") {
      setCalc({
        ...calc,
        display: (results / num).toString(),
        history: (results / num),
        results: 0,
        sign: ""
      });
      setEqualState(true);
    }
  }

  function clear() {
    setCalc(initialDisplay);
  }

  return (
    <div className="App">
      <h1 id="title">
        JavaScript Calculator
      </h1>
      <div id="calc-display">
        <h3 id="display-num">
          {display === "" ? "0" : display}
        </h3>
        <div id="display-info">
          <div id="results">Current Results: {results}</div>
          <div id="sign">Operator: {sign}</div>
          <div id="history">Last Results: {history}</div>
        </div>
      </div>
      
      
      <div id="calculator"> 
        {/* row top */}
        <button id="back" onClick={removeNum}>🔙</button>
        <button id="clear" value="C" onClick={clear}>C</button>
        {/* row 1 */}
        <button id="add" value="+" onClick={add}>+</button>
        <button id="subtract" value="-" onClick={subtract}>-</button>
        <button id="multiply" value="*" onClick={multiply}>*</button>        
        <button id="divide" value="/" onClick={divide}>÷</button>
        {/* row 2 */}
        <button id="nine" value="9"onClick={handleNums}>9</button>
        <button id="eight" value="8" onClick={handleNums}>8</button>
        <button id="seven" value="7" onClick={handleNums}>7</button>
        <button id="equals" value="=" onClick={equals}>=</button>
        {/* row 3 */}
        <button id="six" value="6" onClick={handleNums}>6</button>
        <button id="five" value="5" onClick={handleNums}>5</button>
        <button id="four" value="4" onClick={handleNums}>4</button>
        <button id="decimal" value="." onClick={addDecimal} >.</button>
        {/* row 4 */}
        <button id="three" value="3" onClick={handleNums}>3</button>
        <button id="two" value="2" onClick={handleNums}>2</button>
        <button id="one" value="1" onClick={handleNums}>1</button>
        <button id="zero" value="0" onClick={handleNums}>0</button>
        
        
      </div>
    </div>
  );
}

export default App;
