import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  return props.show ? (
    <div className={styles.Backdrop} onClick={props.clicked}></div>
  ) : null;
};

export default Backdrop;
