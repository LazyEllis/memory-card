import styles from "../styles/card.module.css";

const Card = ({ image, text }) => (
  <div className={styles.card}>
    <img src={image} />
    <div className={styles["card-text"]}>{text}</div>
  </div>
);

export default Card;
