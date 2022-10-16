import Button from './Components/button/button';
import styles from './app.module.css'
import NumberGrid from './Components/number-grid/number-grid';

export const App = () => {

  return (
    <div className={styles['body']}>
      <NumberGrid />
      <div />
    </div>
  );
};

export default App;
