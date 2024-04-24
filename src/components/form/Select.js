import styles from "./css/select.module.css";

function Select({ text, name, options, handleOnChange }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <Select name={name} id={name} onChange={handleOnChange}>
        <option>Choose an option</option>
      </Select>
    </div>
  );
}

export default Select;
