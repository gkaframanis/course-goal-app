// This is how you import if you want to use CSS modules.
import styles from "./Button.module.css";

const Button = props => {
  return (
    // We consider the styles as an object.
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
