import { Link } from "react-router-dom";
import styles from "./css/button.module.css";

function Button() {
  return (
    <button className={styles.btn}>
      <Link to="./NewProject">New Event</Link>
    </button>
  );
}

export default Button;
