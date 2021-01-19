import styles from "./Footer.module.css";
import Logo from "../../assets/icons/logo.svg";
import socialIcons from "./socialIcons";

function Footer() {
  const date = new Date();
  const icons = socialIcons.map((data, index) => {
    return (
      <li key={index}>
        <a href={data.href} target="_blank" rel="noreferrer">
          <img src={data.icon} alt="Social Icon" />
        </a>
      </li>
    );
  });

  return (
    <section className={styles.Footer}>
      <div className={styles.Logo_Nav_Section}>
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
      </div>
      <div className={styles.Social_Section}>
        <ul className={styles.Icons_List}>{icons}</ul>
        <p>© {date.getFullYear()} Loopstudios. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
