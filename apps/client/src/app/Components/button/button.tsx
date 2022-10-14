import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  readonly value: string;

}

export function Button(props: ButtonProps) {
  return (
    <input type="button" value={props.value} className={`${styles['btn']} ${isNaN(Number(props.value)) ? styles['actionBtn']: styles['numBtn']}`} />
  );
}

export default Button;
