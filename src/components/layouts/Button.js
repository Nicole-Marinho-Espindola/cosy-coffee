import styles from "./css/button.module.css";
import NewProject from "../pages/NewProject";

function Button() {
  return (
    <button className={styles.btn}>
      <a href="./NewProject">New Event</a>
    </button>
  );
}

export default Button;
