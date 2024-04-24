import styles from "./css/button.module.css";
import NewProject from "../pages/NewProject";

function Button({href}) {
  return (
    <button className={styles.btn}>
      <a href={href}>New Event</a>
    </button>
  );
}

export default Button;
