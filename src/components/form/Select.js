import styles from "./css/select.module.css";
import categories from "../../mocks/db_projects.json"

function Select({ text, name, options, handleOnChange }) {
  
  return (
    <div className={styles.form_control}>
      <div className={styles.label_container}>
        <label htmlFor={name}>{text}</label>
        <select name={name} id={name} onChange={handleOnChange}>
          <options>
            <option>{categories.name}</option>
          </options>
        </select>
      </div>
    </div>
  );
}

export default Select;
