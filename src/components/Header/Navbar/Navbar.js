import styles from "./Navbar.module.css";
import Logo from "../../../assets/icons/logo.svg";
import Hamburger from "../../../assets/icons/icon-hamburger.svg";
import CloseIcon from "../../../assets/icons/icon-close.svg";

function Navbar(props) {
  return (
    <div className={styles.Navbar}>
      <a href="/#">
        <img src={Logo} alt="Loopstudios" />
      </a>
      <ul className={styles.Navbar_Links}>
        <li className={`link ${styles.Navbar_Link}`}>
          <a href="/#">About</a>
        </li>
        <li className={`link ${styles.Navbar_Link}`}>
          <a href="/#">Careers</a>
        </li>
        <li className={`link ${styles.Navbar_Link}`}>
          <a href="/#">Events</a>
        </li>
        <li className={`link ${styles.Navbar_Link}`}>
          <a href="/#">Products</a>
        </li>
        <li className={`link ${styles.Navbar_Link}`}>
          <a href="/#">Support</a>
        </li>
      </ul>
      <img
        onClick={props.menuClicked}
        className={styles.Menu}
        src={props.menuOpen ? CloseIcon : Hamburger}
        alt={props.menuOpen ? "Close" : "Menu"}
      />
    </div>
  );
}

export default Navbar;
