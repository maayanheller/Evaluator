import { Dispatch, SetStateAction } from 'react';
import styles from './display.module.css';

/* eslint-disable-next-line */
export interface DisplayProps {
  input : string;
  setInput : Dispatch<SetStateAction<string>>;
}

export function Display(props: DisplayProps) {
  return (
    <div className={styles['container']}>
      <h1>{props.input}</h1>
    </div>
  );
}

export default Display;
