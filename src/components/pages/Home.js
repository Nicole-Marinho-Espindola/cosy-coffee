import styles from "./css/home.module.css";
import Button from "../layouts/Button";
import bearImg from "../../img/Cosy_Bear_Cafe.webp";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h1 className={styles.main_title}>
          Welcome to <span>Cosy Bear</span>
        </h1>
        <p className={styles.text_block}>
          This is the main system of Cosy Bear Coffee and here you can organize
          your Cosy Bear events
        </p>
        <p className={styles.paragraph}>Follow the button to add new event!</p>
        <Button route="./newproject" btnText="New event" />
      </div>
      <div className={styles.img_block}>
        <img className={styles.img} src={bearImg} alt="Cosy Bear Poster" />
      </div>
    </div>
  );
}

export default Home;
