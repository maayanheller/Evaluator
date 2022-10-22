import { Dispatch, SetStateAction, useState } from 'react';
import Button from '../button/button';
import axios from 'axios';
import styles from './number-grid.module.css';

/* eslint-disable-next-line */
export interface NumberGridProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

export function NumberGrid(props: NumberGridProps) {

  const [isResult, setIsResult] = useState(false);

  const addToInput: any = (btnVal: string) => {
    if (props.input === '0' || (btnVal.length > 1 && !/[-+]/.test(btnVal)) || isResult) {
      props.setInput(btnVal);
      if(isResult) {
        setIsResult(false);
      }
    }

    // eslint-disable-next-line no-empty, no-dupe-else-if
    else if ((props.input === '0' && btnVal === '0') || (btnVal === ' + ' && (props.input.includes('+') || props.input.includes('-'))) || (btnVal === ' - ' && (props.input.includes('-') || props.input.includes('+')))) {

    } else {
      props.setInput(props.input + btnVal);
    }
  };

  const clearInput: any = () => {
    props.setInput('0');
  };

  const calculate: any = async () => {
    const eqNums = props.input.split(" ");
    const num1 = parseFloat(eqNums[0]);
    const num2 = parseFloat(eqNums[2]);
    if(props.input.includes('-') && (num1 < num2)) {
      alert("The evaluator can only work with positive inputs and positive results")
    }

    else {
      const result = await axios.post('http://localhost:3333/api/calculate', {
        eq: props.input,
      });
      addToInput(result.data.result);
    }
    setIsResult(true);
  };

  const grid: string[][] = [
    ['AC', '='],
    ['7', '8', '9', ' + '],
    ['4', '5', '6'],
    ['1', '2', '3', ' - '],
    ['0', '.'],
  ];
  return (
    <div>
      <div className={styles['grid']}>
        <div className={styles['row']}>
          {grid[0].map((btn, i) => {
            if (btn === 'AC') {
              return <Button handleInput={clearInput} value={btn} key={i} />;
            } else if (btn === '=') {
              return <Button handleInput={calculate} value={btn} key={i} />;
            } else {
              return <Button handleInput={addToInput} value={btn} key={i} />;
            }
          })}
        </div>
        <div className={styles['row']}>
          {grid[1].map((btn, i) => {
            return <Button handleInput={addToInput} value={btn} key={i} />;
          })}
        </div>
        <div className={styles['row']}>
          {grid[2].map((btn, i) => {
            return <Button handleInput={addToInput} value={btn} key={i} />;
          })}
        </div>
        <div className={styles['row']}>
          {grid[3].map((btn, i) => {
            return <Button handleInput={addToInput} value={btn} key={i} />;
          })}
        </div>
        <div className={styles['row']}>
          {grid[4].map((btn, i) => {
            return <Button handleInput={addToInput} value={btn} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default NumberGrid;
