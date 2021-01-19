import styles from "./Header.module.css";
import Navbar from "./Navbar/Navbar";

function Header(props) {
  return (
    <section className={styles.Header}>
      <Navbar menuClicked={props.navbarMenuClick} menuOpen={props.menuOpen} />
      <div className={styles.Headline}>
        <h1>
          IMMERSIVE <br /> EXPERIENCES <br /> THAT DELIVER
        </h1>
      </div>
    </section>
  );
}

export default Header;
