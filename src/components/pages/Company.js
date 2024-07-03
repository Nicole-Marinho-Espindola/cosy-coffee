import Logo from "../../img/Logo.png";
import Styles from "./css/company.module.css";
import Slider from "../layouts/Slider"

function Company() {
  return (
    <div className={Styles.container}>
      <nav className={Styles.navbar}>
        <img src={Logo} />
        <h1>Company</h1>
      </nav>
      <Slider />
    </div>
  );
}

export default Company;
