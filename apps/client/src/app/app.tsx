import { useState } from 'react';
import styles from './app.module.css'
import NumberGrid from './Components/number-grid/number-grid';
import Display from './Components/display/display';

export const App = () => {
  const [input, setInput] = useState('0');

  return (
    <div className={styles['container']}>
      <div className={`${styles['number-grid']} ${styles['item']}`} >
        <NumberGrid input={input} setInput={setInput} />
      </div>
      <div className={`${styles['display']} ${styles['item']}`} >
        <Display input={input} setInput={setInput} />
      </div>
    </div>
  );
};

export default App;
