import { Dispatch, SetStateAction } from 'react';
import Button from '../button/button';
import styles from './number-grid.module.css';

/* eslint-disable-next-line */
export interface NumberGridProps {
  input: string;
  setInput : Dispatch<SetStateAction<string>>;
}

export function NumberGrid(props: NumberGridProps) {
  const addToInput: any = (btnVal : string) => {
    if(props.input === '0') {
      props.setInput(btnVal);
    }

    // eslint-disable-next-line no-empty, no-dupe-else-if
    else if(props.input === '0' && btnVal === '0'){
      
    }

    else {
      props.setInput(props.input + btnVal);
    }
  }

  const clearInput: any = (btnVal : string) => {
    props.setInput('0');
  }

  const grid : string[][] = [
    ['AC', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ]
  return (
    <div>
        <div className={styles["grid"]}>
        <div className={styles["row"]}>
            {grid[0].map((btn, i) => {
                if (btn === 'AC') {
                  return <Button handleInput={clearInput} value={btn} key={i} />
                }
                else { 
                  return <Button handleInput={addToInput} value={btn} key={i} />
                }
            })}
          </div>
          <div className={styles["row"]}>
            {grid[1].map((btn, i) => {
                return <Button handleInput={addToInput} value={btn} key={i} />
            })}
          </div>
          <div className={styles["row"]}>
          {grid[2].map((btn, i) => {
              return <Button handleInput={addToInput} value={btn} key={i} />
          })}
          </div>
          <div className={styles["row"]}>
          {grid[3].map((btn, i) => {
              return <Button handleInput={addToInput} value={btn} key={i} />
          })}
        </div>
        <div className={styles["row"]}>
          {grid[4].map((btn, i) => {
              return <Button handleInput={addToInput} value={btn} key={i} />
          })}
        </div>
      </div>
    </div>
    
  );
}

export default NumberGrid;
