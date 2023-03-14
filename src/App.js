import React, { useState } from 'react';
import CalculatorContext from './contexts/CalculatorContext';
import CalculatorDisplay from './components/CalculatorDisplay';
import CalculatorButtons from './components/CalculatorButtons';
import './Calculator.css';

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  const [shouldClear, setShouldClear] = useState(false);

  const handleInput = value => {
    if (/\d/.test(value)) {
      handleNumberInput(value);
    } else if (['+', '-', '*', '/'].includes(value)) {
      handleOperatorInput(value);
    } else if (value === '=') {
      handleEqualsInput();
    } else if (value === 'C') {
      handleClearInput();
    } else if (value === '.') {
      handleDecimalInput();
    }
  };

  const handleNumberInput = value => {
    if (shouldClear) {
      setDisplayValue(value);
      setShouldClear(false);
    } else {
      setDisplayValue(displayValue === '0' ? value : displayValue + value);
    }
  };

  const handleOperatorInput = value => {
    if (operator === null) {
      setOperator(value);
      setPreviousValue(displayValue);
      setDisplayValue('0');
    } else {
      handleEqualsInput();
      setOperator(value);
    }
  };

  const handleEqualsInput = () => {
    if (operator !== null) {
      const currentValue = parseFloat(displayValue);
      const previous = parseFloat(previousValue);
      switch (operator) {
        case '+':
          setDisplayValue(previous + currentValue);
          break;
        case '-':
          setDisplayValue(previous - currentValue);
          break;
        case '*':
          setDisplayValue(previous * currentValue);
          break;
        case '/':
          setDisplayValue(previous / currentValue);
          break;
        default:
          break;
      }
      setOperator(null);
      setPreviousValue(null);
      setShouldClear(true);
    }
  };

  const handleClearInput = () => {
    setDisplayValue('0');
    setOperator(null);
    setPreviousValue(null);
    setShouldClear(false);
  };

  const handleDecimalInput = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  return (
    <CalculatorContext.Provider value={{ handleInput }}>
      <div className="calculator">
        <CalculatorDisplay displayValue={displayValue} />
        <CalculatorButtons />
      </div>
    </CalculatorContext.Provider>
  );
}

export default App;