import styles from "./css/input.module.css";

function Input({ type, text, name, placeholder, handleOnChange }) {
  return (
    <div className={styles.form_control}>
      <div className={styles.label_container}>
        <label htmlFor={name}>{text}</label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
}

export default Input;
