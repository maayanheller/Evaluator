import Button from '../button/button';
import styles from './number-grid.module.css';

/* eslint-disable-next-line */
export interface NumberGridProps {}

export function NumberGrid(props: NumberGridProps) {
  const grid : string[][] = [
    ['AC', '+/-', '%', '÷'],
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
                return <Button value={btn} key={i} />
            })}
          </div>
          <div className={styles["row"]}>
            {grid[1].map((btn, i) => {
                return <Button value={btn} key={i} />
            })}
          </div>
          <div className={styles["row"]}>
          {grid[2].map((btn, i) => {
              return <Button value={btn} key={i} />
          })}
          </div>
          <div className={styles["row"]}>
          {grid[3].map((btn, i) => {
              return <Button value={btn} key={i} />
          })}
        </div>
        <div className={styles["row"]}>
          {grid[4].map((btn, i) => {
              return <Button value={btn} key={i} />
          })}
        </div>
      </div>
    </div>
    
  );
}

export default NumberGrid;
