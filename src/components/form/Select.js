import styles from "./css/select.module.css";

function Select({ text, name, options, handleOnChange }) {

  return (
    <div className={styles.form_control}>
      <div className={styles.label_container}>
        <label htmlFor={name}>{text}</label>
        <select name={name} id={name} onChange={handleOnChange}>
          <option>Choose an option</option>
          {options.map((option) => (
            <option value={option.id} key={option.id}>{option.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Select;
