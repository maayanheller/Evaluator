import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  value: string;

}

export function Button(props: ButtonProps) {
  const btnType = () => {
    let className = '';

    switch (props.value) {
      case '0': 
        className = 'btn0';
        break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        className = "numBtn"
        break;

      case 'AC':
      case '+/-':
      case '%': 
        className = 'utility';
        break;
      
      case '÷':
      case '×':
      case '-':
      case '+':
      case '=':
        className = 'actionBtn';
        break;
    }

    return className;
  }
  return (
    <input type="button" value={props.value} className={`${styles['btn']} ${styles[btnType()]}`} />
  );
}

export default Button;
