import styles from "./Card.module.css";

function Card(props) {
  return (
    <div
      style={{ backgroundImage: `url(${props.bgImg})` }}
      className={styles.Card}
    >
      <div className={styles.grey_bg}></div>
      <h1>{props.heading}</h1>
    </div>
  );
}

export default Card;
