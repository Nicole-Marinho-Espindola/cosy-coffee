import { Link } from "react-router-dom";
import styles from "./css/button.module.css";

function Button({route, btnText}) {
  return (
    <button className={styles.btn}>
      <Link to={route}>{btnText}</Link>
    </button>
  );
}

export default Button;
