import styles from "./Intro.module.css";
import Image from "../../assets/images/desktop/image-interactive.jpg";

function Intro() {
  return (
    <section className={styles.Intro}>
      <img src={Image} alt="VR" />
      <div className={styles.Intro_text}>
        <h1>THE LEADER IN INTERACTIVE VR</h1>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
}

export default Intro;
