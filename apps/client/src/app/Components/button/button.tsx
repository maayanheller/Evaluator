import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  value: string;
  handleInput : any;
}

export function Button(props: ButtonProps) {
  const btnType = () => {
    let className = '';

    switch (props.value) {
      case '0': 
        className = 'longBtn';
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
        className = 'utility';
        break;
        case ' - ':
        case ' + ':
        className = 'minusBtn';
        break;
      
      case '=':
        className = 'actionBtn';
        break;
    }

    return {
      className,
    };
  }

  return (
    <input type="button" onClick={() => props.handleInput(props.value)} value={props.value} className={`${styles['btn']} ${styles[btnType().className]} ${props.value === 'AC' || props.value === '÷' ? styles['longBtn'] : {}}`} />
  );
}

export default Button;
