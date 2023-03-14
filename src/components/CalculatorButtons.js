import React, { useContext } from 'react';
import CalculatorContext from '../contexts/CalculatorContext';

function CalculatorButtons() {
  const { handleInput } = useContext(CalculatorContext);

  return (
    <div className="calculator-buttons">
        <div className="row">
            <button onClick={() => handleInput('1')}>1</button>
            <button onClick={() => handleInput('2')}>2</button>
            <button onClick={() => handleInput('3')}>3</button>
            <button onClick={() => handleInput('+')}>+</button>
        </div>
        <div className="row">
        <button onClick={() => handleInput('4')}>4</button>
            <button onClick={() => handleInput('5')}>5</button>
            <button onClick={() => handleInput('6')}>6</button>
            <button onClick={() => handleInput('-')}>-</button>
        </div>
        <div className="row">
            <button onClick={() => handleInput('7')}>7</button>
            <button onClick={() => handleInput('8')}>8</button>
            <button onClick={() => handleInput('9')}>9</button>
            <button onClick={() => handleInput('*')}>*</button>
        </div>
        <div className="row">
            <button onClick={() => handleInput('C')}>C</button>
            <button onClick={() => handleInput('.')}>.</button>
            <button onClick={() => handleInput('0')}>0</button>
            <button onClick={() => handleInput('/')}>/</button>
        </div>
        <div className="row">
            <button id="equal" onClick={() => handleInput('=')}>=</button>
        </div>
        
    </div>
  );
}

export default CalculatorButtons;